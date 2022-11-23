const express = require("express");
const fs = require("fs");

const app = express();

const server = app.listen(3000, () => console.log("Running…"));

let connections = [];

let count = 0;

setInterval(
  () =>
    server.getConnections((err, connec) =>
      console.log(`${connec} connections currently open /// ${connections.length}`)
    ),
  1000
);

// 0. 요청 처리

// - 이벤트 루프에 넘긴 요청 개수를 담는 배열

// - 요청 처리하는 API
app.get("/", (req, res) => {
  connections.push(req);
  console.log("check---------", connections.length);
  fs.cp(
    "test",
    `test${connections.length}`,
    {
      recursive: true,
      force: true,
    },
    () => {
      // - 이벤트 루프에서 처리가 끝나서 응답이 오면 배열에서 삭제
      connections = connections.filter((c) => c !== req);
      console.log("check---------222222222", connections.length);
    }
  );
  // res.json({ ping: true, date: "HI" });
  const date = new Date();
  res.json({ ping: true, date: date, req: connections.length });
});

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

const test3 = () => {
  console.log("GET SIGINT");
  server.close();

  count += 1;

  if (connections.length === 0) {
    return process.exit(1);
  }

  if (count === 2) {
    console.log("SIGKILL");
    return process.exit(1);
  }

  setTimeout(() => {
    count -= 1;
    console.log("count check: ", count);
  }, 3000);

  setInterval(() => {
    console.log("Connect count: ", connections.length);
    if (connections.length === 0) {
      console.log("연결 없어서 끝냄");

      process.exit(0);
    }
  }, 1000);
};

// process.on("SIGTERM", test3);
process.on("SIGKILL", () => console.log("killllllllll"));
process.on("SIGINT", test3);
