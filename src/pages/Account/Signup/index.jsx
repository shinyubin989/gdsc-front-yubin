import React, { useState } from "react";
import styled from "styled-components";

import MainInput from "../../../components/Input/MainInput";
import MainButton from "../../../components/Button/MainButton";
import TopNavigation from "../../../layout/TopNavigation";

import axios from "axios";

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



  const signin = async () => {
    const result = await axios({
      method: "POST",
      url: "/api/user",
      data: {
        userId: id,
        password: password,
        email: email,
        name: name,
        nickname: nickname,
        major: major,
      },
    });
    console.log(`join result: ${result.data}`);
    if (result.data.success) {
      window.location.href = "/login";
    } else {
      alert(result.data.message);
    }
  };

  const onClickSignin = () => {
    if (errorNum === 0 && name !== "" && email !== "" && nickname !== "" && major !== "") {
      signin();
    } else {
      alert("?????? ???????????????");
    }
  };


  return (
    <MainWrapper>
      <div className="wrapping">
        <TopNavigation activePage="signup" />
        <div className="comp-text">?????????</div>
        <MainInput
          value={id}
          type="text"
          onChange={onChangeId}
          placeholder="???????????? ??????????????????."
        />
        {errorNum === 2 && (<p style={{ color: "red" }}>???????????? ?????? ????????????, ????????? ????????? 6~20?????? ???????????????.</p>)}
        <div className="comp-text">????????????</div>
        <MainInput
          value={password}
          type="password"
          onChange={onChangePassword}
          placeholder="???????????? ??????????????????"
        />
        {errorNum === 1 && (<p style={{ color: "red" }}>???????????? ????????? ???????????? ????????????.</p>)}
        <div className="comp-text">???????????? ??????</div>
        <MainInput
          value={rePassword}
          type="password"
          onChange={onChangeRePassword}
          placeholder="??????????????? ?????? ??????????????????."
        />
        {errorNum === 3 && (<p style={{ color: "red" }}>??????????????? ???????????? ????????????.</p>)}
        <div className="comp-text">??????</div>
        <MainInput
          value={name}
          type="text"
          onChange={onChangeName}
          placeholder="????????? ??????????????????."
        />
        <div className="comp-text">?????????</div>
        <MainInput
          value={email}
          type="email"
          onChange={onChangeEmail}
          placeholder="???????????? ??????????????????."
        />
        {errorNum === 4 && (<p style={{ color: "red" }}>????????? ????????? ?????? ??????????????????.</p>)}
        <div className="comp-text">?????????</div>
        <MainInput
          value={nickname}
          type="text"
          onChange={onChangeNickname}
          placeholder="???????????? ??????????????????."
        />
        <div className="comp-text">??????</div>
        <MainInput
          value={major}
          type="text"
          onChange={onChangeMajor}
          placeholder="????????? ??????????????????."
        />
        <MainButton text="????????????" onClick={onClickSignin} />
      </div>
      
    </MainWrapper>
  );
};

export default Index;
