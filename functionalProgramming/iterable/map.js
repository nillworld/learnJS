const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
  { name: "폰케이스", price: 15000 },
];

// 함수형 프로그래밍에서는 인자와 return값으로 소통하는 것을 권장

// map은 고차함수 - 함수를 값으로 다루고, 원하는 시점에 인자를 적용할 수 있음.
const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

// map이라는 함수에 'p=>p.name'같이 보조함수를 통해서 iterable 안에 있는 값을 전달
console.log(map((p) => p.name, products));
console.log(map((p) => p.price, products));

products.map((a) => console.log(a));

function* gen() {
  yield 2;
  yield 3;
  yield 4;
}
console.log(map((a) => a * a, gen())); // [4, 9, 16]

/* =============================================================== */

let m = new Map();
m.set("a", 10);
m.set("b", 20);

console.log(map(([w, n]) => [w, n * 2], m)); // [ [ 'a', 20 ], [ 'b', 40 ] ]

/* =============================================================== */

// web api에서 querySelectorAll은 iterable 함수 이지만 array를 상속하는 함수는 아니기에
// document.querySelectorAll.map(a=> log(a)); 형태가 될 수 없다.

// 하지만 위에서 명세한 map 함수는 iterator를 이용하는 함수이기 때문에 동작가능.
// log(map(el => el.nodeName, document.querySelectorAll('*')));
