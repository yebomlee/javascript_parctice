// 다형성(많은 형태를 가지고 있는 성질)
// 하나의 변수가 다양한 종류의 class로 만든 여러 객체를 가르킬 수 있는 것.
// 다른 종류의 객체에 있는 동일한 method를 간결하게 호출 가능.
// 상속 관계의 있는 여러 객체의 동일한 이름의 method를 간결한 코드로 호출 가능.
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

class PremiumUser extends User {
  constructor(email, birthdate, level) {
    super(email, birthdate);
    this.level = level;
  }

  // 내용이 조금 다른 buy method 추가.
  // 오버라이딩(overriding): 자식 class에서 부모 class와 동일한 이름의 method를 정의하고 그 내용을 다르게 채우는 것.
  // 같은 이름의 method를 호출하더라도 자식 class로 만든 객체는 부모 class로 만든 객체와 다르게 동작 가능.
  buy(item) {
    console.log(`${this.email} buys ${item.name} with a 5% discount`);
  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}

const item = {
  name: '양말',
  price: 3000,
};

const user1 = new User('apple@apple.com', '2022-01-18');
const user2 = new User('apple2@apple.com', '2022-01-18');
const user3 = new User('apple3@apple.com', '2022-01-18');

const premiumUser1 = new PremiumUser('banana@banana.com', '2022-01-18', 1);
const premiumUser2 = new PremiumUser('banana2@banana.com', '2022-01-18', 5);
const premiumUser3 = new PremiumUser('banana3@banana.com', '2022-01-18', 3);

// 같은 method를 호출했지만 내용은 다름.
user1.buy(item);
premiumUser1.buy(item);

const users = [user1, premiumUser1, user2, premiumUser2, user3, premiumUser3];

// user변수는 User class로 생성한 객체를 가리킬 수도 있고, premiumUser class로 생성한 객체를 가리킬 수도 있다.
users.forEach((user) => {
  user.buy(item);
});
// apple@apple.com buys 양말
// banana@banana.com buys 양말 with a 5% discount
// apple2@apple.com buys 양말
// banana2@banana.com buys 양말 with a 5% discount
// apple3@apple.com buys 양말
// banana3@banana.com buys 양말 with a 5% discount

//------------------------------------------------------------------------------------------------------

class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

class PremiumUser extends User {
  constructor(email, birthdate, level, point) {
    super(email, birthdate);
    this.level = level;
    this.point = point;
  }

  buy(item) {
    // console.log(`${this.email} buys ${item.name}`);
    // 오버라이딩 한 method 안에서 부모 class method와 동일한 내용이 있다면 부모 클래스의 method를 그대로 호출 가능.
    // 부모 class의 일반 method를 호출하고 싶을 때에도 super 키워드 활용.
    super.buy(item);
    this.point += item.price * 0.05;
  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}

const item = {
  name: '양말',
  price: 3000,
};

const user1 = new User('apple@apple.com', '2022-01-18');
const user2 = new User('apple2@apple.com', '2022-01-18');
const user3 = new User('apple3@apple.com', '2022-01-18');

const premiumUser1 = new PremiumUser('banana@banana.com', '2022-01-18', 1);
const premiumUser2 = new PremiumUser('banana2@banana.com', '2022-01-18', 5);
const premiumUser3 = new PremiumUser('banana3@banana.com', '2022-01-18', 3);

const users = [user1, premiumUser1, user2, premiumUser2, user3, premiumUser3];

users.forEach((user) => {
  user.buy(item);
});
// apple@apple.com buys 양말
// banana@banana.com buys 양말
// apple2@apple.com buys 양말
// banana2@banana.com buys 양말
// apple3@apple.com buys 양말
// banana3@banana.com buys 양말


// instanceof 연산자
// 현재 변수가 가리키는 객체가 정확히 어느 class로 만들어진 객체인지 확인하고 싶을 때 활용.
const users = [user1, premiumUser1, user2, premiumUser2, user3, premiumUser3];

// 반복되는 user 객체가 PremiumUser class로 만든 객체인지 확인.
users.forEach((user) => {
  console.log(user instanceof PremiumUser); // PremiumUser class로 만든 객체들만 true로 출력.
})

// 자식 class로 만든 객체는 부모 class로 만든 객체로 인정.
users.forEach((user) => {
  console.log(user instanceof User); // 모두 true로 출력.
})

// (주의!) instanceof 연산자를 활용해서 로직을 분기하는 것 보다,
// 두 class 사이에 상속 관계를 적용한 뒤 method 이름을 동일하게 만들어서 
// 다형성을 활용한 코드, 로직 분기가 없는 코드를 작성하는 것이 더 바람직.
if (obj instanceof A) {
  obj.method_a(); // obj.common_method_name();
} else if ( obj instanceof B) {
  obj.method_b(); // obj.common_method_name();
} else {
  ...
}