import React from "react";

const Light = ({ room, on }) => {
  console.log(room, on);
  return <div>{on ? "💡" : "⬛"}</div>;
};
//export default Light;
export default React.memo(Light);

//
