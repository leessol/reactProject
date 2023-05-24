import React, { useState } from "react";

function MemberComponent(props) {
  const [member, setMember] = useState({ name: "홍길동", age: 20 });
  const handleNameChange = (e) => {
    setMember({ ...member, name: e.target.value }); // ...member 하면 기존에 있던 age는 유지되고 name만 새롭게 바뀌는 것이다.
    // 받은 이름 입력값 세팅
  };
  const handleAgeChange = (e) => {
    setMember({ age: e.target.value });
    // 받은 나이 입력값 세팅
  };
  //둘다 동시에 먹히는 함수 --> name속성을 준다.
  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  var obj = {};
  obj.aa = "값";
  obj["bb"] = "값";
  console.log(obj);
  return (
    <div>
      <h1>
        이름은 {member.name} 나이는 {member.age}
      </h1>
      이름 : <input type="text" onChange={handleNameChange} />
      나이 : <input type="number" onChange={handleAgeChange} />
      이름2 : <input type="text" onChange={handleChange} name="name" />
      나이2 : <input type="number" onChange={handleChange} name="age" />
    </div>
  );
}

export default MemberComponent;
