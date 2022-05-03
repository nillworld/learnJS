let test = {
  test3(k) {
    return k * 3;
  },
  test5(k) {
    return k * 5;
  },
  [Symbol]() {
    return {
      test() {
        return 10;
      },
      test2() {
        return 20;
      },
    };
  },
};

console.log(test.test3(3));
console.log(test.test5(3));
console.log(test[Symbol]());
