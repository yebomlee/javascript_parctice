// reduce(): 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값 반환.

// arr 배열의 총합을 반환하기.
let arr = [14, 36, 43, 64, 88, 97];

function sum(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0);
}

console.log(sum(arr)); // 342
