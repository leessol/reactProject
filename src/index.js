import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
import AppStart4 from "AppStart4";
import StateTestComponent from "component4/StateTestComponent";

import { CounterProvider } from "component4/CounterProvider";
import { CountLabel, NameChange, PlusButton } from "component4/ProviderTest";
import ReducerTestComponent from "component4/ReducerTestComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardHOME from "boardcomponents/BoardHOME";
import NotFoundCompoent from "boardcomponents/NotFoundCompoent";
//import WebBoardList from "components1/WebBoardList";
//import App3 from "./App3";

//import MyJSXTest from "components1/MyJSXTest";
//import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  //<AppStart4 />
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/board/*" element={<BoardHOME />} />
        <Route path="/state" element={<StateTestComponent />} />
        <Route path="/reduce" element={<ReducerTestComponent />} />
        <Route
          path="/provider"
          element={
            <CounterProvider>
              <CountLabel />
              <PlusButton />
              <NameChange />
            </CounterProvider>
          }
        ></Route>
        <Route path="*" element={<NotFoundCompoent />}></Route>
      </Routes>
    </BrowserRouter>
    {/* <StateTestComponent />
    <ReducerTestComponent />
    <CounterProvider>
      <CountLabel />
      <PlusButton />
      <NameChange />
    </CounterProvider> */}
  </>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
