# reduce()

- reduce함수는 배열의 각 요소를 순회하며 callback 함수의 실행 값을 누적하여 하나의 결과값을 반환.

## reduce 함수 구현

```javaScript
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
```

- f: 계산 식이 되는 function.
- acc: accumulator(누산기). 계산된 값을 누적해 저장하는 변수. 인자가 3개이면 처음 누산기는 초기값, 2개라면 iter의 처음 계산 값이 초기값이 된다.
- iter: iterator protocol을 따르는 인자(배열 등).

### 구현한 reduce 함수의 활용

```javaScript
const iterF = [(a) => a + 1, (a) => a + 10, (a) => a + 100];
reduce((a, f) => f(a), 0, iterF); // 111
```

- 여기서 헷갈릴 수 있는게 `reduce(function, acc, iter)`에서 function에 해당하는게 `(a, f)=>f(a)`이고 이때 `f`는 `iterF`의 인자 하나( `a=>a+1` )이고, a는 누산기이다.

## 내장 Method - reduce

```javascript
arr.reduce(callback(accumulator, currentValue[, currentIndex, array]) [, initialValue])
```

- `accumulator`: 누산기. 콜백의 반환값을 누적. 만약 `initialValue`(초기값)가 없다면 `arr`의 첫번째 값을 `accumulator`에 넣고 두번째 값을 `currentValue`에 넣어서, arr의 두번째 값 부터 callback 함.

### reduce Method의 활용

```javascript
const arr = [10, 43, 32];
const sum = arr.reduce((a, b) => a + b, 0);
console.log(sum); //85
```

```javascript
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "바지", price: 25000 },
];
const price_sum = products.reduce((acc, product) => acc + product.price, 0);
console.log(price_sum); // 60000

const price_sum2 = products.reduce((acc, product) => acc + product.price);
console.log(price_sum2); // [object Object]2000025000
```

- `price_sum2`에서 처음으로 callback되었을 때 `acc`는 product의 첫번째 인자값이 되기 때문에 `[object Object]`가 넣어져서 위와 같은 결과가 된다.

```javascript
const functions = [(a) => a + 10, (a) => a + 100, (a) => a + 1000];
const functions_reduce = functions.reduce((a, f) => f(a), 0);
console.log(functions_reduce); // 1110
```
