const test = (a, ...b) => {
  console.log("인자 하나만 받음", a);
  for (const f of b) console.log(f);
};

test(4, 2, 1, 5, "2,4", "e");
