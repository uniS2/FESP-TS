// 유니언 타입
//^ any: 마치 자바스크립트로 작성하는 것처럼 동작
//^ 유니언 타입: 타입스크립트의 이점을 살리면서 코딩
(() => {
  //any를 사용하는 경우
  function getAge(age: any) {
    age.toFixed(); // 에러 발생, age의 타입이 any로 추론되기 때문에 숫자 관련된 API를 작성할 때 코드가 자동 완성되지 않는다.
    return age;
  }

  function print(msg: string | number | boolean): void {
    if (typeof msg === "string") {
      // 타입 가드  //^ 명확하게 무슨 타입인지 알 수 있어 해당 타입 관련 메서드 등 호출 가능
      console.log(`${msg} 글자수: ${msg.length}`);
    } else if (typeof msg === "number") {
      console.log(`${msg} + 10 = ${msg + 10}`);
    } else {
      console.log(`${msg}: ${msg ? "참" : "거짓"}`);
    }
  }
  print("world");
  print(200);
  print(false);
})();
