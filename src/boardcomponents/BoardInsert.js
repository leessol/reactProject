import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function BoarInsert(props) {
  const [board, setBoard] = useState({});
  const navi = useNavigate();

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };
  const handleInsert = () => {
    axios({
      url: "/rest/webboard/register.do",
      method: "post",
      data: board,
    })
      .then((responseData) => {
        console.log(responseData);
        console.log(responseData.data);
        alert("등록 완료");
        navi("/board/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>BoarInsert</p>
      <div>Register Page</div>
      <div>
        <form action="" method="post">
          <div>
            <label>Title</label>
            <input name="title" onChange={handleChange} />
          </div>
          <div>
            <label>Content</label>
            <textarea
              rows="3"
              name="content"
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label>Writer</label>
            <input name="writer" onChange={handleChange} />
          </div>
          <button type="button" onClick={handleInsert}>
            등록하기
          </button>
          <button type="reset">초기화하기</button>
        </form>
      </div>
    </div>
  );
}

export default BoarInsert;
