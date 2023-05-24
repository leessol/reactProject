//webBoard 여러건 table로 보여주기 ... Component로 만들기
import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
function WebBoardList(props) {
  const arr = [
    { bno: ["240", "241", "242", "555"] },
    { title: ["title1", "title2", "title3", "555"] },
    { content: ["content1", "content2", "content3", "555"] },
    { writer: ["writer1", "writer2", "writer3", "555"] },
  ];
  //   console.log(arr[0].bno[0]);
  // const arrList = arr.map((item, index) => (
  //   <div>
  //     <tr>
  //       <td>{item.bno[index]}</td>
  //       <td>{item.title[index]}</td>
  //       <td>{item.content[index]}</td>
  //       <td>{item.writer[index]}</td>
  //     </tr>
  //   </div>
  // ));
  return (
    <>
      <table>
        <tr>
          <td>bno</td>
          <td>title</td>
          <td>content</td>
          <td>writer</td>
        </tr>
        {/* {arrList} */}
      </table>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );
}

export default WebBoardList;
