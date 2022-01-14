// AND와 OR의 연산 방식
// 단축 평가(short circuit evaluation)
// JavaScript에서 AND 연산자는 왼쪽 값이 truthy하면 오른쪽 값 return. 왼쪽 값이 falsy하면 그대로 왼쪽 값을 return.
// OR 연산자는 왼쪽 값이 truthy하면 왼쪽 값을 return. 왼쪽 값이 falsy하면 오른쪽 값을 return.
console.log(null && undefined); // null
console.log(0 || true); // true
console.log('0' && NaN); // NaN
console.log({} || 123); // {}

// 단축 평가 사용법 1. null/undefined 체크. 2. 함수 매개변수 기본값 설정 3. 조건부 변수값 할당
// 활용 예시. 조건식처럼 활용 가능(매개변수 기본값 설정)
const print = (value) => {
  const message = value || 'World'; // falsy한 값의 특징을 활용. 전달한 값이 없다면 'World'를 출력.

  console.log(message);
};

print(); // World
print('Hello'); // Hello

// 연산자 우선순위 주의(AND와 OR 연산자 사이에서는 AND 연산자의 우선순위가 더 높음.)
// 협업시 소괄호를 의도에 맞게 표기하는것도 좋은 습관!
console.log(true || (false && false)); // true
console.log((true || false) && false); // false
console.log('apple' || (NaN && false)); // apple
console.log(('apple' || NaN) && false); // false


// null 병합 연산자(Nullish coalescing operator)
// 물음표 두개(??)를 사용해서 null 혹은 undefined 값을 가려내는 연산자.
// 연산자 왼편의 값이 null 이나 undefined라면 연산자 오른편의 값이 return.
// 연산자 왼편의 값이 null 이나 undefined가 아니라면 연산자 왼편의 값이 return.
const example1 = null ?? 'I'; // I
const example2 = undefined ?? 'love'; // love
const example3 = 'JavaScript' ?? 'JustinBieber'; // JavaScript

console.log(example1, example2, example3); // I love JavaScript

// OR 연산자(||)와 비교
// null 병합 연산자(??)는 왼편의 값이 null이나 undefined인지 확인하고, OR 연산자(||)는 왼편의 값이 falsy인지를 확인.
const title1 = null || 'apple';
const title2 = null ?? 'apple';

console.log(title1); // apple
console.log(title2); // apple

const title1 = false || 'banana';
const title2 = false ?? 'banana';

console.log(title1); // banana
console.log(title2); // false

const width1 = 0 || 150;
const width2 = 0 ?? 150;

console.log(width1); // 150
console.log(width2); // 0
