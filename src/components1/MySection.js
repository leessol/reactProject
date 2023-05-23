import React from "react";

function MySection(props) {
  console.log("MySection.js.... MySection Component");
  return (
    <section>
      <article>
        <h1>React 학습</h1>
        <p>Props</p>
        <p>state</p>
        <p>Component</p>
        <hr></hr>
      </article>
    </section>
  );
}

function MySection2() {
  return (
    <div>
      <p>MySection.js의 MySection2 함수이다. </p>
    </div>
  );
}

//export default MySection //default는 하나의 함수밖에 안돼서 이렇게는 쓸 수 없다.
//하나의 컴포넌트만 default 가능하다..
export { MySection2, MySection as default }; //MySection만 디폴트이다. MySection2는 기본.. 그래서 app.js에서 {}반드시 써줘야 함.
