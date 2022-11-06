// 함수도 data이기 때문에 배열과 객체에도 담을 수 있다.

var test = () => {
  console.log("test");
  return "yap";
};

var k = [test];
k[0]();
k[0];

var j = { function: test };
console.log(j.function);
console.log(j.function());
j.function();

var moduleTest = require("./moduleTest.js");
moduleTest();

//---------------------------
// json assign test

const k = () => {
  return { a: 4, b: 3 };
};

let test1 = k();
let test2 = Object.assign(test1, { e: 2 });
console.log(test2);
