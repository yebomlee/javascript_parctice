// printer.js 파일에서 변수, 함수 선언 후 내보냄.
// Named Export
// 각 선언문 앞에 export를 붙여서 선택적으로 내보내기 가능.
export const title = 'Printer';

export function print(value) {
    console.log(value);
}

// export를 할 때도 코드를 한꺼번에 다룰 수 있음.(중괄호 사용)
// 모듈 파일에서 as 키워드로 미리 이름을 바꿀 수도 있음.
export { title as printerTitle, print };

// Default Export(모듈 파일 내에서 단 한번만 사용 가능)
// 하나의 대상만 내보낼 수 있음.(변수, 함수뿐만 아니라 값 하나도 전달 가능)
export default 'water';

// 여러 대상을 하나의 객체 값으로 모아 내보냄.
// 각 대상을 export 하는 코드블록으로 평가되는 것이 아닌 객체를 표현하는 중괄호로 평가.
export default { title, print }; // { title: title, print: print }