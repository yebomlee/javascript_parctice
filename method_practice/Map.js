// Map 객체: 키-값 쌍을 보유하고 키의 원래 삽입 순서를 기억. 모든 값은 키 또는 값으로 사용 가능.

// 인자로 받은 문자열을 분류해서 기존에 있는 컬렉션에 개수를 더해주는 함수 생성하기.
function classification(str) {
  let map = new Map([
    ['A', 1],
    ['B', 2],
    ['C', 3],
  ]);

  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === 'A') {
  //       map.set('A', map.get('A') + 1);
  //     } else if (str[i] === 'B') {
  //       map.set('B', map.get('B') + 1);
  //     } else if (str[i] === 'C') {
  //       map.set('C', map.get('C') + 1);
  //     }
  //   }
  //   return map;
  // }

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    }
  }
  return map;
}

const str = 'ABCCCAA';
console.log(classification(str)); // Map(3){'A' => 4, 'B' => 3, 'C' => 6}
