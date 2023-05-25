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

const initMember2 = {
  input: { membername: "", email: "", active: false },
  memberList: initMember,
};

//state: reducer가 관리하는 data
function reducer2(state, action) {
  switch (action.type1) {
    case "CHANGE_INPUT": //값이 입력되는 경우 onchange에서 호출
      return {
        ...state,
        input: {
          ...state.input,
          [action.name2]:
            action.name2 === "active" ? action.checked2 : action.value2,
        },
      };
    case "CREATE_MEMBER": //멤버 추가 시 호출 [...memberList, action.member]
      return {
        input: initMember2.input,
        memberList: state.memberList.concat(action.member),
      };
    case "TOGGLE_MEMBER": //Active를 변경할 때,
      return {
        ...state,
        memberList: state.memberList.map((mem) =>
          mem.memberid === action.memberid
            ? { ...mem, active: !mem.active }
            : mem
        ),
      };
    case "REMOVE_MEMBER":
      return {
        ...state,
        memberList: state.memberList.filter(
          (mem) => mem.memberid !== action.memberid
        ),
      };
    default:
      return state;
  }
}

function ReducerTestComponent(props) {
  const [count, setCount] = useState(0); //훅을 사용-> useState --> 초기화 시키는 담당
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]); //setter를 이용해야한다. 안그러면 값을 리액트가 변동시킬 수 없음.
  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]); //setter를 이용해야한다. 안그러면 값을 리액트가 변동시킬 수 없음.

  //member, memberList
  //const [member, setMember] = useState({}); //object를 위한 것

  //Reducer이용 상태관ㄹ!!!!!!!!!!!!!!!!!!!!!!
  //상태관리 메서드: reducer2
  //상태관리 대상: state
  //상태관리 메서드 호출: dispatcher2
  //상태관리 대상의 초기값: initMember2
  const [state, dispatcher2] = useReducer(reducer2, initMember2);
  const { memberList } = state; //배열(추출: 이렇게 안하면 state.memberList로 함. ) state모양: {input:{membername:"",email:""}, memberList:[]} (구조적 문법)
  const { membername, email, active } = state.input; //문자값 -> 원래는 state.input.membername이렇게 써야 함.

  //DOM 접근을 위해 추가...nameRef.current.focus(), nameRef.current.value=""
  const nameRef = useRef();
  const emailRef = useRef();

  //등록, 수정, 삭제, 목록보기
  const nextMemberId = useRef(4);
  //...member: 다른속성이 추가될때 기존 속성은 유지
  //input의 type이 text이면, name, value만 있음
  //input의 type이 checkbox이면, name, value, checked
  const handleChange = (event) => {
    const { name, checked, value } = event.target;
    console.log(name, checked, value);
    dispatcher2({
      type1: "CHANGE_INPUT",
      name2: name,
      checked2: checked,
      value2: value,
    });

    // setMember({
    //   ...member,
    //   [name]: name === "active" ? checked : value,
    // });
    // setMember({ membername: "", email: "", active: true });
  };

  const handleMemberAdd = () => {
    console.log("ss");
    //setMember({...member,memberid:nextMemberId.current}); //setter는 비동기
    //Wconst newMember = { ...member, memberid: nextMemberId.current }; //동기화 시켜준다 .
    if (membername === "" || email === "") return;
    var newMember = {
      memberid: nextMemberId.current,
      membername: membername,
      email: email,
      active: active,
    };
    dispatcher2({
      type1: "CREATE_MEMBER",
      member: newMember,
    });
    //setMemberList([...memberList, newMember]);
    nextMemberId.current += 1;
    emailRef.current.value = ""; //이메일이 가리키고 있는 지운다.
  };

  //member의 active를 변경하기
  const handleToggle = (mid) => {
    dispatcher2({ type1: "TOGGLE_MEMBER", memberid: mid });
  };

  //member 지우기...memberList에서 mid가 같지 않은 것만 남긴다.
  const handleDelete = (mid) => {
    //setMemberList(memberList.filter((mem) => mem.memberid !== mid));
    dispatcher2({ type1: "REMOVE_MEMBER", memberid: mid });
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
        membername={membername}
        email={email}
        active={active}
        nameRef={nameRef}
        emailRef={emailRef}
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

function CreateMember({
  handleChange,
  handleMemberAdd,
  membername,
  email,
  active,
  nameRef,
  emailRef,
}) {
  return (
    <div>
      {/* 등록 form */}
      <h2>멤버 등록</h2>
      이름:{" "}
      <input name="membername" onChange={handleChange} value={membername} />
      이메일: <input name="email" onChange={handleChange} ref={emailRef} />
      active:{" "}
      <input
        type="checkbox"
        name="active"
        onChange={handleChange}
        checked={active}
      />
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
