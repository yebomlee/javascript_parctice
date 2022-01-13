// forEach와 map

// forEach
// return값을 가지지 않으므로 변수에 담을시 undefined 값 가짐.
// 단순 배열 반복 작업이 필요할 경우 활용.
const fruits = ["딸기", "바나나", "귤", "망고"];

for (let fruit of fruits) {
  console.log(`우리집에 ${fruit} 귀신이 있다.`);
}

// callback 함수에 arrow function 적용
// callback 함수에서 다룰 수 있는 세가지 parameter(배열의 요소 전달(필수), index관리(i), 반복중인 배열 자체(arr))
// index는 다른 배열과 함께 활용시, 같은 index의 요소 매치 응용 가능.
const descriptions = ["귀여운", "깜찍한", "상큼한", "예쁜"];

fruits.forEach((fruit, i, arr) => {
  console.log(`우리집에 ${descriptions[i]} ${fruit} 귀신이 있다.`);
});

// map
// 반복 작업을 통해서 새로운 배열이 필요한 경우 활용.
const firstNames = ["빨강", "주황", "노랑", "초록"];
const lastNames = ["김", "이", "박", "최"];

const fullNames = firstNames.map((firstNames, i) => {
  return lastNames[i] + firstNames;
});

console.log(fullNames);

// 처음 호출 시, 최대 반복 횟수는 그 당시 요소의 갯수.
// 반복 중 배열의 길이가 줄어들 시, 반복 횟수도 함께 줄어들므로 주의
const members = ["빨강", "주황", "노랑", "초록"];

members.forEach((member) => {
  console.log(`${member}, 어디갔니?`);
  // members.push('파랑')
  members.pop();
});

console.log(members);

const quiz = ["YUMMY", "COUNT", "ABUSE", "SOUND", "SWING"];
const answer = quiz.map((result, i) => {
  return result[i];
});

console.log(answer); // [ 'Y', 'O', 'U', 'N', 'G' ]


// filter와 find
// 프로그래밍 효율측면에서 생각.
// 특별한 조건에 따라 배열의 요소를 추려냄.
const devices = [
  { name: "사과프로", brand: "apple" },
  { name: "바나나노트", brand: "banana" },
  { name: "사과패드", brand: "apple" },
  { name: "바나나시계", brand: "banana" },
  { name: "망고북", brand: "mango" },
  { name: "바나나팟", brand: "banana" },
  { name: "포도링", brand: "grapes" },
  { name: "사과에어", brand: "apple" },
  { name: "오렌지시계", brand: "orange" },
  { name: "사과모니터", brand: "apple" },
  { name: "사과마우스", brand: "apple" },
];

// return 값이 배열.
// 조건에 만족하는 모든 값을 찾음.(배열 요소 끝까지 반복)
const apples = devices.filter((device) => device.brand === "apple");

console.log(apples);
console.log(...apples);

// 하나의 요소만 filter 적용해도 배열을 return 해주기 때문에 spread 구문 활용. 대신 find
// return 값이 값. 존재하지 않는 값은 undefined로 출력.
// 조건에 만족하는 값을 찾는 순간 반복 종료.
const myWatch = devices.find((device) => device.name === "오렌지시계");

console.log(myWatch);


// some과 every
// 단순히 조건을 만족하는지 확인 시 활용.
// method 호출하는 배열이 빈 배열일 시, 콜백함수 실행X (some: false, *every: true*)
// boolean 값만 return. 조건을 만족하거나, 만족하지 않는 값을 찾는 순간 반복 종료
const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((el, i) => {
  console.log("some:", i);
  return el > 5;
});

// every: 모든 요소가 조건을 만족하는지 = 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.every((el, i) => {
  console.log("every:", i);
  return el > 5;
});

console.log("some:", someReturn);
console.log("every:", everyReturn);

// 퀴즈(스파이 찾기)
const spies = [
  {
    codeName: "ApplePie",
    members: ["스파이", "스파이", "스파이", "스파이", "스파이"],
  },
  {
    codeName: "BigBoss",
    members: ["스파이", "스파이", "스과이", "스파이", "스파이"],
  },
  {
    codeName: "CEO",
    members: ["스파이", "스파이", "스파이", "습하이", "스파이"],
  },
  {
    codeName: "DeathNote",
    members: ["스파이", "스파이", "스파이", "스파이", "스파이"],
  },
  {
    codeName: "EarlyBird",
    members: ["스파이", "스마이", "스파이", "스파이", "스파이"],
  },
  {
    codeName: "Faker",
    members: ["스파이", "스파이", "스파이", "스파이", "스파이"],
  },
];

function checkSpy(team) {
  // Destructuring
  const { members } = team;
  const result = members.some((member, i) => {
    return member !== "스파이";
  }); // '스파이'가 아닌 요소가 1개 이상 있으면 true

  if (result) {
    console.log(`[주의!] 팀 ${team.codeName} 에 이중 스파이가 있습니다.`);
  } else {
    console.log(`팀 ${team.codeName} 에는 이중 스파이가 없습니다.`);
  }
  // 삼항 연산자
  const { codeName } = team;
  const message = result
    ? `[주의!] 팀 ${codeName} 에 이중 스파이가 있습니다.`
    : `팀 ${codeName} 에는 이중 스파이가 없습니다.`;

  console.log(message);
}

spies.forEach((team) => checkSpy(team));


