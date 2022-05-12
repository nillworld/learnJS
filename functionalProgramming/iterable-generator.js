/* 
	Generator: iterator이며 iterable을 생성하는 함수
*/

function* gen(a) {
  // 일드
  yield 1;
  yield 2;
  if (a === 2) yield 3;
  yield 4;
  for (const a of [1, 3, 5]) yield a;
  return 100;
}

let iter = gen(1);
// generator는 well-formed iterator
console.log(iter[Symbol.iterator]() === iter); //true
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 4, done: false }
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 5, done: false }
console.log(iter.next()); // { value: 100, done: true }
console.log(iter.next()); // { value: undefined, done: true }

// 순회할 때 return값은 나오지 않음.
for (const a of gen(1)) console.log(a); // 1 2 4 1 3 5

console.log("odds -------------------------------");

// 따로 제한 안걸어 두면 i 이상 부터 무한히 yield 생성. 즉, 무한히 iterator.next() 생성
function* infinity(i = 0) {
  while (true) yield i++;
}
for (const a of infinity(10)) {
  console.log("infinity(10)", a); // a -> 10 11 12 ... 19 20
  if (a >= 20) break;
}

// 제네레이터 함수(이터레이터)인 infinity의 제한을 거는 제네레이터 함수
function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a === l) return;
  }
}

// limit 제네레이터 함수를 이용한 짝수를 뽑아내는 이터레이터 생성
function* odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

let iter2 = odds(10);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
