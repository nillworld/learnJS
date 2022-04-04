# Learn JS
* [함수형 프로그래밍](#함수형-프로그래밍)

<br/><br/><br/><br/><br/><br/>

## 함수형 프로그래밍
- 순수함수
```JavaScript
function func(a, b) {
  return a + b;
}
console.log(func(2, 2)); // 4
```
입력값이 2, 2이면 언제나 리턴되는 값은 4!
또한 다른 외부 변수를 변경하는 등 영향을 주지 않음.
<br/><br/> 

- 순수하지 않은 함수
```JavaScript
let c = 1;
function func(a, b) {
  return a + b + c;
}
console.log(func(2, 2)); // 5

c = 2; 
console.log(func(2, 2)); // 6
```
동일한 입력에 다른 출력
<br/><br/> 

```JavaScript
let c = 1;

function func(a, b) {
  c += 1; // 외부의 값(변수)에 변화를 주며, 이를 부수효과라 함
  return a + b;
}

func(2, 2); // 함수 실행
console.log(c); // c 값이 2로 변화됨
```
외부 변수를 변경 - 부수효과
<br/><br/> 

```JavaScript
let obj = {
  a: 1
};

function func(obj) {
  return obj; // 인자로 받은 객체를 그대로 리턴
}

let obj2 = func(obj); // 새로운 변수에 리턴된 객체를 할당

obj2.a = 2; // 새로운 객체 obj2의 a 값을 변경

console.log(obj2); // { a: 2 }
console.log(obj); // { a: 2 }
```
func 함수를 실행하여 새로운 변수에 리턴받은 객체를 할당했으며, 새로운 객체 obj2의 a 값을 변경하였다. 그랬더니 기존의 obj 객체의 값도 변경이 되었다. 바로 객체의 참조(주소) 값도 같이 복사되어 새롭게 만든 obj2가 변화함에 따라 기존의 obj 객체도 변경되기 때문이다. 이처럼 함수 내에서 직접 값을 변경하지 않았더라도 함수에 들어온 인자값을 그대로 사용하면 순수 함수가 아니다.
