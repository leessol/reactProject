import SmartHome from "components3/SmartHome";
import StateTest from "components3/StateTest";
import React, { useEffect } from "react";

function AppStart4(props) {
  // useEffect(() => {
  //   console.log("AppStart4.js 가 로드시 마다!!!!!!");

  // });

  return (
    <div>
      {/* <MyCounter /> */}
      <br />
      <hr />
      <br />
      {/* <MyCounterFunctionComp /> */}
      <br />
      <hr />
      <br />
      {/* <MyStyleChangeComp />
      <MemberComponent />
      <FunctionComponent2 /> 
      <BoardListComponent />*/}
      <SmartHome />
      <StateTest />
    </div>
  );
}

export default AppStart4;
