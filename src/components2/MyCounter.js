import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class MyCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0, message: "class 컴포넌트 이용 counter 임" }; //각 변수를 관리하기 위해 this.state에 저장한다.
  }

  handleClick = (event) => {
    var btnContent = event.target.innerHTML;
    if (btnContent == "증가") {
      //setState로 변수 값 변경한다.
      this.setState({ count: this.state.count + 1, message: btnContent }); //상태값 변경; 직접 변경 절대 불가. this.state로 변경 불가
    } else {
      this.setState({ count: this.state.count - 1, message: btnContent });
    }
  };
  render() {
    return (
      <div>
        {/* 만약 button안의 값들을 동적으로 바꾸고 싶다면 */}
        <h1>count: {this.state.count} </h1>{" "}
        <h2>message: {this.state.message}</h2>
        {/* 이벤트(onClick)과 이벤트 핸들러를 연결 시킨다.  */}
        <Button varient="success" onClick={this.handleClick}>
          증가
        </Button>
        <Button varient="success" onClick={this.handleClick}>
          감소
        </Button>
        <Button
          varient="success"
          onClick={(e) => {
            this.setState({
              count: this.state.count + 1,
              message: e.target.innerHTML,
            });
          }}
        >
          증가
        </Button>
        <Button
          varient="success"
          onClick={(e) => {
            this.setState({
              count: this.state.count - 1,
              message: e.target.innerHTML,
            });
          }}
        >
          감소
        </Button>
      </div>
    );
  }
}

export default MyCounter;
