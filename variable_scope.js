// 변수와 스코프
// 변수(프로그래밍에서 추상화의 가장 기본적인 수단)
// var title = 'apple'

// let age = 30;
// const PI = 3.14;

// var: 변수를 만들기도 전에 실행가능, 중복 선언 가능.
// 선언이 나중에 되었지만 마치 이 선언이 올라간듯한 현상(호이스팅: 변수 선언 이전에 변수를 참조 할 수 있는 것.)
console.log(title);
var title; // undefined

// 호이스팅은 선언부분만 끌어올려짐. 변수 선언과 동시에 값이 할당 되어도 할당된 값 자체는 그 이후에 접근 가능.
console.log(title); // undefined
var title = 'apple';
console.log(title); // apple

// let, const: 선언 이전에 접근 불가능. 중복 선언 뷜가능.


// scope
// var 키워드는 함수 단위로만 구분. 
var x = 3; //Global Variable.

function printNumber() {
    var y = 4; // Local Variable
    console.log(`print printNumber x: ${x}`);
    console.log(`print printNumber y: ${y}`);
}

printNumber();
console.log(x); // 3
console.log(y); // ReferenceError(함수 밖에서 사용 불가능)

// 조건문,반복문에서 선언한 변수가 전역 변수로 평가됨.
var x = 3;

if (x < 4) {
    var y = 3;
}

for (var i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

console.log('x:', x); // x: 3
console.log('y:', y); // y: 3
console.log('i:', i); // i: 5


// let, const 키워드는 코드 블록({})을 기준으로 변수의 유효 범위를 구분함.
let x = 3;

if (x < 4) {
    let y = 3;
}

for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

console.log('x:', x); // x: 3
console.log('y:', y); // ReferenceError(지역 변수로 평가 되었기 때문에 if문 밖에서는 사용 불가.)
console.log('i:', i);

// 단순한 코드 블록으로만 구분되어 있어도 스코프를 구분함.
{
    let title = 'apple';
    console.log(title); // apple
}

console.log(title); // ReferenceError

// 정리
var x; // 함수 스코프
let y; // 블록 스코프
const z; // 블록 스코프