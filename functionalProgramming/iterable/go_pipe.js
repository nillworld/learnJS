const reduce = (f, acc, iter) => {
  console.log(f);
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

// function go(iterable argument){ return reduce() }
/// function reduce(function, arguments){ return function(argument), iterable argument }
const go = (...args) => reduce((a, f) => f(a), args);
const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);
console.log(
  go(
    0,
    (a) => a + 10,
    (a) => a + 100
  )
); //111

const fuc = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100
);

console.log(fuc(0, 1)); // 111
