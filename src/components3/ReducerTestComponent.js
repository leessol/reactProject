//1. 버튼 클릭시 숫자가 증가, 감소하기 (리엑트가 변수의 값의 상태를 관리, UI 그리기)
import React, { useCallback, useReducer, useRef, useState } from "react";
import { Button } from "react-bootstrap";

const initMember = [
  {
    memberid: 1,
    membername: "홍길동1",
    email: "hongGD1@gmail.com",
    active: true,
  },
  {
    memberid: 2,
    membername: "홍길동2",
    email: "hongGD2@gmail.com",
    active: true,
  },
  {
    memberid: 3,
    membername: "홍길동3",
    email: "hongGD3@gmail.com",
    active: false,
  },
];

//useState: component내에서 상태관리
//usereducer는 component 외부에서 상태관리 (count 상태관리)
function reducer1(state, action) {
  switch (action.type1) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
//관리하는 data: member, memberList
const StateMember = {
  member: { membername: "", email: "" },
  memberList: initMember,
};
function reducer2(state, action) {
  switch (action.type2) {
    case "MEMBER_ADD":
      return {
        member: state.member,
        memberList: [...state.memberList, state.member],
      };
    case "MEMBER_DELETE":
      return state - 1;
    case "MEMBER_UPDATE":
      return state + 1;
    case "MEMBER_LIST":
      return state - 1;
    default:
      return state;
  }
}
function ReducerTestComponent(props) {
  const [count, dispatcher1] = useReducer(reducer1, 0);

  const handleIncrement = () => {
    dispatcher1({ type1: "INCREMENT" });
  }; //setter를 이용해야한다. 안그러면 값을 리액트가 변동시킬 수 없음.
  const handleDecrement = () => {
    dispatcher1({ type1: "DECREMENT" });
  }; //setter를 이용해야한다. 안그러면 값을 리액트가 변동시킬 수 없음.

  //member, memberList
  const [member, setMember] = useState({}); //object를 위한 것
  const [memberList, setMemberList] = useState(initMember); //배열를 위한 것
  const [state, dispatcher2] = useReducer(reducer2, StateMember); //위의 두개 합쳐서 관리하고 싶다.

  //등록, 수정, 삭제, 목록보기
  const nextMemberId = useRef(4);
  //...member: 다른속성이 추가될때 기존 속성은 유지
  const handleChange = (event) => {
    const { name, checked, value } = event.target;
    setMember({
      ...member,
      [name]: name === "active" ? checked : value,
    });
    // setMember({ membername: "", email: "", active: true });
  };
  const handleMemberAdd = () => {
    //setMember({...member,memberid:nextMemberId.current}); //setter는 비동기
    const newMember = {
      memberid: nextMemberId.current,
      membername: "",
      email: "",
    }; //동기화 시켜준다 .
    dispatcher2({ type1: "MEMBER_ADD", member: newMember });
    nextMemberId.current += 1;
  };
  //member의 active를 변경하기
  const handleToggle = useCallback(
    (mid) => {
      setMemberList(
        memberList.map((mem) =>
          mem.memberid === mid ? { ...mem, active: !mem.active } : mem
        )
      );
    },
    [memberList]
  );
  //member 지우기...memberList에서 mid가 같지 않은 것만 남긴다.
  const handleDelete = (mid) => {
    setMemberList(memberList.filter((mem) => mem.memberid !== mid));
  };

  return (
    <div>
      <MyCounter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <CreateMember
        handleChange={handleChange}
        handleMemberAdd={handleMemberAdd}
      />
      <MemberList
        memberList={memberList}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  );
}

function MyCounter({ count, handleIncrement, handleDecrement }) {
  return (
    <>
      <p>현재 count의 값: {count}</p>
      <Button variant="secondary" onClick={handleIncrement}>
        증가
      </Button>
      <Button variant="secondary" onClick={handleDecrement}>
        감소
      </Button>
    </>
  );
}

function CreateMember({ handleChange, handleMemberAdd }) {
  return (
    <div>
      {/* 등록 form */}
      <h2>멤버 등록</h2>
      이름: <input name="membername" onChange={handleChange} />
      이메일: <input name="email" onChange={handleChange} />
      active: <input type="checkbox" name="active" onChange={handleChange} />
      <Button variant="success" onClick={handleMemberAdd}>
        멤버 추가{" "}
      </Button>
    </div>
  );
}

//이번엔 화살표 함수
const MemberList = ({ memberList, handleDelete, handleToggle }) => {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>이메일</th>
            <th>active</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* {}:를 적으면 return을 적어야 하고, ()를 적으면 안에 값이 리턴이 들어있다.   */}
          {memberList.map((item, index) => (
            <tr key={index}>
              <td>{item.memberid}</td>
              <td>{item.membername}</td>
              <td>{item.email}</td>
              <td>{item.active ? "true" : "false"}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(item.memberid)}
                >
                  삭제
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleToggle(item.memberid)}
                >
                  toggle
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ReducerTestComponent;
