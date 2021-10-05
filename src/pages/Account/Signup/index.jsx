import React, { useState } from "react";
import styled from "styled-components";

import MainInput from "../../../components/Input/MainInput";
import MainButton from "../../../components/Button/MainButton";
import TopNavigation from "../../../layout/TopNavigation";

const MainWrapper = styled.div`
  display: block;
  margin: 20px;

  .wrapping {
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    .comp-text {
      font-size: 12px;
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }

`;

const Index = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [major, setMajor] = useState("");

  const [errorNum, setErrorNum] = useState(0);

  const onChangeId = (e) => {
    const patternEng = /[a-zA-Z]/;
    const patternNum = /[0-9]/;

    if(!(e.target.value > 6) || !(e.target.value < 21) || !patternEng.test(e.target.value) || !patternNum.test(e.target.value))
    { setErrorNum(2); } 
    else { setErrorNum(0); }
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    const patternSpecial = /[~!@#$%^&*()_+|<>?:{}]/;
    const patternEng = /[a-zA-Z]/;
    const patternNum = /[0-9]/;

    if (
      !patternSpecial.test(e.target.value) ||
      !patternEng.test(e.target.value) ||
      !patternNum.test(e.target.value)
    ) {
      setErrorNum(1);
    } else {
      setErrorNum(0);
    }

    setPassword(e.target.value);
  };

  const onChangeRePassword = (e) => {
    if(e.target === password){
      setErrorNum(0);
    }
    else {
      setErrorNum(3);
    }

    setRePassword(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    const patternEng = /[a-zA-Z]/;
    const patternNum = /[0-9]/;
    const at =/[@]/;
    const dot =/[.]/;
    if(!patternEng.test(e.target.value) ||
        !patternNum.test(e.target.value) ||
        !at.test(e.target.value) ||
        !dot.test(e.target.value)
    ) {
      setErrorNum(4);
    }
    else setErrorNum(0);
    
    setEmail(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangeMajor = (e) => {
    setMajor(e.target.value);
  };

  return (
    <MainWrapper>
      <div className="wrapping">
        <TopNavigation activePage="signup" />
        <div className="comp-text">아이디</div>
        <MainInput
          value={id}
          type="text"
          onChange={onChangeId}
          placeholder="아이디를 입력해주세요."
        />
        {errorNum === 2 && (<p style={{ color: "red" }}>아이디는 영어 대소문자, 숫자로 구성된 6~20자만 가능합니다.</p>)}
        <div className="comp-text">비밀번호</div>
        <MainInput
          value={password}
          type="password"
          onChange={onChangePassword}
          placeholder="비밀번호 입력해주세요"
        />
        {errorNum === 1 && (<p style={{ color: "red" }}>비밀번호 조건이 일치하지 않습니다.</p>)}
        <div className="comp-text">비밀번호 확인</div>
        <MainInput
          value={rePassword}
          type="password"
          onChange={onChangeRePassword}
          placeholder="비밀번호를 다시 입력해주세요."
        />
        {errorNum === 3 && (<p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>)}
        <div className="comp-text">이름</div>
        <MainInput
          value={name}
          type="text"
          onChange={onChangeName}
          placeholder="이름을 입력해주세요."
        />
        <div className="comp-text">이메일</div>
        <MainInput
          value={email}
          type="email"
          onChange={onChangeEmail}
          placeholder="이메일을 입력해주세요."
        />
        {errorNum === 4 && (<p style={{ color: "red" }}>이메일 주소를 다시 확인해주세요.</p>)}
        <div className="comp-text">닉네임</div>
        <MainInput
          value={nickname}
          type="text"
          onChange={onChangeNickname}
          placeholder="닉네임을 입력해주세요."
        />
        <div className="comp-text">전공</div>
        <MainInput
          value={major}
          type="text"
          onChange={onChangeMajor}
          placeholder="전공을 입력해주세요."
        />
        <MainButton text="회원가입" onClick={() => alert("회원가입")} />
      </div>
      
    </MainWrapper>
  );
};

export default Index;
