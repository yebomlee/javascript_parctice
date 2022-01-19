## 웹이란?
### World Wide Web(전 세계적 연결망, 가상의 연결망)
- Request와 Response가 https, http 프로토콜을 준수하면서 오고 가는 것이 웹의 특징.

### URL(Uniform Resource Locator): 웹에 존재하는 특정 데이터를 나타내는 문자열
  - Scheme(스킴): 프로토콜의 이름(e.g. https) 들어감.
  - Host(호스트): 전 세계 서버 중 하나의 서버를 특정
  - Path(경로): 서버에 있는 데이터 중 원하는 데이터를 특정(개발자가 설계)
  - Query(쿼리): 데이터에 관한 세부적인 요구사항 있을 떄 활용. 하나의 속성 이름에 등호와 값이 써 있음. 각각의 속성은 앰퍼샌드로 이어져 나타냄.


## HTTP란?
- 프로토콜(Protocol): 통신을 하는 두 주체가 지켜야 하는 통신 규약.

**http** : HyperText Transfer Protocol

**https**: HyperText Transfer Protocol Secure (보안성 추가)

* HyperText: 다른 텍스트에 대한 참조를 갖고 있는 텍스트


### **fetch: 서버로 요청을 보내고 응답을 받는 함수**
- 실행원리
  - parameter로 넘어온 URL로 request를 보냄.
  - 서버가 보낸 response는 하나의 객체가 되어 parameter로 넘어옴.(Promise 객체 return)
  - Promise 객체의 then method가 response가 왔을 때 실행할 콜백을 등록해줌.
  - 등록된 콜백들은 then method로 등록한 순서대로 실행.(이전 콜백의 return값 이후 콜백이 넘겨받아 사용 가능)

```js 
fetch('https://www.google.com')
// response parameter에는 response에 관한 각종 부가 정보, 실제 내용을 가진 하나의 객체로 넘어옴.
// 원하는 실제 response의 내용을 보려면 response 객체의 text method 호출.
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
  ```