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
