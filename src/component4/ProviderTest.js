import React from "react";
import { useContext } from "react";
import { CounterContext } from "component4/CounterProvider";

const CountLabel = () => {
  const { count, username, mystyle } = useContext(CounterContext);
  return (
    <div style={mystyle}>
      <p>{count}</p>
      <p>이름은 {username}</p>
    </div>
  );
};
const PlusButton = () => {
  var { count, plusCount, minusCount, username, mystyle, setMystyle } =
    useContext(CounterContext);
  const handleBtnClick = () => {
    if (count % 2 === 0) setMystyle({ border: "3px solid blue" });
    else setMystyle({ border: "3px solid green" });
  };
  return (
    <div style={mystyle}>
      <p>이름은 {username}</p>
      <button style={mystyle} onClick={plusCount}>
        증가
      </button>
      <button style={mystyle} onClick={minusCount}>
        감소
      </button>
      <button style={mystyle} onClick={handleBtnClick}>
        스타일수정
      </button>
    </div>
  );
};
const NameChange = () => {
  const { username, setUsername, mystyle } = useContext(CounterContext);
  return (
    <div style={mystyle}>
      <p>이름은 {username}</p>
      <input onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
};
export { CountLabel, PlusButton, NameChange };
