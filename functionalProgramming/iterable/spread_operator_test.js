const test = (a, ...b) => {
  console.log("인자 하나만 받음", a);
  for (const f of b) console.log(f);
};

test(4, 2, 1, 5, "2,4", "e");

const test2 = (a, f) => f(a);

console.log(test2(10, (n) => n * 10)); // 100
// test2((n) => n * 10, 10); // f is not a function

const test3 = (a, ...fs) => {
  for (const f of fs) {
    a = f(a);
  }
  return a;
};
console.log(
  test3(
    5,
    (a) => a * 2,
    (a) => a * 100
  )
);
