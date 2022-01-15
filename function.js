// 함수 선언(Function Declaration)
function 함수이름{파라미터} {
    동작
    return 리턴값
};

// 함수 표현식(Function Expression): 함수 선언을 변수에 할당(하나의 예시). 변수에 할당하는 것이 포인트가 아니라 함수 선언을 값처럼 사용하는 방식. 
const 변수명 = function () {
    동작
    return 리턴값
};

변수명(); // 리턴값

// 차이점
// 함수 선언: 선언하기 전에 호출 가능(호이스팅), 함수 스코프를 가진다.(함수 안에 선언될시 함수 밖에서 호출 불가능, 함수가 아닌 다른 코드블록에서 함수가 호출되면 모두 전역적으로 호출 가능)
printWord();

function printWord() {
    console.log('Hello World');
}
// 함수 안에 함수 선언
function sayHello() {
    function printLanguage() {
        console.log('JavaScript');
    }

    console.log('Hello');
    printLanguage();
}

sayHello(); // Hello // JavaScript
printLanguage(); // ReferenceError(함수 밖에서 호출 불가능)

// 다른 코드블록에 함수를 선언 할 시
const age = 10;

if (age < 20) {
    function printChild() {
        console.log('Child');
    } 
}
{
    function sayHi() {
        console.log('Hi');
    }
}

// 전역적 호출 가능
printChild(); // Child
sayHi(); // Hi


// 함수 표현식: 변수 특성상 선언 이전에 접근 불가. 할당된 변수에 따라 스코프 결정.
sayHello(); // TypeError

var sayHello = function () {
    console.log('Hello');
};

let sayWorld = function () {
    console.log('World');
};

const printBye = function () {
    console.log('Bye');
};

sayHello(); // Hello
sayWorld(); // World
printBye(); // Bye


// Named Function Expression(기명 함수 표현식: 이름이 있는 함수 표현식)
// 함수 표현식으로 함수가 할당된 변수는 자동으로 name이라는 property 가짐.
const sayHello = function () {
    console.log('Hello');
};

// 이름 없는 함수: name 속성은 변수 이름 그 자체를 문자열로 가짐.
console.log(sayHello.name); // sayHello


const sayHello = function printInConsole() {
    console.log('Hello');
};

// 이름 있는 함수: name 속성은 함수 이름을 문자열로 가짐.
console.log(sayHello.name); // printInConsole
printInConsole(); // ReferenceError(외부 호출 불가)

// 함수 내부에서 함수 자체를 가리킬 때 사용.(e.g. 재귀함수)
// 함수를 복사하기 위해 새로운 변수에 지정 한 후, 원래 함수의 변수명에 새로운 값 지정 시 문제 발생.
let countdown = function(n) {
    console.log(n);

    if (n === 0) {
        console.log('종료');
    } else {
        countdown(n-1);
    }
};

let countdownFunction = countdown;

countdown = null; 

countdownFunction(5); // TypeError

// 이를 방지하기 위해 함수표현식에서는 반드시 기명 함수 표현식 사용 권장.
let countdown = function runCountdown(n) {
    console.log(n);

    if (n === 0) {
        console.log('종료');
    } else {
        runCountdown(n-1);
    }
};

let countdownFunction = countdown;

countdown = null; 

countdownFunction(5); // 5, 4, 3, 2, 1, 0, 종료


// 즉시 실행 함수(IIFE: Immediately Invoked Function Expression)
// 함수 선언 부분을 소괄호로 감싼 후, 바로 뒤에 함수를 실행하는 소괄호 표기(함수 선언 시, 바로 실행). argument 전달 가능.
(function (name) {
    console.log(`Hello ${name}!`);
})('Angie');

// 일반적으로 익명함수를 사용. 재귀적인 구조 만들 시, 이름 필요할 수 있음.
// 함수에 이름을 지어주더라도 외부에서 재사용 불가능.

(function sayHello() {
    console.log('Hello');
})();

sayHello(); // ReferenceError

// 활용
// 프로그램 초기화 기능
(function init() {
    프로그램이 실행 될 때 기본적으로 동작 할 코드들
})();

// 함수의 리턴값을 바로 변수에 할당하고 싶을 때, 재사용이 필요 없는, 일회성 동작을 구성할 때 활용.
// 즉시 실행 함수에서 사용하는 변수들은 함수 내에서만 유효
const firstName = 'Lily';
const lastName = 'James';

const greetingMessage = (function () {
    const fullName = `${firstName} ${lastName}`;

    return `Welcome, ${fullName}`;
})();

console.log(greetingMessage);