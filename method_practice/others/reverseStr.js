const reverseStr = (list) => {
  const arr = list.reverse();
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i].charCodeAt(j) > 90) {
        answer = answer + arr[i][j].toUpperCase();
      } else {
        answer = answer + arr[i][j].toLowerCase();
      }
    }
    answer = answer + ' ';
  }
  return answer;
};

const strArr = ['world!', 'hello', 'sAY', 'sTRANGER,', 'hELLO'];
console.log(reverseStr(strArr));
