import React, { useState } from "react";

function MyStyleChangeComp(props) {
  const a = 10;
  const [color, setColor] = useState("black");
  const [mystle, setMystyle] = useState({
    color: "red",
    border: "1px solid red",
  });
  const handleColorChange = (event) => {
    var targetContent = event.target.innerHTML;
    setColor(targetContent);
    setMystyle({
      color: targetContent,
      border: `1px solid ${targetContent}`,
    });
  };
  return (
    <div>
      <h1 style={mystle}>컬러 변경 하기......{color}</h1>
      <h2 style={{ color: color }}>컬러 변경하기2</h2>
      {/* 값과 속성명이 같으면 한번만 사용해도 됨 */}
      <h2 style={{ color }}>컬러 변경하기2</h2>
      <button onClick={handleColorChange}>red</button>
      <button onClick={handleColorChange}>green</button>
      <button onClick={handleColorChange}>blue</button>
    </div>
  );
}

export default MyStyleChangeComp;
