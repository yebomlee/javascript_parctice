// 많은 코드가 필요한 프로그램은 각 기능별로 여러개의 파일로 분리해서 관리하는 것이 좋다.
// 모듈화(Modularization): 공통된 기능이나 특별한 목적에 따라 각각의 파일로 분리하는 과정
// 모듈(Module): 이 때 분리된 파일 하나 하나. (자바스크립트 파일 하나.)

// 모듈화 장점: *코드를 효율적으로 관리 할 수 있다. 다른 프로그램에서 재사용 할 수 있다.*
// 모듈 스코프: 모듈 파일 내에서 선언한 변수나 함수는 해당 파일 안에서만 사용 가능. (모듈 파일만의 독립적인 스코프 가져야 함.)
// 모듈 문법 활용 시, 브라우저에서 HTML파일을 직접 불러오지 않고 서버를 통해서 파일을 실행해야 함.
// (HTML파일에서 자바스크립트 파일을 불러올 때 모듈 스코프를 갖게 하려면 script태그에 type속성을 module이라는 값으로 지정해 준다.)

// 모듈 파일에서 외부로 내보내고 싶은 변수나 함수는 선언문 앞에 export 키워드 붙여줌.
// export된 변수나 함수를 다른 파일에서 사용하고자 할 때는 import 키워드를 사용해서 불러옴.

// ---------------------------------------------------------------------------------------------------------

// index.js 파일에서 모듈 파일 경로 지정해서 변수, 함수 불러옴.
import { title, print } from './printer.js';

print(title); // Printer

// 이름 바꾸기(as 키워드 이용)
// 같은 이름의 변수나 함수가 필요한 경우, 여러 모듈 import시 이름이 중복되는 경우, 모듈을 import할 시, 의도에 따라 이름 변경 가능.
import { title as printerTitle, print } from './printer.js';
import { title, data as foods } from './foods.js';

print(printerTitle); // Printer
print(title); // foods
print(foods);

// 한꺼번에 다루기(효율적이지 않다.)
// *(와일드카드 문자: Wildcard Character)
import * as printAll from './printer.js';
import { title as foodsTitle, data as foodsData } from './foods.js';

// 사용 할 때는 객체의 형식으로 사용.
console.log(printAll.title);
printAll.print(foodsTitle);
printAll.print(foodsData);

// default 키워드를 통해 export 된 값은 import 시, default 키워드에 반드시 as를 통해 이름을 붙여주어야 함.
import { default as water } from './printer.js';

// default as 생략하고 {}밖으로 이름 값을 빼낼 수가 있음.
import water from './printer.js';

console.log(water);

// 하나의 객체 값으로 내보냈을 때, import 후 사용시 객체 형태로 값 활용 가능.
// 축약형 문법: (단점) 매번 점 표기법으로 property에 접근해야 하며, 각 대상의 이름을 변경 할 수 없음
import printAll from './printer.js';

// (참고 예시) 와일드카드로 접근할 시, printAll.default 라는 parameter로 접근 가능.
