/* // go
const preReduce = (a, ...fs) => {
  for (const f of fs) {
    a = f(a);
  }
  return a;
};
const preReduce_test = preReduce(
  5,
  (a) => a + 10,
  (a) => a + 100,
  (a) => a + 1000
);
console.log(preReduce_test);

// go with reduce 1
const reduce = (f, acc, iter) => {
  console.log(iter);
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};
const go =
  (f, ...fs) =>
  (a) =>
    reduce(f, a, fs);
const goTest = go(
  (a) => a + 10,
  (a) => a + 100,
  (a) => a + 1000
);
console.log(goTest(5));

// go with reduce 2
const reduce2 = (acc, ...fs) => {
  for (const f of fs) {
    acc = f(acc);
  }
  return acc;
};
const go_reduce = (a, ...fs) => reduce2(a, ...fs);
const go_test2 = go_reduce(
  5,
  (a) => a + 10,
  (a) => a + 100,
  (a) => a + 1000
);
console.log(go_test2);
 */

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

let test = reduce((a, f) => f(a), [0, (a) => a + 10, (a) => a + 100]);
console.log(test);
