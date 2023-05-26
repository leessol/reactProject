import React from "react";
import { Route, Routes } from "react-router-dom";
import BoardMenu from "./BoardMenu";
import BoardRetrieve from "boardcomponents/BoardRetrieve";
import BoardDetail from "boardcomponents/BoardDetail";
import BoardUpdate from "boardcomponents/BoardUpdate";
import BoardInsert from "boardcomponents/BoardInsert";
import BoardDelete from "boardcomponents/BoardDelete";

function BoardHOME(props) {
  return (
    <div>
      <h1>BoardHome</h1>
      <Routes>
        <Route path="/" element={<BoardMenu />}></Route>
        <Route path="list" element={<BoardRetrieve />}></Route>
        <Route path="detail/:bno" element={<BoardDetail />}></Route>
        <Route path="update" element={<BoardUpdate />}></Route>
        <Route path="insert" element={<BoardInsert />}></Route>
        <Route path="delete" element={<BoardDelete />}></Route>
      </Routes>
    </div>
  );
}

export default BoardHOME;
