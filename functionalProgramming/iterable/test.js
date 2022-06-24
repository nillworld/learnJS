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
let test = (...a) => reduce(add, a);

// console.log(test(1, 2, 3, 4));

let check = function (...fs) {
  console.log("eee", fs);
  for (const a of fs) console.log(a());
  let iterable = fs[Symbol.iterator]();
  iterable.next().value();
  for (const a of iterable) console.log("ee", a());

  // console.log(iterable.next().value());
  if (!fs[Symbol.iterator]().next().done) check(...iterable);

  return 0;
  // console.log("check");
  // let iterable = fs[Symbol.iterator]();
  // if (fs) {
  //   check(fs);
  // }
  // return f();
  // /* check(fs[Symbol.iterator]().next().value, fs[Symbol.iterator]); */ fs[Symbol.iterator]().next();
};
/* console.log(
  check(
    (a) => 1,
    (a) => 2,
    (a) => 3
  )
); */

let arr = [1, 2, 2, 3, 4];
let t = (arr) => {
  let iterable = arr[Symbol.iterator]();
  console.log(iterable);

  // console.log(iterable);
};
t();
