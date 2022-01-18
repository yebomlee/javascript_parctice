// 상속(Inheritance)
// 코드의 재사용성 좋아짐.
// 부모 class
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

// 자식 class
// User class를 상속받음(User class에 있는 property와 method를 가져옴)
// super 생성자를 호출해야함.
class PremiumUser extends User {
  constructor(email, birthdate, level) {
    // 자식 class의 객체 생성 시, 그 생성자 함수 안에서 부모 class의 생성자 함수를 super 키워드로 반드시 먼저 호출.
    super(email, birthdate); // super: 부모 class의 생성자 함수를 의미(여기서는 User class의 constructor를 의미)
    this.level = level;
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
console.log(user1.email);
console.log(user1.birthdate);
user1.buy(item);

const premiumUser1 = new PremiumUser('banana@banana.com', '2022-01-18', 1);
console.log(premiumUser1.email);
console.log(premiumUser1.birthdate);
console.log(premiumUser1.level);
premiumUser1.buy(item);
premiumUser1.streamMusicForFree();
