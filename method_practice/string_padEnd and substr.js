// substr(): 지정된 위치에서 시작하여 지정된 수의 문자를 반환.
// padEnd(): 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환.

// 문자열로 된 주민번호가 주어졌을 때 주민번호 뒷자리 7자리를 '*'로 변경해 주는 함수를 만들기.
function securityNumber(str) {
  return str.substr(0, 7).padEnd(14, '*');
}

let str = '991122-1111111';
console.log(securityNumber(str)); //'991122-*******'
