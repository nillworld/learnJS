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

/* 
>> go([0, a => a+1, a => a+10, a => a+100, log]); // 111
go라는 함수는 어떠한 리스트를 인자값으로 받는데,
그 리스트에서 앞의 함수의 결과값을 인자로 하여 계산하고 
결과값을 다름 인자값으로 리턴해 주는 식으로 넘어감.
이와 같은 방식은 reduce와 비슷하므로 reduce를 이용하여 함수 작성.


*/
const go = (...args) => reduce((a, f) => f(a), args);
/* 
배열을 다음과 같이 쪼개서 나타낼 수 있는 걸 이용.
let a = [1, 2, 3];
let b = (n, ...m) => {
  console.log(n);
  console.log(...m);
};
b(...a); // 1    2 3 
*/

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
