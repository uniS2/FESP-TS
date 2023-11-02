// ex01-21.ts 복사
(() => {
  // 컴파일시 enum 사라지고 해당 문자값 그대로 사용 - 하드코딩 (호출X)
  const enum ClassName {
    JS = "Javascript",
    TS = "Typescript",
    REACT = "React",
  }

  function getSchedule(subject: string): string | undefined {
    if (ClassName.JS == subject) {
      return `${ClassName.JS} 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    } else if (ClassName.TS === subject) {
      return `${ClassName.TS} 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }

  const jsSchedule = getSchedule(ClassName.JS);
  const tsSchedule = getSchedule(ClassName.TS);

  console.log(jsSchedule);
  console.log(tsSchedule);

  // console.log(ClassName);
})();
