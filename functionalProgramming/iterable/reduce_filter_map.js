const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

////////////////////////////////////////////////

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
  { name: "폰케이스", price: 15000 },
];

const add = (a, b) => a + b;

console.log(
  reduce(
    add,
    filter(
      (price) => price > 20000,
      map((p) => p.price, products)
    )
  )
);

/* 
함수형 프로그래밍을 할 때 하나하나씩 단순히 조건 걸면서 확장.
ex) 
	reduce(add, [1,2,3,4])
	=> reduce(add, filter(a => a>=2, [1,2,3,4]))
	=> reduce(add, filter(a => a>=2, map(p => p.price, products)))
*/
