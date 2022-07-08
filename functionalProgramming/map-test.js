let test = [[1], [2], [3], [4], [4]];
let set = test.map((el) => [0, ...el]);
// console.log("test", set);
let test2 = [1, 4, 3, 4, 2, 3];
let test3 = [];

test2.map((el) => {
  console.log(el);
  if (test3.includes(el)) {
  } else {
    test3.push(el);
  }
});

/* test2.map((el) => {
	console.log(el);
	if (!(el in test3)) {
	} else {
		test3.push(el);
	}
}); */

console.log(test3);
