(() => {
  class HighSchool {
    constructor(kor, eng) {
      this.kor = kor;
      this.eng = eng;
    }
    sum() {
      return this.kor + this.eng;
    }
    avg() {
      // 평균은 소수 첫째 자리에서 반올림
      return (this.sum() / 2).toFixed()
      // return Math.round(this.sum() / 2)
    }
  }
  var s1 = new HighSchool(100, 91);
  console.log('평균', s1.avg());

  // 잘못된 사용
  s1.eng = 99; // 값 수정 가능
  console.log("평균", s1.sum() / 2); // 원하는 반올림 기능 동작 X
})();