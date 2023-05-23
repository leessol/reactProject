import React from "react";

export function Mynavigation(props) {
  console.log("MyNavigation.js ....... MyNavigation Component");
  return (
    <div>
      <nav>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export const myscore = 100;
export function MyNavigation2() {
  return (
    <div>
      <p>{myscore}</p>
      <p>MyNavigation.js의 MyNavigation2 함수이다. </p>
    </div>
  );
}

//export default Mynavigation; //js파일에 default는 하나
