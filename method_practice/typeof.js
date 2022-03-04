// typeof: 피연산자의 평가 전 자료형을 나타내는 문자열을 반환.

// 숫자와 문자가 섞여있는 배열 arr이 주어질 때, 숫자는 숫자끼리, 문자는 문자끼리 순서대로 더해
// 새로운 배열에 [숫자합, 문자합] 형태로 리턴해주는 함수 solution을 완성하기.
function solution(arr) {
  let sum = 0;
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum = sum + arr[i];
    } else if (typeof arr[i] === 'string') {
      str = str + arr[i];
    }
  }
  return [sum, str];
}

const arr = [4, 6, 'java', 2, 'script', 3];

const result = solution(arr);

console.log(result); // [15, 'javascript']
