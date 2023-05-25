import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//<>형태로 가져다 쓸 수 있음. return의 내용이 사용한 쪽으로 들어감.
function StateTest(props) {
  //값이 바뀌면 자동으로 ui가 자동으로 바뀌어야 한다.
  //변경되면 자동으로 UI가 rendering이 된다.
  var a = 100;
  var b = 200;

  const [count, setCount] = useState(0); //count = 0, 값변경은 setCount()이용
  const [myName, setMyName] = useState("홍길동");
  const [myAge, seMytAge] = useState(20);

  //1. 특정 DOM 선택을 위해 사용
  const nameRef = useRef();
  const ageRef = useRef();

  //===============================================================================================
  //성능향상을 위해 함수를 rendering시 마다 재정의할 필요는 없다.
  //특정값이 변경시에만 다시 생성한다.
  //## 성능향상 2 - 함수정의 부는 계속 렌더링 될때마다 다시 정의함. 그게 비효율적
  //성능향상을 위해 함수를 rendering 시마다 재정의하는 것을 막는다.

  //useEffect(() => {
  //  console.log("handleIncrement가 변경되었습니다"); //다른일을 하는데도 계속 rendering할때마다 호출된다.
  //}, [handleIncrement]);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  //===============================================================================================

  const handleChange = (e) => {
    if (e.target.name == "mname") {
      setMyName(e.target.value);
    } else if (e.target.name == "age") {
      seMytAge(e.target.value);
    }
  };

  const handleNameMove = () => {
    nameRef.current.focus();
  };
  const handleAgeMove = () => {
    ageRef.current.focus();
  };

  //-----------------------------------------------------------------------------------------------------------
  //React hooks - useRef();
  var userid1 = 3; //렌더링될때마다 값 3으로 다시 초과(아무리 변경시켜도 렌더링하면 다시 3이됨)...rendering 시 초기화.
  var userid2 = useRef(3); //렌더링될때 다시 값이 초기화 되는것이 아니다...rendering 시 초기화하지 않음.
  const handleUserIdIncrement = () => {
    userid1 += 1;
    userid2.current += 1;
    console.log("userid1 = " + userid1 + ", userid2 = " + userid2.current);
  };
  //=============================================================================================================

  const initMember = [
    { mid: 1, mname: "홍길동1", email: "aa@gmail.com", active: true },
    { mid: 2, mname: "홍길동2", email: "bb@gmail.com", active: true },
  ];
  const [member, setMember] = useState({});
  const [memberList, setMemberList] = useState(initMember);
  const nextMid = useRef(3);
  // 이름 변경 시, 이메일 변경 시
  const handleChange2 = (e) => {
    var memberValue =
      e.target.name === "active" ? e.target.checked : e.target.value;
    setMember({ ...member, [e.target.name]: memberValue });
  };
  const handleAdd = (e) => {
    //setMember({ ...member, mid: nextMid.current }); //setter는 비동기 동작
    var tempMember = { ...member, mid: nextMid.current }; //동기로 만들어준다. 먼저 작동시킴.
    setMemberList([...memberList, tempMember]);
    nextMid.current += 1;
  };

  //================================================================================================
  //useMemo: 연산된 값을 저장해서 재사용, 오래걸리는 작업을 매번하지 말자
  //사실 count가 바뀔때마다 이 함수에 들어와야 하는데, 그냥 랜더링 될때마다 바뀐다. 아까 그 변수 useRef()랑 비슷한 개념
  //오래걸리는 작업
  const longTimeFunction = (su) => {
    console.log(su + "받아서 계산중.......");
    for (let i = 1; i <= 10000000000; i++) {
      su += i;
    }
    return su;
  };
  //count가 변경되지 않는다면 계산 결과는 같기 때문에 재계산이 불필요,
  //var calc = longTimeFunction(count);
  //계산된 결과 기억하기 //의존배열[] 에 등록된 변수가 변경시에만 재계산한다.
  var calc = useMemo(() => longTimeFunction(count), [count]);
  //===============================================================================================
  //## 성능향상 2 - 함수정의 부는 계속 렌더링 될때마다 다시 정의함. 그게 비효율적
  //성능향상을 위해 함수를 rendering 시마다 재정의하는 것을 막는다.
  //useEffect(() => {
  //  console.log("handleIncrement가 변경되었습니다"); //다른일을 하는데도 계속 rendering할때마다 호출된다.
  //}, [handleIncrement]);

  //===============================================================================================
  //life cycle: component가 생성될 때, 딱 한번만 해야하는 것이 있다.
  // [] 의존배열

  useEffect(() => {
    console.log("1. StateTest 컴포넌트가 load시 1회 발생...");
    // 예를들면, 직원 호출하는 함수면
  }, []);

  useEffect(() => {
    console.log("2. StateTest 컴포넌트가 load시 1회 발생...");
    // 상황이 변경될때마다 계속 되어야 하면,, [] 의존배열을 빼면된다.
  });

  useEffect(() => {
    console.log("3. StateTest 컴포넌트가 load시 (mount) 발생 ");
    // count가 바뀔때만 수행된다. []의존함수에 변수를 넣으면
  }, [count]);

  useEffect(() => {
    console.log(
      "4. StateTest 컴포넌트가 load시 (mount) 발생, count, myName 변경시  "
    );
    // count가 바뀔때만 수행된다. []의존함수에 변수를 넣으면
  }, [count, myName]);

  //JSX(JavaScript XML): react가 가지고 있는 문법이다, 바벨에 의해서 컴파일이 된다. (JS->JS)
  //원래는 output = "<div></div>", render(output) 이렇게 했었는데, 자동으로 js로 만들어줌,
  //Root 태그가 1개 여야 한다. / 계층구조를 지켜야 한다. / 반드시 닫는 tag가 있어야 한다.
  // 리턴값이 렌더링 되는 것이다.
  return (
    <div>
      <p>
        {a}---{b} count 현재값: {count}
        <span>myName: {myName}</span>
        <span>myAge: {myAge}</span>
      </p>
      <Button
        onClick={function () {
          a = a + 1;
        }}
      >
        a 값 증가
      </Button>
      <Button
        onClick={() => {
          b = b + 1;
        }}
      >
        b 값 증가
      </Button>
      <Button onClick={handleIncrement}>count 증가</Button>
      <Button onClick={handleDecrement}>count 감소</Button>
      이름:{" "}
      <input
        ref={nameRef}
        onChange={handleChange}
        value={myName}
        name="mname"
      />
      나이:{" "}
      <input ref={ageRef} onChange={handleChange} value={myAge} name="age" />
      <Button onClick={handleNameMove}>이름으로 이동</Button>
      <Button onClick={handleAgeMove}>나이로 이동</Button>
      <Button onClick={handleUserIdIncrement}>번호 증가</Button>
      <hr />
      이름: <input name="mname" onChange={handleChange2} />
      이메일: <input name="email" onChange={handleChange2} />
      active: <input type="checkbox" name="active" onChange={handleChange2} />
      <Button onClick={handleAdd}>멤버 추가 </Button>
      <table className="">
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>이메일</th>
            <th>active</th>
          </tr>
        </thead>
        <tbody>
          {/* {}:를 적으면 return을 적어야 하고, ()를 적으면 안에 값이 리턴이 들어있다.   */}
          {memberList.map((item, index) => (
            <tr key={index}>
              <td>{item.mid}</td>
              <td>{item.mname}</td>
              <td>{item.email}</td>
              <td>{item.active ? "true" : "false"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StateTest;
