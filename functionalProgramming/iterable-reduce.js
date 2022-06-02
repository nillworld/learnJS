const nums = [1, 2, 3, 4, 5];
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
  { name: "폰케이스", price: 15000 },
];
let total = 0;

// for문으로 모든 인자 더하기
for (const n of nums) {
  total = total + n;
}
console.log(total); // 15

const reduce = (f, acc, iter) => {
  // 여기서 초기에 들어오는 acc는 시작 값
  // * acc란 누산기(accumulator)로 cpu에서 중간 산술 논리 장치 결과가 저장되는 레지스트리.

  // js에서 사용하는 reduce는 acc가 optional이고, 이를 위해 다음과 같이 작성된다.
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const add = (a, b) => a + b;

console.log(add(add(add(add(add(0, 1), 2), 3), 4), 5)); //15
// 위를 reduce함수를 이용해서 아래와 같이 나타낼 수 있다.
console.log(reduce(add, 0, nums)); // 15

console.log(reduce(add, nums)); // 15 (acc가 optional일때)

console.log(reduce((acc, products) => acc + products.price, 0, products)); //105000

console.log(reduce((acc, products) => acc + products.price, products)); //[object Object]20000300002500015000
// products[Symbol.iterator]().next().value가 object이기 때문에 ex) { name: '반팔티', price: 15000 } + 20000

// Array.prototype.reduce()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#%EB%AA%85%EC%84%B8
