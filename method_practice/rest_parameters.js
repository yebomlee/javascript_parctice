// Rest parameters: 함수가 무한한 수의 인수를 배열로 처리 가능.

// 인수로 전달된 숫자들의 총합을 구하는 함수를 만들기.
function sumAllArgs(...args) {
  let total = 0;
  for (let arg of args) {
    total = total + arg;
  }
  return total;
}

console.log(sumAllArgs(5, 7, 2)); // 14
console.log(sumAllArgs(8, 100, 11, 92)); // 211
