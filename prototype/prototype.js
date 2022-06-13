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
