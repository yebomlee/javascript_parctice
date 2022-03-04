// for...in 반복문은 상속된 열거 가능한 속성에 대해 반복.
// 객체를 순회하며 key가 title이거나 name일 경우 대문자로 교체하기.

const obj = {
  title: 'The Title',
  name: 'Jane',
  contents: 'Nothing to say',
};

for (let key in obj) {
  if (key === 'title' || key === 'name') {
    obj[key] = obj[key].toUpperCase();
  }
}

console.log(obj);
// {
//   title : "THE TITLE",
//   name : "JANE",
//   contents: "Nothing to say"
// }
