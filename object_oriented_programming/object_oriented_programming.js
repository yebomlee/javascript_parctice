// 객체 지향 프로그래밍
// '객체'간의 상호작용을 중심으로 하는 프로그래밍
// 객체: property + method
// 객체의 상태를 나타내는 '변수'(유저 아이디, 유저 생일) + 객체의 행동을 나타내는 '함수'(좋아요, 상품구매)

// 객체 지향 프로그래밍: property와 method로 이루어진 각 객체들의 상호작용을 중심으로 코드를 작성하는 것.
// 절차 지향 프로그래밍: 변수와 함수를 가지고 작업의 순서에 맞게 코드를 작성하는 것.(예전)


// 객체 만들기 1-1: Object-Literal
const user = {
  email: 'apple@apple.com',
  birthdate: '2022-01-17',
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  },
};

const item = {
  name: '양말',
  price: 3000,
};

console.log(user.email);
console.log(user.birthdate);
user.buy(item);

// 객체 만들기 1-2: Factory function
function createUser(email, birthdate) {
  const user = {
    email,
    birthdate: birthdate,
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    },
  };
  return user;
}

const item = {
  name: '양말',
  price: 3000,
};

const user1 = createUser('banana@banana.com', '2022-01-17');
const user2 = createUser('strawberry@strawberry.com', '2022-01-17');
const user3 = createUser('grape@grape.com', '2022-01-17');

console.log(user1.email);
console.log(user2.email);
console.log(user3.email);

user1.buy(item);
user2.buy(item);
user3.buy(item);

// 객체 만들기 2: Constructor function(생성자 함수)
// this 키워드 사용하여 생성될 객체의 property와 method를 설정.
// 객체 생성 위해 new를 붙여서 함수 호출
// 함수 이름 중 첫번째 알파벳을 대문자로 작성(컨벤션)
// this는 constructor function으로 생성할 수 있는 해당 객체 의미.
function User(email, birthdate) {
  this.email = email;
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name}`);
  };
}

const item = {
  name: '양말',
  price: 3000,
};

const user1 = new User('apple@apple.com', '2022-01-17');

console.log(user1.email);
console.log(user1.birthdate);
user1.buy(item);

// 객체 만들기 3: Class(ES6)
// 객체 생성 위해 new를 붙여서 함수 호출
class User {
  // constructor method: 객체가 실행될 때 실행됨.
  // this: 생성되는 객체
  // 일반적으로 Class에서는 property를 constructor 안에. method는 그 밖에 정의해서 사용.
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const item = {
  name: '양말',
  price: 3000,
};

const user1 = new User('apple@apple.com', '2022-01-17');

console.log(user1.email);
console.log(user1.birthdate);
user1.buy(item);
