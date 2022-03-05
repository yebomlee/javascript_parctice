// Set 객체: 자료형에 관계 없이 유일한 값을 저장 가능.

// 문자열로 이루어진 두 배열이 주어졌을 때 두 배열에 모두 갖고 있는 문자의 개수를 출력하기.
function common(arr1, arr2) {
  const setArr1 = new Set(arr1);
  const setArr2 = new Set(arr2);

  let sum = 0;
  for (const ele of setArr1) {
    if (setArr2.has(ele)) {
      sum = sum + 1;
    }
  }
  return sum;
}

const a = ['a', 'b', 'c', 'c', 'b'];
const b = ['b', 'b', 'b', 'c', 'e', 'e', 'f'];
console.log(common(a, b)); // 2
