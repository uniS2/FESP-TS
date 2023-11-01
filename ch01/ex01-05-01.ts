// 유니언 타입
(() => {
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
