// 에러와 에러 객체

// 에러 발생 시, 그 순간 프로그램 자체가 멈춰버린다.
// 자바스크립트는 코드가 실행되는 도중에 에러가 발생하면 자동으로 그 에러에 대한 정보가 담긴 에러 객체를 생성한다.
// 에러 객체 형태: name, message
// 대표적 에러 객체 : ReferenceError(존재하지 않는 변수나 함수를 호출할 때), TypeError(잘못된 방식으로 자료형을 다룰 때), SyntaxError(문법에 맞지 않는 것을 작성 했을 때, 코드를 실행하기도 전에 에러를 발생시킴.)
console.log("시작");

const title = "자바스크립트";
console.log(title);
console.log(language); // 에러 발생, 프로그램 종료

console.log("끝"); // 출력 X

// 의도적으로 에러 객체 생성
const error = new TypeError("타입 에러가 발생했습니다.");

console.log(error.name);
console.log(error.message);

// 에러 객체를 활용해 에러를 직접 발생시키기.
throw error;

// try catch 문
try {
  // 코드
} catch (error) {
  // 에러가 발생했을 때 동작할 코드
}

try {
  console.log("에러 전");

  const apple = "사과";
  console.log(apple);

  apple = "apple"; // 에러 발생
  // 에러가 발생한 시점 이후의 코드는 실행되지 않는다.

  const fruit = "과일";
  console.log(fruit);

  // try문 안에서 발생된 에러 객체가 catch문의 파라미터에 전달.
} catch (error) {
  console.error("에러가 발생했다");
}

// try catch 활용하기
function getFruits(fruits) {
  for (const fruit of fruits) {
    console.log(fruit);
  }
}

const redFruit = ["사과", "딸기", "토마토", "체리"];
getFruits(redFruit);

// 객체는 for of 문을 사용할 수 없으므로, 에러 발생.
// 이 때, try catch문 사용.
const favoriteFruit = { name: "귤" };
getFruits(favoriteFruit);

const yellowFruit = ["바나나", "망고", "레몬", "파인애플"];
getFruits(yellowFruit);

// try catch문도 각각의 코드 블록으로 이루어져 있다.(변수 활용 시, 스코프 주의)
// 실행이 가능한 코드에서 발생한 에러를 다루는 과정 - 예외 처리(Exception Handling)
function getFruits(fruits) {
  try {
    for (const fruit of fruits) {
      console.log(fruit);
    }
  } catch (err) {
    console.error(err);
    alert(`${err.name}가 발생했습니다. 콘솔창을 확인해 주세요.`);
  }
}

const redFruit = ["사과", "딸기", "토마토", "체리"];
getFruits(redFruit);

const favoriteFruit = { name: "귤" };
getFruits(favoriteFruit);

const yellowFruit = ["바나나", "망고", "레몬", "파인애플"];
getFruits(yellowFruit);

// finally문
try {
  // 실행할 코드
} catch (err) {
  // 에러가 발상했을 때 실행할 코드
} finally {
  // 항상 실행할 코드, try문에서 어떤 코드를 실행할 때 에러 여부와 상관 없이 항상 실행할 코드
}

// finally문에서 에러 처리(try catch 중첩 활용)
try {
  try {
    // 실행할 코드
  } catch (err) {
    // 에러가 발상했을 때 실행할 코드
  } finally {
    // 항상 실행할 코드
  }
} catch (err) {
  // finally문에서 에러가 발생했을 때 실행할 코드
}

// 예시 퀴즈 게임
const quiz1 = {
  question: "다음 중 스승의 날과 생일이 같은 인물은 누구일까요?",
  example: ["율곡 이이", "퇴계 이황", "세종대왕", "신사임당"],
  answer: 3,
  solution:
    "훈민정음 창제 등 우리나라 문화와 교육 발전에 남긴 업적이 가장 큰 인물이라는 평가와 함께, 이 시대의 스승이 세종대왕처럼 존경받았으면 하는 바람으로 세종대왕의 탄생일이 스승의 날로 지정되었습니다.",
};

const quiz2 = {
  question: "다음 중 희노애락에 속하지 않는 것은 무엇일까요?",
  example: ["사랑", "기쁨", "즐거움"],
  answer: 1,
  solution:
    "희노애락에서의 애를 사랑 애(愛)라고 자칫 오해할 수가 있지만, 희노애락의 애는 슬플 애(哀)입니다. 기쁨은 기쁠 희(喜), 즐거움은 즐거울 락(樂)에 담겨 있습니다.",
};

function printQuiz({ question, example }) {
  try {
    let exMsg = "";

    for (let i = 0; i < example.length; i++) {
      exMsg += `${i + 1}. ${example[i]}  `;
    }
    console.log(question);
    console.log(exMsg);
  } catch (err) {
    console.log(err.name);
  }
}

printQuiz(quiz1);
printQuiz(1); // TypeError
printQuiz(""); // TypeError
printQuiz({}); // TypeError
printQuiz(quiz2);