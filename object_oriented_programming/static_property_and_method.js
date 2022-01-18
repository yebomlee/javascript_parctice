// static property와 static method
// class에 직접적으로 딸려있는 property와 method
// 객체가 아닌 클래스 자체로 접근하여 사용.
class Math {
  static PI = 3.14;

  static getCircleArea(radius) {
    return Math.PI * radius * radius;
  }
}

console.log(Math.PI); // 3.14
console.log(Math.getCircleArea(5)); // 78.5

// 기존값을 수정하거나, 새로운 것 추가 가능.
Math.PI = 3.141592;
Math.getRectangleArea = function (width, height) {
    return width * height;
}

console.log(Math.PI); // 3.141592
console.log(Math.getRectangleArea(3, 5)); // 15

// Date라는 내장객체에도 static method가 존재
console.log(Date.now()); // 1642493593686 // 1970년 1월 1일부터 지금 이 시점까지 경과된 밀리초


// 파일 하나당 class 하나를 작성하고, 이를 외부에 공개해서 사용할 수 있도록 하는 방식 주로 활용.
// 각 class와 메인 로직(main.js)을 파일별로 쪼개서 작성.