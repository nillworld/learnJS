const a = (a, b, c) => {
  if (!c) c = b;
  return a + b + c;
};

console.log(a(1, 2, 3));
console.log(a(1, 2));