// reduce
// 현재 동작하는 콜백함수의 return 값이 다음에 실행될 parameter로 전달됨.
const numbers = [1, 2, 3, 4];
// accumulator(누산기)
// 매번 콜백함수가 반복해서 동작할 때,직전에 동작한 콜백함수가 return 한 값을 전달 받는 parameter
numbers.reduce((acc, el, i, arr) => {
  return nextAccValue;
}, initialAccValue);

const sumAll = numbers.reduce((acc, el, i) => {
  console.log(`${i}번 index의 요소로 콜백함수가 동작중입니다.`);
  console.log("acc:", acc);
  console.log("el:", el);
  console.log("--------------");

  return acc + el;
}, 0); // 초기값을 명시하는것이 안전(실행되는 콜백함수가 0번 index가 아니라 1번 index에서 시작하여 배열의 요소와 콜백 함수의 동작 수가 달라지는 것을 방지.)

console.log("sumAll:", sumAll);

// 퀴즈(경력 더하기)
const data = [
  { company: "Naber", month: 3 },
  { company: "Amajohn", month: 12 },
  { company: "Coogle", month: 10 },
  { company: "Ittel", month: 6 },
  { company: "Sasung", month: 4 },
  { company: "CaCao", month: 3 },
  { company: "Microhard", month: 17 },
];

const totalCareer = data.reduce((acc, el) => {
  return acc + el.month;
}, 0);

console.log(`경력은 총 ${totalCareer}개월`); // 55


// sort
// 배열에서 정렬 가능. argument를 전달하지 않을 때는 유니코드에 정의된 문자열 순서에 따라 정렬됨.
// method를 실행하는 원본 배열의 요소를 정렬함. 정렬 후 다시 되돌릴 수 없음. 미리 다른 변수에 복사
const numbers = [1, 4, 90, 3000, 486];

numbers.sort();
console.log(numbers); // [1, 3000, 4, 486, 90]

// 오름차순 정렬
// 반환 값 < 0: a가 b보다 앞에 있어야 한다.
numbers.sort((a, b) => a - b); // [1, 4, 90, 486, 3000]

// 내림차순 정렬
// 반환 값 > 0: b가 a보다 앞에 있어야 한다.
numbers.sort((a, b) => b - a); // [3000, 486, 90, 4, 1]


// reverse
// 배열의 순서를 뒤집어 줌. 별도의 parameter 존재X.
// 원본 배열의 요소를 뒤집음(주의!)


// Map과 Set
// Map: 이름이 있는 데이터를 저장한다는 점에서 객체와 비슷.
// 일반 객체와 다르게 Map은 method를 통해서 값을 추가, 접근 가능. 다양한 자료형을 key로 활용 가능.
// Map 생성
const tiger = new Map();

// set method
// map.set(key,value): key를 이용해 value를 추가하는 메소드.
tiger.set("title", "문자열 key");
tiger.set(2022, "숫자형 key");
tiger.set(true, "불린형 key");

// get method
// map.get(key): key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
console.log(tiger.get("title")); // 문자열 key
console.log(tiger.get(2022)); // 숫자형 key
console.log(tiger.get(true)); // 불린형 key

// has method
// map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
console.log(tiger.has("title")); // true
console.log(tiger.has("name")); // false

// size property
// map.size: 요소의 개수를 반환하는 프로퍼티.(method가 아님(주의!), 배열의 length property와 같은 역할)
console.log(tiger.size); // 3

// delete method
// map.delete(key): key에 해당하는 값을 삭제하는 메소드.
tiger.delete(true);
console.log(tiger.get(true)); // undefined
console.log(tiger.size); // 2

// clear method
// map.clear(): Map 안의 모든 요소를 제거하는 메소드
tiger.clear();
console.log(tiger.get(2022)); // undefined
console.log(tiger.size); // 0

// Set: 여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷.
// Set 생성
const animals = new Set();

// add method
// set.add(value): 값을 추가하는 메소드.( 메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
animals.add('rabbit'); // Set(1) {"rabbit"}
animals.add('dog'); // Set(2) {"rabbit", "dog"}
animals.add('cat'); // Set(3) {"rabbit", "dog", "cat"}
animals.add('elephant'); // Set(4) {"rabbit", "dog", "cat", "elephant"}

// has method
// set.has(value): Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.
console.log(animals.has('dog')); // true
console.log(animals.has('mouse')); // false

// size property
// set.size: 요소의 개수를 반환하는 프로퍼티.(method가 아님(주의!), 배열의 length property와 같은 역할)
console.log(animals.size); // 4

// delete method
// set.delete(value): 값을 제거하는 메소드.(메소드를 호출한 자리에는 Set 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
animals.delete('chicken'); // false
console.log(animals.size) // 4
animals.delete('dog'); // true
console.log(animals.size) // 3

// clear method
animals.clear();
console.log(animals.size); // 0

// Set에는 개별 값에 바로 접근하는 방법이 없다.
for (const animal of animals) {
    console.log(animal); // 반복문을 통해서 전체요소를 한꺼번에 다룰 때 반복되는 그 순간에 개별적으로 접근 가능.
}

// Set 유용하게 사용되는 경우: 중복을 허용하지 않는 값들을 모을 때
// 최초에 추가된 순서를 유지하면서, 나중에 중복된 값을 추가하려고 하면 그 값은 무시.
const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}