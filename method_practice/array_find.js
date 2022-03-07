// find(): 검사를 위해 전달받은 함수를 만족하는 배열의 첫 번째 요소의 값을 반환함. 만족하는 값이 없으면 undefined를 반환함.

// 배열 numbers에 5가 포함되어 있는지 find 이용하기.
const numbers = [1, 2, 3, 4, 5];

function callBackFn(ele, idx, arr) {
  if (ele === 5) return true;
}

let result = numbers.find(callBackFn);
console.log('결과', result); // 5
