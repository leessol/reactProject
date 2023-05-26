import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function BoardUpdate(props) {
  const location = useLocation();
  const navi = useNavigate();
  const [board, setBoard] = useState(location.state.boardData);

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(board);
  }, [board]);

  const handleSave = () => {
    axios({
      url: "/rest/webboard/modify.do",
      method: "PUT",
      data: board,
    })
      .then((r) => {
        console.log(r.data);
        navi("/board/list");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <p>BoardUpdate</p>
      번호: <input value={board.bno} readOnly /> <br />
      제목: <input
        name="title"
        value={board.title}
        onChange={handleChange}
      />{" "}
      <br />
      내용:{" "}
      <input
        name="content"
        value={board.content}
        onChange={handleChange}
      />{" "}
      <br />
      작업자:{" "}
      <input name="writer" value={board.writer} onChange={handleChange} />{" "}
      <br />
      등록일: <input
        value={board.regdate}
        onChange={handleChange}
        readOnly
      />{" "}
      <br />
      <Button onClick={handleSave}>저장하기 </Button>
    </div>
  );
}

export default BoardUpdate;
