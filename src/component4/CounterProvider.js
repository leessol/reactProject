import React, { useState } from "react";
import { createContext } from "react";

const CounterContext = createContext();
const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [mystyle, setMystyle] = useState({
    border: "3px solid green",
    color: "black",
  });

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <CounterContext.Provider
        value={{
          count,
          plusCount,
          minusCount,
          username,
          setUsername,
          mystyle,
          setMystyle,
        }}
      >
        {props.children}
      </CounterContext.Provider>
    </div>
  );
};
export { CounterContext, CounterProvider };
