// Math.ceil(): 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer로 반환.

function pencil(students) {
  const result = Math.ceil(students / 12);
  return result;
}

console.log(pencil(25));
console.log(pencil(178));
