// index signature, string
(() => {
  interface User {
    name: string;
    email: string;
    age?: number; // undefined도 가능하므로
    // phone?: string;
    // address?: string;
    // body?: string;
    //`...
    [etc: string]: string | number | undefined; //^ 필수 조건들을 하나로 합쳐서 쓰고 싶다
  }

  var kim: User = {
    name: "김철수",
    email: "kimg@gmail.com",
    age: 30,
    phone: "010...",
    address: "서울시...",
    hobby: "독서",
  };

  var lee: User = {
    name: "이영희",
    email: "lee@gmail.com",
    age: 35,
  };

  console.log(kim, lee);
})();
