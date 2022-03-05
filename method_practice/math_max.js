// Math.max(): 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환.

// 숫자로 이루어진 배열이 주어졌을때 가장 큰 수를 출력하기.
function maxNum(numbers) {
  let result = Math.max(...numbers);

  return result;
}

let arr = [100, 200, 400, 20, 10, 278, 488];
console.log(maxNum(arr)); // 488
