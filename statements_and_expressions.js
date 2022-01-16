// 문장과 표현식
// 문장(statements): 어떤 동작이 일어나도록 작성된 최소한의 코드 덩어리.(선언문, 할당문, 조건문, 반복문..)
let x;
x = 3;

if (x < 10) {
    console.log('x는 10보다 작다');
} else {
    console.log('x는 10과 같거나 크다');
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// 표현식(expressions): 결과적으로 하나의 값이 되는 모든 코드.

// 어떤 하나의 값을 그대로 작성 // 5, 'Hello'
// 연산자를 이용한 연산식 // 5 + 5, 'I' + "Love" + 'You', true && null
// 선언된 변수를 호출
const title = 'bear'
title // bear
//객체의 property에 접근
const bear = {
    name: 'brown'
};
bear.name // brown


// 표현식이면서 문장, 문장이면서 표현식(할당식, 함수 호출)
// 할당 연산자는 값을 할당하는 동작도 하지만, 할당한 값을 그대로 가지는 표현식임.
title = 'JavaScript'; // JavaScript
// 함수 호출은 함수를 실행하는 동작도 하지만, 실행한 함수의 리턴 값을 가지는 표현식임.
sayHi(); // sayHi 함수의 리턴 값
// console.log method는 콘솔에 argument를 출력하는 동작도 하지만, undefined 값을 가지는 표현식임.
console.log('hi'); // undefined


// 표현식인 문장
let x; 
x = 3;

// 표현식이 아닌 문장
// 조건문이나 반복문은 값으로 평가되지 않고 문장으로만 평가.
console.log(if (x < 10) {
    console.log('x는 10보다 작다');
} else {
    console.log('x는 10과 같거나 크다');
}); // SyntaxError

const loop = for (let i = 0; i < 5; i++) {
    console.log(i);
}; // SyntaxError

// 일반적으로 표현식인 문장은 세미콜론(;), 표현식이 아닌 문장은 문장 자체의 코드블록({})로 문장의 범위 구분.
