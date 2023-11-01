// 인터페이스
// ex01-07.ts 복사
(() => {
  interface User {
    name: string;
    age: number;
  }

  // 객체 생성
  var kim: User = { name: "김철수", age: 30 };

  console.log(kim);

  function printUser(user: User): void {
    console.log(user.name, user.age);
  }
  // var result: string = printUser(kim); // void 추론 -> 에러
  printUser(kim);
})();
