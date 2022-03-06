function takeRank(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        count = count + 1;
      }
    }
    result.push(count);
  }
  return result;
}

const scoreArr = [87, 89, 92, 100, 76];
console.log(takeRank(scoreArr));
