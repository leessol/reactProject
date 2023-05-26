import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BoardDelete(props) {
  const location = useLocation();
  const navi = useNavigate();
  const bno = location.state.boardid;

  useEffect(() => {
    axios({
      url: `/rest/webboard/delete.do/${bno}`,
      method: "delete",
    })
      .then((r) => {
        console.log(r.data);
        alert(r.data);
        //조회 page로 이동하기
        //어디로 갈건지
        navi("/board/list");
      })
      .catch((e) => {});
  });
  return <></>;
}

export default BoardDelete;
