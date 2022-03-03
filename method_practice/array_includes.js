// includes(): 배열이 특정 요소를 포함하고 있는지 판별함.

// 장바구니에 중복 포함된 과일을 찾아 배열에 담아 리턴하기.
function solution(firstCart, secondCart) {
  let resultArr = [];

  firstCart.forEach((fruit) => {
    if (secondCart.includes(fruit)) {
      resultArr.push(fruit);
    }
  });
  return resultArr;
}

const firstCart = ['사과', '딸기', '망고'];
const secondCart = ['포도', '귤', '딸기'];

const result = solution(firstCart, secondCart);
console.log('결과', result); // ["딸기"]
