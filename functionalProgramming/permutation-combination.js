const combine = (array, n) => {
  const result = [];
  const copyArray = [...array];
  for (const i in array) {
    if (n > 0) {
      result.push(copyArray[i]);
      copyArray.splice(i, 1);
      // console.log("cut", copyArray);

      // console.log("check", result);
      const subResult = combine(copyArray, n - 1);

      result.push(...subResult);
    } else if (n === 0) {
      result.push(",");
    }
  }
  return result;
};

let test = combine([1, 2, 3], 2);
// console.log("test", test);

//  위에껀 뇌절

////////////////////////////////////////////////////////////////

// for ... in 사용
const getCombination = (arr, n) => {
  const result = [];
  if (n === 1) return arr.map((el) => [el]);

  for (const i in arr) {
    const addNum = arr[i];

    // const cutArr = arr.slice(i + 1);
    // console.log(cutArr, n, typeof i);// 여기서 i가 string이라고?

    const cutArr = arr.slice(parseInt(i) + 1);
    const combination = getCombination(cutArr, n - 1);
    const stackedCombination = combination.map((el) => [addNum, ...el]);
    result.push(...stackedCombination);
  }
  return result;
};

// forEach 사용
const getCombinations2 = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations2(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두 다 push
  });

  return results; // 결과가 담긴 results를 return
};
let dupArr = [1, 4, 3, 4, 2, 3, 7];
let set = new Set(dupArr);
let uniqueArr = [...set];
let combination = getCombination(uniqueArr, 3);
// console.log(combination);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

const getPermutation = (array, n) => {
  let result = [];
  array.forEach((a, i, arr) => {
    if (n === 1) return arr.map((el) => [el]);
    const cutArr = arr.splice(i, 1);
    const subPermutation = getPermutation(cutArr, n - 1);
    result = subPermutation.map((el) => [...el, a]);
  });
  return result;
};
let testP = [1, 2, 3];
let permutation = getPermutation(testP, 2);
console.log(permutation);
