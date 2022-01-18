// 객체 지향 프로그래밍 4가지 기둥(추상화, 캡슐화, 상속, 다형성)
// 추상화(Abstraction): 어떤 구체적인 존재를 원하는 방향으로 간략화해서 나타내는 것(e.g. class를 설계)
// property와 method naming이 중요(주석이나 별도의 설명 문서 남기는 이유.)

// 캡슐화: 객체의 특정 property에 직접 접근하지 못하도록 막는 것.
// 특정 property에 대한 접근을 미리 작성한 method를 통해서만 가능하게 하는 것.
// 프로그램의 안정성을 높일 수 있음.
class User {
  constructor(email, birthdate) {
    this._email = email;
    this.birthdate = birthdate;
  }
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }

  // getter method
  // property의 값을 구하는 함수. property값 읽는 용도이므로 parameter 지정 X.
  get email() {
    return `Email Address is ${this._email}`; // email property값을 읽는 code가 실행될 시, email이라는 getter method 실행.
  }

  // setter method
  // 전달된 값을 검증하고 property에 대입하는 code 작성.
  // 외부에서 property값을 직접 설정하려고 할 때마다 설정된 함수가 실행. 지정해준 parameter로 값이 전달됨.
  set email(address) {
    if (address.includes('@')) {
      this._email = address; // address 안에 @이 포함된다면 _email에 address를 할당.
      // 언더바(_)가 붙은 property: 새롭게 설정한 property, 숨기고자 하는 property 이름에 _붙임.
    } else {
      throw new Error('invalid email address'); // 에러를 발생.
    }
  }
}

const item = {
  name: '양말',
  price: 3000,
};

const user1 = new User('apple@apple.com', '2022-01-17');
user1.email = 'banana@banana.com'; // email 이름의 setter method 실행
console.log(user1.email); // Email Address is banana@banana.com

console.log(user1._email); // banana@banana.com // 보호받는 변수에 직접 접근 가능(완벽한 캡슐화X)
// 클로저(Closure) 사용, 우회적으로 완벽한 캡슐화 구현 가능.