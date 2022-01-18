// 다형성(많은 형태를 가지고 있는 성질)
// 하나의 변수가 다양한 종류의 객체를 가르킬 수 있는 것.
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
