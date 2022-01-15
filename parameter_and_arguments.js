// Parameter
// parameter가 있는 함수 호출 시, argument값이 없으면 undefined값을 가짐.
// then. parameter에 할당 연산자 활용하여 기본값 작성 가능.(ES2015)
// then. parameter가 기본값을 가지고 함수 동작

// 하나 이상의 parameter가 존재하고 argument를 부분적으로 생략 할 시
function greeting(name = '찌나', interest) {
  console.log(`Hi! My name is ${name}!`);
  console.log(`I like ${interest}!`);
};

// argument가 parameter로 전달 될때에는 parameter의 기본값과는 전혀 상관없이 작성 순서대로 전달.
// 기본값이 필요한 parameter는 가급적 오른편 작성 권장.
greeting('츄르'); // Hi! My name is 츄르! // I like undefined!

// 함수 호출 시, undefined값으로도 parameter의 기본값 호출 가능.
greeting(undefined, '츄르');

// parameter의 기본값은 앞쪽에 정의된 parameter 활용 가능.
function defaultTest(x, y = x + 2) {
  console.log(`x: ${x}`);
  console.log(`y: ${y}`);
};

defaultTest(1); // 1, 3
defaultTest(1, 5); // 1, 5


// arguments
function printArguments(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
};

// arguments 개수 < parameter 개수: undefined 값으로 출력.
// arguments 개수 > parameter 개수: 그 이후 전달 된 argument 값 무시.
printArguments('빨강', '주황', '노랑');
printArguments('빨강');
printArguments('빨강', '주황');
printArguments('빨강', '주황', '노랑', '초록');

// arguments 개수에 따라 유연하게 동작하는 함수 생성 가능.
// JavaScript에서 함수를 선언할 때, 함수 내부에서는 arguments 객체 사용 가능.
// 함수 내에서 arguments라는 naming X(주의!)
function printArguments(a, b, c) {
  // arguments 객체는 유사배열임.
  // console.log(arguments);

  // for of 반목문 활용 가능.
  for (const arg of arguments) {
    console.log(arg);
  };

  // indexing
  console.log(arguments[0]);
  console.log(arguments[1]);

  // argument 개수 확인 가능.
  console.log(arguments.length);
};

printArguments('빨강', '주황', '노랑');
printArguments('빨강');
printArguments('빨강', '주황');
printArguments('빨강', '주황', '노랑', '초록');


// 첫번째 글자만 얻기 Quiz
function getFirstWords() {
  let word = '';

  for (const arg of arguments) {
    word = word + arg[0];
  };

  console.log(word);
};

getFirstWords(
  '빨간색',
  '주황색',
  '노란색',
  '초록색',
  '파란색',
  '남색',
  '보라색'
);


// Rest Parameter(우선 활용 권장)
// 배열이므로 배열의 method 사용 가능.
// arguments 객체의 단점 해결.(배열 method 사용불가. 필요한 arguments만 다루려면 indexing 필요.)
function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
  console.log('');
};

function printArguments(...args) {
  console.log(args.splice(0, 2)); // 배열 method 사용 가능
  console.log(arguments.splice(0, 2)); // TypeError
  console.log('');
};

printArguments('빨강', '주황', '노랑'); // ['빨강', '주황']
printArguments('빨강');
printArguments('빨강', '주황');
printArguments('빨강', '주황', '노랑', '초록');

// 일반 parameter와 함께 사용 가능(반드시 가장 마지막 parameter에 작성)
function printResult(first, second, ...others) {
  console.log('경품 추천 결과');
  console.log(`1등: ${first}`);
  console.log(`2등: ${second}`);
  for (const arg of others) {
    console.log(`꽝!: ${arg}`);
  };
};

printResult('빨강이', '주황이', '노랑이', '초록이', '파랑이');
