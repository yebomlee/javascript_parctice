// fill(): 시작 인덱스부터 종료 인덱스 바로 앞까지의 모든 배열 요소를 특정 값으로 교체함.

// 휴대폰 번호가 담긴 문자열이 주어질 때, 뒤의 4자리를 "*"로 바꿔서 리턴하기.
function solution(phone) {
  let arr = phone.split('');

  return arr.fill('*', -4).join('');
}

console.log('결과', solution('01012345678')); // "0101234****"

// 주어진 배열의 2번째부터 5번째까지 숫자 10으로 변경해 주는 함수를 만들기.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function fill(arr) {
  return arr.fill(10, 1, 5);
}
console.log(fill(arr)); // [1, 10, 10, 10, 10, 6, 7, 8]
