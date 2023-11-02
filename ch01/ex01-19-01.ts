// ex01-19.ts 복사
(() => {
  //^ 객체 속성을 쓰지 못하므로 읽기 전용으로 만들기
  type ReadOnly = {
    // readonly JS: string;
    // readonly TS: string;
    // readonly REACT: string;
    // 인덱스 시그니처
    readonly [lang: string]: string;
  };

  //^ ReadOnly 타입으로 지정
  const ClassName: ReadOnly = {
    JS: "Javascript",
    TS: "Typescript",
    REACT: "React",
  };

  function getSchedule(subject: string): string | undefined {
    // undefined == void
    if (ClassName.JS == subject) {
      //^ = 할당 연산자 오류 막아줌: 변수 let -> 상수 const
      //^ 객체 속성 재할당 못하도록 읽기 전용으로 만들기
      return `Javascript 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    } else if (ClassName.TS === subject) {
      return `Typescript 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }

  const jsSchedule = getSchedule(ClassName.JS);
  const tsSchedule = getSchedule(ClassName.TS);

  console.log(jsSchedule);
  console.log(tsSchedule);
})();
