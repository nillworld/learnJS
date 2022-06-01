let arr = [1, 2, 3];
let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

// console.log(...arr, ...map);

arr[Symbol.iterator]();

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

for (const a of iterable_custom) console.log(a);
