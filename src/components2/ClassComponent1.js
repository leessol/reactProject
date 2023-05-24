import React, { Component } from "react";
class ClassCom1 extends Component {
  constructor(props) {
    super(props);
    //contructor 정의는 필수가 아님
    //contructor 정의시 반드시 부모 생성자 호출이 필요하다.
    console.log("ClassComp1 constructor");
  }
  render() {
    return (
      <div>
        <h1>ClassComponent1</h1>
        <>
          <p style={{ backgroundColor: this.props.bkcolor }}>
            title : {this.props.title}
          </p>
          <p>content : {this.props.content}</p>
          <p>price : {this.props.price}</p>
          <p>children : {this.props.children}</p>
          <ul>
            {this.props.subject &&
              this.props.subject.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </>
      </div>
    );
  }
}
class ClassCom2 extends Component {
  //default 값을 호출할 때 사용할 수 있다. 가독성에 좋음,
  static defaultProps = {
    title: "title값없음",
    content: "content값없음ㅇㅇㅇ",
    price: 777,
  };
  render() {
    const { title, content, children, price, subject, bkcolor } = this.props;
    return (
      <div>
        <h1>ClassComponent2</h1>
        <>
          <p style={{ backgroundColor: bkcolor }}>title : {title}</p>
          <p>content : {content}</p>
          <p>price : {price}</p>
          <p>children : {children}</p>
          <ul>
            {subject &&
              subject.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </>
      </div>
    );
  }
}
export { ClassCom1, ClassCom2 };
