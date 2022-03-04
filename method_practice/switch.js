// switch-case를 이용해서 오늘의 요일을 출력하기.
let dayName = '';
let day = new Date().getDay();

switch (day) {
  case 1:
    text = '월요일';
    break;
  case 2:
    text = '화요일';
    break;
  case 3:
    text = '수요일';
    break;
  case 4:
    text = '목요일';
    break;
  case 5:
    text = '금요일';
    break;

  default:
    text = '주말입니다.';
}

console.log(text);
// 평일일 경우 해당 요일 출력 ('월요일', '화요일', ...)
// 주말일 경우 '주말입니다.' 출력
