// findIndex(): 검사를 위해 전달받은 함수를 만족하는 배열의 첫번째 요소에 대한 인덱스를 반환함. 만족하는 값이 없으면 -1을 반환함.

// 학생들의 이름이 가나다 순서로 정렬된 배열이 있다.
// 이름이 '조'로 시작하는 학생이 제일 처음 등장하는 인덱스를 리턴하는 콜백함수를 완성하기.
const arr = ['김지니', '백도야', '조도도', '홍탕탕'];

function callBackFn(element) {
  if (element[0] === '조') {
    return true;
  }
}

const result = arr.findIndex(callBackFn);

console.log('결과', result); // 2
