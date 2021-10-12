import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../components/Colors";
import xImg from "../../assets/vector/xVector.svg";
import checked from "../../assets/vector/checked.svg";
import cameraIcon from "../../assets/icon/camera.svg";

const BoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  max-width: 500px;
  margin: 0 auto;
  .top-navi{
    justify-content: space-between;
    height: 48px;
    margin: 16px 16px 16px 16px;
    .navi-left{
      display: flex;
      img {
        width: 20px;
        height: 20px;
      }
      .posting-text {
        padding-left: 16px;
        font-size: 15x;
        font-weight: 500;
      } 
    }
    .navi-right{
      button{
        line-height: 12px;
        text-align: center;
        height: 25px;
        width: 50px;
        color: rgb(255,255,255);
        background-color: ${COLORS.red};
        border-radius: 20px;
        font-size: 13px;
      }
    }
  }


  .writing-space{
    width: calc(100% - 32px);
    margin: 16px;
    height: auto;
    overflow-x: hidden;
    min-height: 150px;
    max-height: 1000px;
    line-height: 1.25;
  }

  .bottom-sub-navigation {
    width: 100%;
    max-width: 500px;
    bottom: 0px;
    height: 30px;
    position: fixed;
    justify-content: space-between;
    .user-option-wrapper {
      margin-right: 16px;
    }
  }
  input[type="checkbox"] {
    display: inline-block;
    position: relative;
    width: 10px;
    height: 10px;
    background: url(${checked});
    background-size: contain;
  }
  input[type="checkbox"]:checked {
    width: 10px;
    height: 10px;
    background: url(${checked});
    background-size: contain;
  }
  .secret-label {
    font-size: 12px;
    line-height: 12px;
    margin-left: 2px;
    color: ${(props) => (props.isSecret ? COLORS.red : COLORS.grey_500)};
  }
`;

const Index = () => {
  const [isSecret, setIsSecret] = useState(false);

  const onChangeSecret = (e) => {
    if (e.target.checked) {
      setIsSecret(true);
    } else {
      setIsSecret(false);
    }
  };
  

  return(
    <BoardWrapper isSecret={isSecret}>
    <div className="top-navi arrange-center">
      <div className="navi-left">
        <Link to="/board">
          <img src={xImg} alt="close" />
        </Link>
        <div className="posting-text">
          글쓰기
        </div>
      </div>
      <div className="navi-right">
        <button className="upload-button">완료</button>
      </div>
    </div>

    <textarea className="writing-space" placeholder="내용을 입력하세요"></textarea>


    <div className="bottom-sub-navigation arrange-center">
      <p>ddd</p>
        <div className="user-option-wrapper">
          <input
            type="checkbox"
            id="isSecret"
            checked={isSecret}
            onChange={onChangeSecret}
            className="secret-input"
          />
          <label htmlFor="isSecret" className="secret-label">
            익명
          </label>
        </div>
      </div>
    </BoardWrapper>
  );
};

export default Index;