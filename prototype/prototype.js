function Person() {}

let nill = new Person(); // Person이라는 생성자 함수로 nill이라는 인스턴스 생성.
let berry = new Person();
console.log(Person.prototype.constructor);
console.log(Person.prototype.constructor.prototype);
console.log(Person.prototype.constructor.prototype.constructor);
console.log(Person.prototype.constructor.prototype.constructor === Person.prototype.constructor);
console.log(nill);
console.log(nill.constructor);
console.log(Person.prototype.constructor.prototype.constructor === nill.constructor);

/* 

prototype은 상위 객체의 상속처럼 보이지만, 실제로는 필요할때만 찾는 참조이다.

*/

Person.prototype.test = () => "test 속성.";
console.log(nill.test());
Person.prototype.test = () => "test 속성 바꿈.";
console.log(nill.test());
nill.test = () => "객체를 통해 test 속성 바꿈.";
console.log(nill.test());
console.log(berry.test());
Person.prototype.test = () => "test 속성 생성자로 다시 바꾸면?";
console.log(nill.test());
console.log(berry.test());
console.log(nill.__proto__); // '__proto__': 바로 위 객체 프로토타입을 가져 옴. (비표준 속성)
console.log(Array.prototype.__proto__); // 상위 객체(Object) 프로토타입
console.log(Object.prototype.__proto__); // 상위 객체 없음
Object.prototype.top_prototype = "this prototype is from Object";
console.log(nill.top_prototype);

////////////////////////////////////////////

console.log("Object property names", Object.getOwnPropertyNames(Object));
console.log("Object.prototype property names", Object.getOwnPropertyNames(Object.prototype));
console.log("Array property names", Object.getOwnPropertyNames(Array));
console.log("Array.prototype property names", Object.getOwnPropertyNames(Array.prototype));
console.log("Array.prototype property symbol", Object.getOwnPropertySymbols(Array.prototype));
console.log(
  "Array.prototype property[Symbol.iterator] names",
  Object.getOwnPropertyNames(Array.prototype[Symbol.iterator])
);
// Array.prototype[Symbol.iterator] = () => "fuck";
// let arr = [1, 2, 3];
// console.log("arr[Symbol.iterator] property names", Object.getOwnPropertyNames(arr[Symbol.iterator]));
// console.log(arr[Symbol.iterator]()[Symbol.iterator]());
// console.log(arr[Symbol.iterator]()[Symbol.iterator]()[Symbol.iterator]()[Symbol.iterator]());

// key 값으로
let test = {
  num: 10,
  [10]() {
    return 11;
  },
};
console.log(test[test.num]());
console.log(test[10]());

/* 
>> reference
symbol type: https://it-eldorado.tistory.com/149
Object prototypes: https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes
function and method: https://ffoorreeuunn.tistory.com/149
*/
