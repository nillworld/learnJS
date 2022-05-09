/* 
Generator - iterator이며 iterable을 생성하는 함수
*/

function* gen() {
  // 일드
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

let iter = gen();
// generator는 well-formed iterator
console.log(iter[Symbol.iterator]() === iter);
