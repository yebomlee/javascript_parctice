// isNaN()
// Number.isNaN(): 주어진 값이 NaN인지 판별.
// 기존에 존재하던 전역 isNaN() 함수의 더 엄격한 버전.

// 문자열로 이루어진 배열이 존재.
// 숫자로 읽을 수 있는 경우에는 숫자로 바꿔 총 합을 리턴하는 함수 solution 완성하기.

function solution(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      let num = Number(arr[i]);
      sum = sum + num;
    }
  }
  return sum;
}

const arr = ['1', '2w', '3', 'qwer'];

const result = solution(arr);

console.log(result); // 4
