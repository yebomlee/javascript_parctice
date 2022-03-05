// 조건부 삼항 연산자: JavaScript에서 세 개의 피연산자를 취할 수 있는 유일한 연산자.

// 임의의 수가 100보다 크면 true를 반환해주고 100보다 작거나 같으면 false를 반환해주는 함수를 만들기.
function isGreaterThanHundred(num) {
  return num > 100 ? true : false;
}

console.log(isGreaterThanHundred(80)); // false
console.log(isGreaterThanHundred(120)); // true
