// fill(): 시작 인덱스부터 종료 인덱스 바로 앞까지의 모든 배열 요소를 특정 값으로 교체함.

// 휴대폰 번호가 담긴 문자열이 주어질 때, 뒤의 4자리를 "*"로 바꿔서 리턴하기.
function solution(phone) {
  let arr = phone.split('');

  return arr.fill('*', -4).join('');
}

console.log('결과', solution('01012345678')); // "0101234****"
