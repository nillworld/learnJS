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

## 구현한 reduce 함수의 활용

```javaScript
const iterF = [(a) => a + 1, (a) => a + 10, (a) => a + 100];
reduce((a, f) => f(a), 0, iterF); // 111
```

- 여기서 헷갈릴 수 있는게 `reduce(function, acc, iter)`에서 function에 해당하는게 `(a, f)=>f(a)`이고 이때 `f`는 `iterF`의 인자 하나( `a=>a+1` )이고, a는 누산기이다.

## 내장 Method - reduce

```javascript
arr.reduce(callback(accumulator, currentValue[, currentIndex, array]) [, initialValue])
```

- `accumulator`: 누산기. 콜백의 반환값을 누적. 만약 `initialValue`가 없다면
