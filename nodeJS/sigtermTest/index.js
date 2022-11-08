// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.listen(3000, () => {
//   console.log("server listening on port 3000");
// });

// =====================================

const keypress = require("keypress");
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on("keypress", function (ch, key) {
  console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == "c") {
    process.stdin.pause();
  }
  if (key && key.ctrl && key.name == "d") {
    console.log("fuck");

    process.stdin.pause();
  }
});

// stdin를 읽기 시작하므로 종료되지 않는다.
// process.stdin.resume();

// process.on("SIGINT", function () {
//   console.log("Got SIGINT.  Press Control-D to exit.");
// });
