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

const add = (a, b) => a + b;

const go = (...args) => reduce((a, f) => f(a), args);
const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

console.log(
  go(
    add(0, 1),
    (a) => a + 10,
    (a) => a + 100
  )
); //111

const f = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100
);

console.log(f(0, 1)); // 111
