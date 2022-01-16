// 모던한 프로퍼티 표기법
// property name과 value로 사용할 변수나 함수의 이름이 같다면 하나로 생략 가능.(축약형)
const name = 'strawberry';
const color = 'red';
const taste = 'perfect';

const fruit = {
  name: name,
  color,
  taste,
};

console.log(fruit);

// 외부의 함수를 method로 생성 시
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}

const actress = {
  firstName: 'Natalie',
  lastName: 'Portman',
  getFullName,
};

const actor = {
  firstName: 'Matt',
  lastName: 'Damon',
  getFullName,
};

console.log(actress.getFullName());
console.log(actor.getFullName());

// 객체 내부에서 method 선언 시(콜론(:)기호와 function 생략 가능)
const actor = {
  firstName: 'Matt',
  lastName: 'Damon',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(actor.getFullName());


// 계산된 속성명(computed property name)
// property name을 표현식으로 나타내는 방법
const 변수명 = {
  [표현식]: 값,
};

const obj = {
  ['this' + 'Is' + 'A' + 'Key']: 'value',
};

console.log(obj);

// 변수에 담긴 값, 함수의 return값 사용 가능.
const name = 'strawberry';
const propertyName = 'color';
const color = 'red';
const explainTaste = () => 'taste';

const fruit = {
  ['fruit' + 'Name']: name,
  [propertyName]: color,
  [explainTaste()]: 'perfect',
};

console.log(fruit);


// 옵셔널 체이닝(Optional Chaining)
// 중첩 객체를 다룰 시 예상한 property를 가지고 있지 않을 때, 접근하는 순간 에러 발생
function printCatName(user) {
  console.log(user.cat.name);
}

const user1 = {
  name: 'egg',
  cat: {
    name: 'jjina',
    breed: 'unknown',
  },
};

printCatName(user1); // jjina

const user2 = {
  name: 'gold',
};

console.log(user2.cat); // undefined
printCatName(user2); // TypeError: Cannot read properties of undefined

// 중첩 객체의 property값이 null 혹은 undefined가 아니라는 것을 확인 후 접근.(에러 방지)
// 일반적으로 AND 연산자 활용
function printCatName(user) {
  console.log(user.cat && user.cat.name);
}

// 옵셔널 체이닝 연산자(?.) 활용
// 연산자 왼편의 property값이 undefined 또는 null이 아닐 시, 다음 property 값을 return. 그렇지 않을 경우, undefined 반환.
function printCatName(user) {
  console.log(user.cat?.name);
}

// 동작 원리(삼항 연산자로 표현)
function printCatName(user) {
  console.log(
    user.cat === null || user.cat === undefined ? undefined : user.cat.name
  );
}

// null 병합 연산자와 함께 활용
function printCatName(user) {
  console.log(user.cat?.name ?? '고양이를 키우지 않습니다.');
}