(() => {
  interface Todo {
    readonly _id: number; // 읽기만 가능 -> 객체 생성시 값 할당 가능. 생성 이후에는 수정할 수 없는 속성.  //^ id와 같이 고유한 값
    title: string;
    content: string;
    done?: boolean; // optional property
  }

  // 익명함수
  interface Toggle {
    (param: Todo): void;
  }

  var todo1: Todo = {
    _id: 1,
    title: "할일1",
    content: "인터페이스 사용",
    done: false,
  };

  var todo2: Todo = {
    _id: 2,
    title: "할일2",
    content: "인터페이스 사용2",
  };

  // var toggleFn: Toggle = function (todo: Todo): void {
  var toggleFn: Toggle = function (todo) {
    todo.done = !todo.done;
  };

  // todo1_id = 3;
  todo1.title = "집에 가자"; //^ 더 이상 수정 불가능

  toggleFn(todo1);
  toggleFn(todo1);
  console.log(todo1, todo2);
})();
