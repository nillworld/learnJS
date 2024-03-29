const getCombination = (arr, n) => {
  const result = [];

  if (n === 1) return arr.map((el) => [el]);

  arr.forEach((a, i, array) => {
    const cutCombination = array.slice(i + 1);
    const subCombination = getCombination(cutCombination, n - 1);
    const addCombination = subCombination.map((el) => [a, ...el]);
    result.push(...addCombination);
  });

  return result;
};

console.log(getCombination([1, 2, 3], 2));

// getCombination(n) = [...getCombination(n-1), a]

// ===========================================

const getPermutation = (arr, n) => {
  const result = [];

  if (n === 1) return arr.map((el) => [el]); // [b, c] => [[b],[c]]

  // getPermutation(n)=[[a, ...getPermutation(n-1)],[b, ...getPermutation(n-1)],[...] ...]
  arr.forEach((a, i, array) => {
    const copyArr = [...array];
    copyArr.splice(i, 1); // b c
    const subPermutation = getPermutation(copyArr, n - 1); // [b],[c] => b, c
    const addPermutation = subPermutation.map((el) => [a, ...el]); //[a, b],[a, c]

    result.push(...addPermutation);
  });

  return result;
};

console.log(getPermutation(["a", "b", "c"], 2));
