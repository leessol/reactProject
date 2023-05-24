import React from "react";
import { ClassCom1, ClassCom2 } from "components2/ClassComponent1";

import FunctionComponent2, {
  score1,
  score2,
  FunctionComponent1,
} from "components2/FunctionComponent1";

import propTypes from "prop-types";

function App3(props) {
  console.log(score1 + score2);
  const arr = ["HTML", "CSS", "JavaScript", "ReactJS"];
  return (
    <>
      <p>score1: {score1}</p>
      <p>score2: {score2}</p>
      <FunctionComponent1
        title="f1"
        content="function comp1"
        price={100}
        subject={arr}
        bkcolor="blue"
      >
        AA
      </FunctionComponent1>
      <FunctionComponent2
        title="f1"
        content="function comp1"
        price={100}
        subject={arr}
        bkcolor="green"
      >
        BB
      </FunctionComponent2>
      <ClassCom1
        title="class1"
        content="class comp1"
        price={100}
        subject={arr}
        bkcolor="pink"
      >
        CC
      </ClassCom1>
      <ClassCom2
        title="class2"
        content="class comp2"
        price={200}
        subject={arr}
        bkcolor="yellow"
      >
        DD
      </ClassCom2>
      <FunctionComponent2>function 속성값 할당안함</FunctionComponent2>
      <ClassCom1>class 속성값 할당 안함</ClassCom1>
      <ClassCom2>class2 속성값 할당 안함</ClassCom2>
    </>
  );
}
FunctionComponent2.defaultProps = {
  title: "title값없음",
  content: "content값없음",
  price: 999,
};

ClassCom1.defaultProps = {
  title: "title값없음",
  content: "content값없음",
  price: 999,
};

FunctionComponent1.propTypes = {
  title: propTypes.string,
  content: propTypes.string,
  price: propTypes.number,
};

export default App3;
