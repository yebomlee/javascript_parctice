// for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환.
// 반환된 배열의 순서는 객체가 정의된 방법과 관련이 없음.

// 어떤 게임의 평점이 담긴 객체가 있다.
// 난이도별로 객체를 만들어, 배열 result에 담아 출력할 수 있도록 for문 완성하기.
// [ {난이도 : 점수}, {난이도 : 점수}, ... ]

const score = {
  easy: 234,
  normal: 759,
  hard: 677,
  nightmare: 46,
};

const arr = Object.entries(score);
console.log(arr);
// [
//   [ 'easy', 234 ],
//   [ 'normal', 759 ],
//   [ 'hard', 677 ],
//   [ 'nightmare', 46 ]
// ]

let result = [];

for (let i = 0; i < arr.length; i++) {
  let [key, val] = arr[i];
  result.push({ [key]: val });
}

console.log('결과', result); // [ { easy: 234 }, { normal: 759 }, { hard: 677 }, { nightmare: 46 } ]
