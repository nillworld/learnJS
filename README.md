# Learn JS

### list
* [자바스크립트 비동기 처리 과정](#자바스크립트-비동기-처리-과정)
* [함수형 프로그래밍](#함수형-프로그래밍)

<br/><br/>
===
<br/><br/>
## 자바스크립트 비동기 처리 과정
- 자바스크립트 처리 과정
```JavaScript
console.log("script start");
setTimeout(function() {
  console.log("setTimeout");
}, 0);
Promise.resolve().then(function() {
  console.log("promise1");
}).then(function() {
  console.log("promise2");
});
requestAnimationFrame(function {
    console.log("requestAnimationFrame");
})
console.log("script end");
```
결과
```
script start
script end
promise1
promise2
requestAnimationFrame
setTimeout
```
**자바스크립트 엔진**은 하나의 쓰레드를 가지고 있고, 멀티쓰레드 처럼 보이는 이유는 WebAPI덕분이다.
자바스크립트를 실행하면 스크립트가 stack에 올라가 작업 순서대로 Call stack에서 실행되고 난 후 삭제되는데, setTimeout, requestAniationFrame, Promise는 WebAPI에게 작업을 요청하고 Call stack에서는 삭제한다.
WebAPI에서는 callback 함수를 taskQueue에 전달하는데, setTimeout의 callback 함수는 Task Queue, Promise의 callback 함수는 Microtask Queue, 그리고 requestAnimationFrame의 callback함수는 Animation frames에 전달한다.
그 후 자바스크립트의 Call stack이 비어있으면 Event Loop가 Microtask Queuem - requestAnimationFrame - Task Queue의 순으로 그 안의 작업을 순차적으로 Call stack에 불러와 자바스크립트는 시행한다.
<br/><br/><br/>
**Reference**
https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/ <br/>
https://sculove.github.io/post/javascriptflow/
<br/><br/><br/>
▲ [Top](#list)
<br/><br/>
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

<br/><br/>
▲ [Top](#list)
