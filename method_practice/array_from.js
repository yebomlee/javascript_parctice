// from() : 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 array 객체를 생성.

// 배열의 짝수 인덱스의 값은 2로 홀수 인덱스의 값은 3인 배열 생성하는 함수 만들기. 배열의 길이는 매개변수 n.
function array(n) {
  let arr = Array.from({ length: n }, (value, i) => i + 1);

  arr.forEach((ele, i) => {
    if (ele % 2 === 0) {
      arr[i] = 2;
    } else {
      arr[i] = 3;
    }
  });
  return arr;
}

console.log(array(10)); // [ 3, 2, 3, 2, 3, 2, 3, 2, 3, 2 ]
