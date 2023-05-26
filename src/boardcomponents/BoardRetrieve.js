import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BoardRetrieve(props) {
  const [boardList, setBoardList] = useState([]);
  //렌더링 되었을 때 딱 한번만 실행
  useEffect(() => {
    axios({
      method: "get",
      url: "/rest/webboard/list.do",
    })
      .then((r) => {
        console.log(r.data);
        setBoardList(r.data); //화면에 보임.
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <p>BoardRetrieve</p>

      <table>
        <thead>
          <tr>
            <th>bno</th>
            <th>title</th>
            <th>content</th>
            <th>writer</th>
            <th>regdate</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board, index) => (
            <tr key={index}>
              <td>
                <Link to={`/board/detail/${board.bno}`}>{board.bno}</Link>
              </td>
              <td>{board.title}</td>
              <td>{board.content}</td>
              <td>{board.writer}</td>
              <td>{board.regdate}</td>
              <td>
                <Link to="/board/update" state={{ boardData: board }}>
                  <Button variant="primary mx-3">수정</Button>
                </Link>
                <Link to="/board/delete" state={{ boardid: board.bno }}>
                  <Button variant="danger">삭제</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardRetrieve;
