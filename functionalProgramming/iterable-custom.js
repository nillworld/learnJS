const iterable_custom = {
  [Symbol.iterator]() {
    let i = 3;
    return {
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
