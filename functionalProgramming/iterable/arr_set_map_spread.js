/* 
- iterable: iterator를 리턴하는 [Symbol.iterator]()를 가진 값
		> arr = [1, 2, 3]
		> arr[Symbol.iterator] - function ~~ / > arr[Symbol.iterator]() - Array Iterator {};
- iterator: { value, done } 객체를 리턴하는 next()를 가진 값
		> arr[Symbol.iterator]().next() - {value: 1, done: false}
- iterable, iterator 프로토콜: iterable을 for...of, 전개 연산자 등과 함꼐 동작하도록 한 규약
		> for(const a of arr) console.log(a); - 1 2 3
*/

console.log("Arr --------------------");
const arr = [1, 2, 3];
for (const a of arr) console.log(a);
console.log(arr);
// arr[0] //1

// Symbol은 어떠한 객체의 키로 사용 가능
console.log(arr[Symbol.iterator]);
let iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
for (const a of arr) console.log(a); // 1 2 3
for (const a of iterator) console.log("iterator-console 1: ", a); // 3
for (const a of iterator) console.log("iterator-console 2: ", a); // 안나옴! - next()할게 없어서
iterator = arr[Symbol.iterator](); // iterator 초기화
for (const a of iterator) console.log("iterator-console 3: ", a); // 1, 2, 3

/* 
// arr의 Symbol.iterator를 비우고 log확인
arr[Symbol.iterator] = null;
for (const a of arr) console.log(a);
// TypeError: arr is not iterable
*/

console.log("Set --------------------");
const set = new Set([1, 2, 3]);
for (const a of set) console.log(a);
// set[0] //undefined

console.log("Map --------------------");
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
// map[0] //undefined
for (const a of map) console.log(a); // [ 'a', 1 ] [ 'b', 2 ] [ 'c', 3 ]
let map_iterator = map[Symbol.iterator]();
console.log(map_iterator); //[Map Entries] { [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] }
map_iterator.next();
console.log(map_iterator); //[Map Entries] { [ 'b', 2 ], [ 'c', 3 ] }

let keys = map.keys(); // iterator를 리턴함. - keys(), values(), entries() 이들 모두 iterator를 가짐
console.log(keys); //[Map Iterator] { 'a', 'b', 'c' }
for (const a of keys) console.log(a); // keys가 iterator를 가지므로 동작.

console.log("Spread --------------------");
// 전개연산자 또한 iterator 프로토콜을 이용하여 펼치는 것.
console.log(...[5, 6], ...arr, ...set, ...map, ...map.keys()); // 5 6 1 2 3 1 2 3 [ 'a', 1 ] [ 'b', 2 ] [ 'c', 3 ] a b c
