// ex01-19.ts 복사
// 숫자형 enum
(() => {
  // enum 읽기 전용
  enum ClassName {
    JS = 100,
    TS = 111,
    REACT = 222,
  }

  function getSchedule(subject: ClassName): string | undefined {
    // undefined == void
    if (ClassName.JS == subject) {
      // = 할당 연산자 오류 막아줌: 변수 let -> 상수 const
      return `Javascript 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    } else if (ClassName.TS === subject) {
      return `Typescript 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }

  const jsSchedule = getSchedule(ClassName.JS);
  const tsSchedule = getSchedule(ClassName.TS);

  console.log(jsSchedule);
  console.log(tsSchedule);

  console.log(ClassName);
})();
