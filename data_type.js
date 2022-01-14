// Modern JavaScript란? 현시점에 사용하기 적합한 범위 내에서 최신 버전의 표준을 준수하는 자바스크립트
// JavaScript와 ECMAScript의 차이점

// 데이터 타입의 특징과 종류
// JavaScript는 데이터 타입이 유연하다. 데이터 타입이 상황에 따라 변할 수 있다.

// 기본형(Primitive Type): Number, String, Boolean, Null, Undefined, Symbol(유일한 값을 만들 때), BigInt(엄청 큰 숫자를 다룰 때)
// 참조형(Reference Type): Object


// Symbol
// 코드 내에서 유일한 값을 가진 변수 이름을 만들 때 사용.
const user = Symbol(); // Symbol이라는 함수를 통해서 심볼 값을 만들어 낼 수 있음.
const user = Symbol('this is a user') // 괄호 안에 심볼에 대한 설명을 추가 가능.

// user 변수는 다른 어떤 값과 비교해도 true가 될 수 없는 고유한 변수가 된다.
user === 'this is user'; // false
user === 'user'; // false
user === 'Symbol'; // false
user === true; // false
user === false; // false
user === 123; // false
user === 0; // false
user === null; // false
user === undefined; // false

// 똑같은 설명을 붙인 심볼을 만들더라도 두 값을 비교하면 false 반환
const firstSymbol = Symbol('this is Symbol');
const secondSymbol = Symbol('this is Symbol');

console.log(firstSymbol === secondSymbol); // false


// BigInt
// 아주 큰 정수(Integer)를 표현하기 위해 등장한 데이터 타입.
// 자바스크립트에서 안전한 최대 정수(이 숫자 범위를 초과하는 정숫값은 연산 시, 미세한 오류 발생)는 2**53 - 1(9007199254740991, 약 9000조), 안전한 최소 정수는 -(2**53 - 1)이다.
console.log(9007199254740991 + 1 === 9007199254740991 + 2); // true
console.log(9007199254740991 + 2); // 9007199254740992
console.log(9007199254740993); // 9007199254740992

// BigInt 타입의 값은 일반 정수 마지막에 알파벳 n을 붙이거나 BigInt라는 함수 사용.
console.log(9007199254740993n); // 9007199254740993n
console.log(BigInt(9007199254740993)); // 9007199254740993

// 큰 정수를 표현하기 위한 데이터 타입이므로 소수 표현 사용 불가.
console.log(1.5n); // SyntaxError

// 소수 형태의 결과가 리턴되는 연산은 소수점 아랫부분은 버려지고 정수 형태로 return.
console.log(10n / 6n); // 1n
console.log(5n / 2n); // 2n

// BigInt 타입끼리만 연살할 수 있고, 서로 다른 타입끼리의 연산은 명시적으로 타입 변환을 해야 함.
console.log(3n * 2); // TypeError
console.log(3n * 2n); // 6n
console.log(Number(3n) * 2); // 6

// boolean인듯 boolean 아닌 boolean 같은 값
// 불린이 아닌 타입의 값이 불린 타입으로 형 변환 됨.
// false로 평가되는 값(falsy 값): false, null, undefined, NaN, 0, ''(빈 문자열)
// true로 평가되는 값: 나머지 값 모두. (주의! [], {}는 truthy 값이다.)

const flowers = ["사자", "호랑이", "돼지", "사슴", "토끼"];

for (let i = 4; i; i = i - 2) {
  console.log(flowers[i]); // 토끼, 돼지
}
// 0이나 ''(빈 문자)가 되는 순간에도 반복이 멈출 수 있음.(falsy 값)
