// ex01-18.ts 복사
(() => {
  const JS = "Javascript";
  const TS = "Typescript";
  const REACT = "React";

  function getSchedule(subject: string): string | undefined {
    // undefined == void
    if (subject == JS) {
      // = 할당 연산자 오류 막아줌: 변수 let -> 상수 const
      return `Javascript 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    } else if (subject === TS) {
      return `Typescript 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }

  const jsSchedule = getSchedule(JS);
  const tsSchedule = getSchedule(TS);

  console.log(jsSchedule);
  console.log(tsSchedule);
})();
