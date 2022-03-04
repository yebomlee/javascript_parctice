// for..of문은 반복 가능한 객체의 값을 반복.
// 숫자로만 이루어진 배열 for...of문을 이용해 숫자의 총합을 구하기.

const arr = [11, 22, 33, 44, 55];
let sum = 0;

for (let element of arr) {
  sum = sum + element;
}

console.log(sum); // 165
