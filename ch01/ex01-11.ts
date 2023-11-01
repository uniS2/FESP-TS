// 클래스의 타입 지정에 인터페이스 사용
(() => {
  interface Score {
    kor: number;
    eng: number;
    sum(): number;
    avg(): number;
  }

  class HighSchool implements Score {
    kor: number;
    eng: number;

    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }

    sum() {
      return this.kor + this.eng;
    }
    avg() {
      return this.sum() / 2;
    }
  }

  const kim = new HighSchool(100, 90);
  // kim = new HighSchool(100, 80); //^ 굳이 변경 가능성 있는 let을 써서 위험성을 감수하지 말고 const 쓰자!
  console.log(kim.sum(), kim.avg());
})();
