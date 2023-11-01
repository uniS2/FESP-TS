// 유니언 타입
(function () {
  function print(msg) {
    if (typeof msg === "string") {
      console.log("".concat(msg, " \uAE00\uC790\uC218: ").concat(msg.length));
    }
    else if (typeof msg === "number") {
      console.log("".concat(msg, " + 10 = ").concat(msg + 10));
    }
    else {
      console.log("".concat(msg, ": ").concat(msg ? "참" : "거짓"));
    }
  }
  print("world");
  print(200);
  print(false);
})();
