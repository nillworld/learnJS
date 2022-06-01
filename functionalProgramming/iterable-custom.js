const iterable_custom = {
  // iterable 값은 Symbol iterator 메소드를 구현하고 있어야 함
  [Symbol.iterator]() {
    let i = 3;
    // Symbol iterator 메소드는 iterator를 반환 해야함
    return {
      // iterator는 next를 메소드로 가지고 있음
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },

      /* 
				iterator가 자기 자신을 반환하는 Symbol.iterator 메소드를 가지고 있을 때, 
				이를 '잘 구현된 iterator'(well formed iterator)라고 한다.
			*/
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
let iteratorCheck = iterable_custom[Symbol.iterator]();
console.log("Symbol.iterator를 실행한 값은 자기 자신 - ", iteratorCheck[Symbol.iterator]() === iteratorCheck); // true
console.log(iteratorCheck.next()); // { value: 3, done: false }
console.log(iteratorCheck.next()); // { value: 2, done: false }

for (const a of iterable_custom) console.log(a); // 3 2 1

// 만약 iterable의 Symbol.iterator 메소드에서 자기 자신을 반환하는 Symbol.iterator 메소드를 가지지 않는다면
// 아래의 for...of문은 동작하지 않는다.
for (const a of iteratorCheck) console.log(a); // 1
console.log(iteratorCheck.next()); // { done: true }

/* 
	많은 오픈소스나 웹API(DOM 등)에서도 iterable 프로토콜을 따른다.
	ex)
		const ex = document.querySelectorAll("*");
		for( const a of ex) log(a);
		log(ex[Symbol.iterator]());
*/

console.log("==================================================");

const myIterator = {
  num: 0,
  [Symbol.iterator]() {
    let num = this.num;
    return {
      next() {
        return num === 0 ? { done: true } : { value: num--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

myIterator.num = 3;
let iterTest = myIterator[Symbol.iterator]();
console.log(iterTest.next());
console.log(iterTest.next());
console.log(iterTest.next());
console.log(iterTest[Symbol.iterator]() === iterTest);

for (const a of myIterator) console.log(a);

// iterator함수안에서 규칙을 다시 설정 할 수 있는 'f'를 구현해 보고자 했지만 아직 안됨.

const myIterator2 = {
  min: 0,
  max: 0,
  f(a) {
    return a * 2;
  },
  [Symbol.iterator]() {
    let min = this.min;
    let max = this.max;
    let f = this.f(min);
    return {
      next() {
        console.log(f, max);
        return f > max ? { done: true } : { value: min++, done: false, f: f, max: max };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
myIterator2.min = 10;
myIterator2.max = 11;
// myIterator2.f = function () {
//   return myIterator2.max;
// };

let test = myIterator2[Symbol.iterator]();
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(myIterator2.f());
console.log(test.next());
console.log(test.next());
console.log(test.next());
