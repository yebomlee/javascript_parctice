// every(): 배열 안의 요소가 주어진 판별 함수를 통과하는지 테스트하여 boolean값을 반환함.

// 배열의 모든 element가 숫자라면 true, 하나라도 숫자가 아니라면 false를 리턴하기.
function solution(element, index, array) {
  if (typeof element === 'number') {
    return true;
  }
}

const result1 = [1, 2, 3, 4, 5].every(solution);
console.log('result1', result1); // true

const result2 = [1, 2, 3, '4', 5].every(solution);
console.log('result2', result2); // false
