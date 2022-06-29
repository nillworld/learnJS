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

const arr = [10, 43, 32];
const sum = arr.reduce((a, b) => a + b, 0);
const sum2 = arr.reduce((a, b) => {
  console.log("<sum2> a: ", a, "b: ", b);
  return a + b;
});
console.log("sum: ", sum);
console.log("sum2: ", sum2);

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "바지", price: 25000 },
];
const price_sum = products.reduce((acc, product) => acc + product.price);
const price_sum2 = products.map((product) => product.price).reduce((acc, price) => acc + price);
console.log(price_sum);
console.log(price_sum2);

const functions = [(a) => a + 10, (a) => a + 100, (a) => a + 1000];
const functions_reduce = functions.reduce((a, f) => f(a), 0);
console.log(functions_reduce);

const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

const groupByAge = people.reduce((groupByAgeObj, person) => {
  if (groupByAgeObj[person.age]) {
    groupByAgeObj[person.age].push(person);
  } else {
    groupByAgeObj[person.age] = [person];
  }
  return groupByAgeObj;
}, {});
console.log(groupByAge);

// 좀더 가용성 있게 함수 정의
const groupBy = (objectArray, property) =>
  objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [obj];
    } else {
      acc[key].push(obj);
    }
    return acc;
  }, {});

const groupedPeople = groupBy(people, "age");
console.log(groupedPeople);

// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
