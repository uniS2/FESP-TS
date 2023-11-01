// 객체 타입 선언
(() => {
  // 객체의 타입 선언
  type User = { name: string; age: number };

  // 객체 생성
  var kim: User = { name: "김철수", age: 30 };
  var lee = { hello: "world" };

  console.log(kim);

  //^ User 중복 지정이라 느낄 수 있으나 kim 만 온다 생각할 수 없으므로
  function printUser(user: User): void {
    console.log(user.name, user.age);
    //^ return 코드 없어 자동으로 void로 타입추론
  }
  // var result: string = printUser(kim); // void 추론 -> 에러
  printUser(kim);
  // printUser(lee);
})();
