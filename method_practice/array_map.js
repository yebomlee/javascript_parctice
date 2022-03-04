// map(): 모든 배열 요소에 대한 함수를 호출하여 새 배열 생성.

// 숫자로 읽을 수 있는 문자열이 담긴 배열의 문자열을 숫자로 변환해 배열에 담기.
// HINT : Number('1')

function solution(element, index, array) {
  return Number(element);
}

const arr = ['1', '2', '3'];
const result = arr.map(solution);

console.log(result); // [1, 2, 3]
