import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, Navigate, useParams } from "react-router-dom";

function BoardDetail(props) {
  const { bno } = useParams();
  const [board, setBoard] = useState({});

  useEffect(() => {
    axios({
      url: `/rest/webboard/view.do/${bno}`,
      method: "get",
    })
      .then((r) => {
        console.log(r.data);
        setBoard(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [bno]);

  return (
    <div>
      <p>BoardDetail</p>
      <p>BoardUpdate</p>
      번호: <input defaultValue={board.bno} readOnly /> <br />
      제목: <input name="title" defaultValue={board.title} readOnly /> <br />
      내용: <input name="content" defaultValue={board.content} readOnly />{" "}
      <br />
      작업자: <input name="writer" defaultValue={board.writer} readOnly />{" "}
      <br />
      등록일: <input defaultValue={board.regdate} readOnly /> <br />
      <Link to="/board/list">
        {" "}
        <Button>리스트로 이동</Button>
      </Link>
    </div>
  );
}

export default BoardDetail;
