// filter(): 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환.

// 주어진 배열에서 짝수인 요소만 새로운 배열에 담도록 solution 함수를 완성하기.
function solution(element, index, array) {
  if (element % 2 === 0) {
    return element;
  }
}

const arr = [1, 2, 3, 4, 5, 6];

const result = arr.filter(solution);

console.log(result); // [2, 4, 6]
