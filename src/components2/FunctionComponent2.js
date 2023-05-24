import React, { useState } from "react";
import { Button } from "react-bootstrap";

function FunctionComponent2(props) {
  const [userName, setuserName] = useState("홍길동");
  const [message, setMessage] = useState("반갑습니다...");
  var handleNameChange = (e) => {
    setuserName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }; //여기에 할당될 내용이 변경되지 않으면 const로 주면된다.
  const handleClear = (e) => {
    setuserName("");
    setMessage("");
  };
  const [fruit, setFruit] = useState("");
  const [fruitList, setFruitList] = useState(["바나나", "오렌지"]);
  var handleFruitAdd = (e) => {
    setFruit(e.target.value);
  };
  var handleCartAppend = (e) => {
    setFruitList([...fruitList, fruit]);
  };
  return (
    <div>
      <h1>userName: {userName}</h1>
      <h1>message: {message}</h1>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        onChange={handleNameChange}
        value={userName}
      />
      <input
        type="text"
        placeholder="메세지를 입력하세요"
        onChange={handleMessageChange}
        value={message}
      />
      <Button variant="secondary" onClick={handleClear}>
        지우기
      </Button>
      <p />
      <input onChange={handleFruitAdd} />
      <Button variant="warning" onClick={handleCartAppend}>
        장바구니추가
      </Button>
      <ul>
        {fruitList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
      <br />
      <br />
    </div>
  );
}

export default FunctionComponent2;
