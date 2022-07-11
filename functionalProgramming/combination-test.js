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
