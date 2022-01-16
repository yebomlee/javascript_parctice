// Spread 구문
// 배열을 다룰 때 유용하게 활용. 묶여있는 배열의 값들을 각각의 개별 값으로 펼침.
const numbers = [1, 2, 3, 4, 5];

console.log(...numbers); // 1 2 3 4 5

// Rest parameter: 여러개의 argument를 하나의 parameter로 묶는 방식.
// Spread syntax: 하나로 묶여 있는 값을 각각의 개별 값으로 펼치는 방식.

// 배열 복사
// 객체 타입의 값들은 변수에 직접 할당되지 않고 주소 값이 참조됨.
const language = ['Python', 'Java'];
const programmingLanguage = language;

programmingLanguage.push('JavaScript');

console.log(language); // ['Python', 'Java', 'JavaScript']
console.log(programmingLanguage); // ['Python', 'Java', 'JavaScript']

// 이를 방지하기 위해 slice method 활용.
const language = ['Python', 'Java'];
const programmingLanguage = language.slice();

programmingLanguage.push('JavaScript');

console.log(language); // ['Python', 'Java']
console.log(programmingLanguage); // ['Python', 'Java', 'JavaScript']

// Spread 구문 활용 시, 배열 복사 가능. 
const language = ['Python', 'Java'];
const programmingLanguage = [...language, 'JavaScript'] // 바로 요소 추가 가능.

console.log(language); // ['Python', 'Java']
console.log(programmingLanguage); // ['Python', 'Java', 'JavaScript']

// 배열 합칠 때 활용 가능.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// 함수 호출 시, argument로도 활용 가능.
const introduce = (name, nickname, like) => {
    console.log(`나는 ${name}!`);
    console.log(`모두들 나를 ${nickname}이라고 부르지.`);
    console.log(`요즘 ${like}가 제일 좋더라.`);
};

const infoArr = ['찌나', '샤이관종', '츄르'];
introduce(...infoArr);

// Spread 구문 하나의 값으로 평가 X, 여러 값의 목록으로 평가.
const numbers = [1];
const number = ...numbers; // SyntaxError


// Spread 구문 객체 활용.(객체 복사, 기존의 객체를 가지고 새로운 객체 생성)
// 새로운 배열을 생성 X, 함수의 argument로 사용 할 수 없음.
// 객체 spread시, 반드시 객체를 표현하는 중괄호 안에서 활용.(주의!)
const members = ['칠', '팔', '구'];
const obj = {...members};

console.log(obj); // {'0': '칠', '1': '팔', '2': '구'}