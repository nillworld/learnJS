const nums = [1, 2, 3, 4, 5];
let total = 0;
for (const n of nums) {
  total = total + n;
}

console.log(total); // 15

// 여기서 초기에 들어오는 acc는 시작 값
const reduce = (f, acc, iter) => {
  // js에서 사용하는 reduce는 acc가 optional이고, 이를 위해 다음과 같이 작성된다.
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
}; // acc는 누적 값

const add = (a, b) => a + b;

console.log(reduce(add, 0, nums)); // 15

console.log(add(add(add(add(add(0, 1), 2), 3), 4), 5)); //15

console.log(reduce(add, nums)); // 15 (acc가 optional일때)
