import React from "react";
import { Link } from "react-router-dom";

function BoardMenu(props) {
  return (
    <div>
      <p>BoardMenu</p>
      {/* 실제로 이동하지 않고 주소만 연결해줌,  */}
      <Link to="/board/list">
        <button className="btn btn-info mx-3">Board조회</button>
      </Link>
      <Link to="/board/insert">
        <button className="btn btn-primary mx-3">Board입력</button>
      </Link>
    </div>
  );
}

export default BoardMenu;
