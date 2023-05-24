import React, { useState } from "react";

function BoardListComponent(props) {
  // function component 에서 상태값을 관리하고자 한다.
  //변수의 값이 변하면 UI가 자동으로 변경된다.
  const [board, setBoard] = useState({});
  const [boardList, setBoardList] = useState([]);
  return <div></div>;
}

export default BoardListComponent;
