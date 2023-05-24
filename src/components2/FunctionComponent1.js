import React from "react";
var score1 = 100;
const score2 = 200;
//props : 부모가 자식에게 값을 전달해줌.
const FunctionComponent1 = (args) => {
  //javascript xml문법
  //JSX : root는 1개, tag 열기, 닫기, 계층구조
  //조건부연산: A && B => A가 참이면 B를 수행, A가 거짓이면 B를 무시
  return (
    <div>
      <h1>FunctionComponent1</h1>
      <>
        <p style={{ backgroundColor: args.bkcolor }}>title : {args.title}</p>
        <p>content : {args.content}</p>
        <p>price : {args.price}</p>
        <p>children : {args.children}</p>
        <ul>
          {args.subject &&
            args.subject.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </>
    </div>
  );
};
//비구조화 할당으로 값 받기
function FunctionComponent2({
  title,
  content,
  price,
  children,
  subject,
  bkcolor,
}) {
  return (
    <div>
      <h1>FunctionComponent2</h1>
      <>
        <p style={{ backgroundColor: bkcolor }}>title : {title}</p>
        <p>content : {content}</p>
        <p>price : {price}</p>
        <p>children : {children}</p>
        <ul>
          {subject && subject.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </>
    </div>
  );
}
export { score1, score2, FunctionComponent1, FunctionComponent2 as default };
