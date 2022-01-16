// 조건 연산자(conditional operator), 삼항 연산자(Ternary operator)
// ES2015 이전 조건을 다루는 방법.(if문, switch문)
if (조건) {
    조건이 true일 때 동작
} else {
    조건이 false일 때 동작
}

switch (값) {
    case A:
        값이 A와 일치할 때 동작
        break;
    default:
        값과 일치하는 case가 없을 때 동작
}


// 조건 ? truthy 할 때 표현식 : falsy 할 때 표현식
const passingScore = 80;

function passChecker(score) {
    return score > passingScore ? '합격' : '불합격';
}

console.log(passChecker(90)); // 합격


// 조건 연산자는 표현식이므로 조건에 따라 변수 선언이나, 반복문을 실행 할 수 없음.(모든 if문 대체 불가능)
const passingScore = 80;

function passChecker(score) {
    if (score > passingScore) {
        const message = '합격';
        return message;
    } else {
        for (let i = 0 ; i < 3; i++) {
            console.log('고생하셨습니다.');
        }
        return '불합격';
    }
}

console.log(passChecker(90)); // 합격