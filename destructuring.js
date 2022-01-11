// 구조 분해 (Destructuring)

// 배열 활용.
const rank = ['빨강', '주황', '노랑', '초록', '파랑'];

const macbook = rank[0]; // 빨강
const ipad = rank[1]; // 주황
const airpods = rank[2]; // 노랑
const points = rank[3]; //초록

// 배열을 붆해해서 하나씩 할당하는 원리.
// 할당되는 값이 배열의 형식이 아니거나(123), 아무것도 할당하지 않을시, 오류 발생
// 선언 된 변수의 갯수와 배열의 길이가 같을 필요 X.(순서대로 할당 됨.)
const [macbook, ipad, airpods, points] = rank;

// Rest parameter처럼 마지막 변수를 배열로 할당하는 것이 가능.(나머지 요소만 가져오므로 항상 마지막 변수에만 활용 가능!)
const [macbook, ipad, airpods, ...points] = rank;

// 할당하는 배열의 길이가 선언된 변수의 길이보다 적을시, undefined값이 할당 됨.
// parameter와 비슷하게 기본값 작성 가능.
const rank = ['빨강', '주황', '노랑'];
const [macbook, ipad, airpods, points = '없음'] = rank;

console.log(macbook);
console.log(ipad);
console.log(airpods);
console.log(points);

// 기본값은 할당될 값이 없거나 undefined 값이 할당될 때 사용된다. null값은 기본값 할당 X. 그대로 null 가짐.
// undefined와 null 혼동 주의!
const numbers = [5, undefined, null, 3, 1, 7, 0];
const [a, b = 4, c = 2, ...d] = numbers;

console.log(a); // 5
console.log(b); // 4
console.log(c); // null
console.log(d[2]); // 7
console.log(d[4]); // undefined


// 변수에 할당 된 값을 서로 교환할 때도 활용 가능.
let today = 'studying';
let tomorrow = 'fire_studying';

// let temp = today;
// today = tomorrow;
// tomorrow = temp;

// 오른쪽 값을 왼쪽 피연산자에 할당.
[today, tomorrow] = [tomorrow, today];

console.log('오늘 할 일:', today);
console.log('내일 할 일:', tomorrow);

// ------------------------------------------------------------------

// 객체 활용.
const cat = {
    name: 'jjina',
    age: 2,
    sex: 'male',
    description: '간식러버, 맹수인척 하는 쫄보',
};

// const name = cat.name;
// const description = cat.description;
const { name, description } = cat;

// property name: 새 변수 이름 으로 재 할당 가능.(property name이 일치하는 값을 찾아서 새로운 이름의 변수에 해당하는 값을 할당한다.)
// 필수 상황 - 객체 내 property name이 변수이름으로 사용할 수 없는 경우.('do-well: '웨용')
const { name: nickname, ...rest } = cat;

// 객체에 존재하지 않는 property name으로 변수가 선언 되어있을 시, undefined 값 출력
// 할당 연산자 통해서 기본값 지정 가능.
const { color = 'brown?'} = cat;

console.log(name);
console.log(description);
console.log(color);

// ------------------------------------------------------------------

// 함수와 활용(배열)
function getArray() {
    return ['컴퓨터', '냉장고', '세탁기'];
}

const [el1, el2, el3] = getArray();

console.log(el1);
console.log(el2);
console.log(el3);


function printWinners(...arg) {
    const [macbook, ipad, airpods, ...point] = arg;

    console.log(`1등 상품 주인공은 '${macbook}'님 입니다.`);
    console.log(`2등 상품 주인공은 '${ipad}'님 입니다.`);
    console.log(`3등 상품 주인공은 '${airpods}'님 입니다.`);
    for (let user of point) {
        console.log(`4등 상품 주인공은 '${user}'님 입니다.`);
    }
}
printWinners('빨강','주황','노랑','초록','파랑','보라')

// parameter 부분에서 destructuring문법을 바로 활용 가능
function printWinners([macbook, ipad, airpods, ...point]) {
    console.log(`1등 상품 주인공은 '${macbook}'님 입니다.`);
    console.log(`2등 상품 주인공은 '${ipad}'님 입니다.`);
    console.log(`3등 상품 주인공은 '${airpods}'님 입니다.`);
    for (let user of point) {
        console.log(`4등 상품 주인공은 '${user}'님 입니다.`);
    }
}
const ranks = ['빨강','주황','노랑','초록','파랑','보라'];
printWinners(ranks)

// 함수와 활용(객체)
function getObject() {
    return {
        name: '뽀로로',
        birth: 2003,
        job: 'penguin',
    }
};

const { name : brand, birth, job } = getObject();

console.log(brand);
console.log(birth);
console.log(job);

// parameter를 객체의 형태로 작성한 함수에서 유용하게 활용.
const cat = {
    name: 'jjina',
    age: 2,
    sex: 'male',
    staff: '계란',
    color: 'mix',
    description: '간식러버, 맹수인척 하는 쫄보',
};

function printSummary(object) {
    const { name, color, description } = object;

    console.log(`고양이 이름은 '${name}'입니다.`);
    console.log(`색상은 '${color}'이며,`);
    console.log(`특징은 '${description}'입니다.`);
};

printSummary(cat);

// 중첩 객체 구조 분해 (Nested Object Destructuring) (심화학습)