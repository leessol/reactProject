import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function MyCounterFunctionComp(props) {
  //function일때 초기화 (class일때는 생성자 사용)
  //Hook: useState() 일반 함수 안에서 사용할수 없다.
  //Top-level에서만 가능
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("function 컴포넌트 이용 Counter임");
  const handleClick = (event) => {
    var btnContent = event.target.innerHTML;
    if (btnContent == "증가") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>count: {count}</h1>
      <h2>message: {message}</h2>
      <Button variant="primary" onClick={handleClick}>
        증가
      </Button>
      <Button variant="success" onClick={handleClick}>
        감소ss
      </Button>
      <Button variant="primary" onClick={() => setCount(count + 1)}>
        증가
      </Button>
      <Button variant="success" onClick={() => setCount(count - 1)}>
        감소
      </Button>
    </div>
  );
}

export default MyCounterFunctionComp;
