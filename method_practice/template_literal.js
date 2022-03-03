// template literal: 이중 따옴표나 작은 따옴표 대신 백틱(``)을 이용함.
// template literal 안에서 백틱 문자를 사용하려면 백틱 앞에 백슬래쉬(\)를 넣음.

// 자신의 제일 좋아하는 음식 세 가지를 출력하는 함수를 만들기.
function favoriteFood(foods) {
  let result = `제가 좋아하는 음식은 ${foods}입니다.`;

  return result;
}

let foods = '자장면, 치킨, 피자';
console.log(favoriteFood(foods)); // 제가 좋아하는 음식은 자장면, 치킨, 피자입니다.
