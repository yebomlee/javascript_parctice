// Arrow Function
// 익명함수로 변수에 할당(함수 정의)하거나, 다른 함수의 argument로 함수를 선언(콜백함수로 전달)할 때 활용.
// arguments 객체가 없음.(주의!)
const getDouble = (number) => {
  return number * 2;
};

console.log(getDouble(5));

setTimeout(() => console.log('안녕하세요.'), 1000);


// this
// 객체의 method를 만들 때 중요한 역할.
// 함수를 호출한 객체를 가르키는 키워드.
function getFullName() {
  console.log(this);
  return `${this.firstName} ${this.lastName}`;
}

const actress = {
  firstName: 'Natalie',
  lastName: 'Portman',
  getFullName: getFullName,
};

const actor = {
  firstName: 'Matt',
  lastName: 'Damon',
  getFullName: getFullName,
};

console.log(actress.getFullName());
console.log(actor.getFullName());

// 객체의 method로 호출되는 경우에는 함수를 호출한 객체가 this에 담기므로 같은 함수를 호출했지만 각각의 객체를 출력.
actress.getFullName();
actor.getFullName();

// Arrow Function에서 this값은 일반 함수에서처럼 호출한 대상에 따라 상대적으로 변하지 않음.
// Arrow Function이 선언되기 직전에 유효한 this값과 같은 값을 가짐.
// 객체 method 생성 시, 일반 함수 권장됨.
const getFullName = () => {
  console.log(this);
};

const actress = {
  firstName: 'Natalie',
  lastName: 'Portman',
  getFullName: getFullName,
};

const actor = {
  firstName: 'Matt',
  lastName: 'Damon',
  getFullName: getFullName,
};

actress.getFullName(); // 웹 브라우저에서 window 객체(전역 객체)로 출력
actor.getFullName(); // 웹 브라우저에서 window 객체로 출력
