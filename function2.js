// 값으로서 함수
// JavaScript는 일급함수(First Class Function)를 가진 프로그래밍 언어.
// 변수나 다른 데이터 구조 안에 할당 가능. 다른 함수의 parameter로 전달 가능. 다른 함수의 return값 가능.


// 어디에서나 할당될 수 있고 다양한 형태로 호출 가능.
const sayHello = function () {
  console.log('Hello');
};

console.dir(sayHello); // 객체 타입의 값으로 평가
sayHello();

// 객체 안의 method로 사용 가능. 배열도 가능.
const obj = {
  brand: 'banana',
  name: 'banana pods',
  color: 'yellow',
  setCustomer: function (name) {
    console.log(`customer: ${name}`);
  },
};

obj.setCustomer('사과');


// 다른 함수의 parameter로 전달 가능(콜백 함수)
function makeQuiz(quiz, answer, success, fail) {
  if (prompt(quiz) === answer) {
    console.log(success());
  } else {
    console.log(fail());
  }
};

function getSuccess() {
  return '정답입니다.';
};

function getFail() {
  return '오답입니다.';
};

const question = '1 + 1 = ?';

makeQuiz(question, '2', getSuccess, getFail);


// 고차 함수(Higher Order Function): 함수를 return하는 함수.
// 어떤 함수의 return값이 함수가 될 수 있다.
function getPrintHello() {
  return function () {
    console.log('Hello!');
  };
};

// getPrintHello 호출 시, return값이 되는 함수가 변수에 할당.
const sayHello = getPrintHello();

sayHello();

// 이중괄호로 활용하여 고차함수로 return되는 함수를 바로 호출 가능.
getPrintHello()();