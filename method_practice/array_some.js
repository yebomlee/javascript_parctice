// some(): 배열 요소가 테스트를 통과하는지 확인.

// 객체의 value에 null이 하나라도 있으면 순회를 멈추고 "400 ERROR"를 출력.
function solution(element, index, array) {
  if (element === null) {
    console.log('400 ERROR');
    return true;
  }
}

const inputs = {
  name: '찌나',
  contents: '안녕하세요.',
  title: null,
};

Object.values(inputs).some(solution);
