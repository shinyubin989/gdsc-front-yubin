import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "react-modal";


import MainButton from "../../../components/Button/MainButton";
import MainInput from "../../../components/Input/MainInput"

import logo from "../../../assets/logo/logo.png";
import axios from "axios";

const MainWrapper = styled.div`
  .logo-image {
    text-align: center;
    padding-top: 50px;
  }

  .grey-text {
    padding-top: 20px;
    color: rgb(114,120,127);
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }
  .everytime-text {
    color: rgb(198, 41, 23);
    font-weight: 700;
    margin-top: 8px;
    margin-bottom: 32px;
    font-size: 18px;
    text-align: center;
  }

  .input-wrapper {
    margin: 8px 12px 0px 12px;
  }

  .button-wrapper {
    margin: 16px 12px 0px 12px;
    text-align: center;
  }

  .signup-button-wrapper {
    margin: 16px 12px 0px 12px;
    width: 100%;
    height: 32px;
    background-color: rgb(255, 255, 255);
    font-size: 14px;
    text-align: center;
  }
  .signup-text {
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-top: 16px;
  }
`;


const Index = () => {
  const [isFocus, setIsFocus] = useState(false);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errorText, setErrorText] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  }
  const onChangePw = (e) => {
    setPw(e.target.value);
  }
  const handleFocus = () => {
    if (isFocus) {
      setIsFocus(false);
    } else {
      setIsFocus(true);
    }
  }
  const onClickLogin = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "/api/user/login",
        data: {
          user_id: id,
          password: pw,
        },
      });
      if(result.data.success){
        window.location.href = "/";
      } else{
        setIsOpen(true);
        setErrorText(result.data.message);
        alert("????????? ?????? ??????????????? ????????????.");
      }
    } catch{
      alert("server error");
    }
  };
  return (
    <MainWrapper>
      <div className="logo-image">
        <img src={logo} alt="??????????????? ??????" />
      </div>
      <p className="grey-text">?????? ????????? ??? ????????? ?????????</p>
      <p className="everytime-text">???????????????</p>
      <div className="input-wrapper">
        <MainInput 
          type="id" 
          value={id} 
          onChange={onChangeId} 
          placeholder="?????????" 
          handleFocus={handleFocus} 
        />
      </div>
      <div className="input-wrapper">
        <MainInput 
          handleFocus={handleFocus} 
          type="password"
          value={pw}
          onChange={onChangePw}
          placeholder="????????????"
        />
      </div>
      <div className="button-wrapper">
        <MainButton text="??????????????? ?????????" onClick={onClickLogin} />
      </div>
      {!isFocus && (<div className="signup-button-wrapper">
        <Link to="/signup">????????????</Link>
      </div>)}

    </MainWrapper>

    
  );
};

export default Index;
