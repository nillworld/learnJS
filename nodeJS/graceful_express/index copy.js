const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  // fs.cpSync("test1", "test4", {
  //   recursive: true,
  //   force: true,
  // });
  res.json({ ping: true, date: "HI" });
  // const date = new Date();
  // setTimeout(() => res.json({ ping: true, date: date }), 5000);
});

const server = app.listen(3000, () => console.log("Running…"));

setInterval(
  () => server.getConnections((err, connections) => console.log(`${connections} connections currently open`)),
  1000
);

let connections = [];
let count = 0;
const test1 = () => {
  if (count === 0) {
    console.log("Connect 끊는 중...");
    count += 1;
    setTimeout(() => {
      console.log("기달렸다가 강제 끊음");
      process.exit(0);
    }, 10000);
  } else {
    console.log("Connect 강제 끊기");
    process.exit(0);
  }
};

const test2 = () => {
  console.log("zzzzzz");
};

const test3 = () => {
  console.log("333333");
};

process.on("SIGTERM", test2);
process.on("SIGTERM", test3);
process.on("SIGINT", test1);
process.on("SIGKILL", test3);
// process.on("SIGINT", shutDown);

server.on("connection", (connection) => {
  connections.push(connection);
  console.log(connections);
  connection.on("close", () => (connections = connections.filter((curr) => curr !== connection)));
});

function shutDown() {
  console.log("Received kill signal, shutting down gracefully");
  server.close(() => {
    console.log("Closed out remaining connections");
    process.exit(0);
  });

  setTimeout(() => {
    console.error("Could not close connections in time, forcefully shutting down");
    process.exit(1);
  }, 10000);

  connections.forEach((curr) => curr.end());
  setTimeout(() => connections.forEach((curr) => curr.destroy()), 10000);
}

// ================================================

// 0. 요청 처리
// - 요청 처리하는 API
// - 이벤트 루프에 넘긴 요청 개수를 담는 배열
// - 이벤트 루프에서 처리가 끝나서 응답이 오면 배열에서 삭제

// 1. SIGTERM 신호
// - 새로 들어오는 요청 차단
// - 현재 요청 처리하고 있는 배열 확인 후 없으면 서버 닫음
// - 배열에 남아 있다면 요청이 완료될 때 까지 기달림.
// - 처리중인 요청 개수에 비례하여 대기 시간 가짐.
// - 대기시간에도 처리가 안 된다면 SIGKILL 명령으로 넘김.

// 2. SIGKILL 신호
// - 처리 중인 요청 강제로 롤백.
// - 롤백 완료 후 서버 닫음.
// - 롤백 시간이 오래걸리면 롤백 중 강제 서버 닫음.
