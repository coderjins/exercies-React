import React from "react";
import "./SignUp.scss";
import Button from "../../components/Button/Button";

const SignUp = () => {
  const goBack = () => {
    window.history.back(); // 브라우저의 이전 페이지로 이동
  };

  return (
    <div className="joinInfoRequire">
      <header className="header">
        <img
          className="goBackButton"
          alt="back_button"
          src="images/Back_arrow.png"
          onClick={goBack} // 이벤트 핸들러 추가
        />
        <span className="goBack" onClick={goBack}>
          뒤로
        </span>
      </header>
      <div className="container">
        <span className="pageTitle">회원가입</span>
        <div className="info">
          <label className="infoLabel">
            <span className="basicInfoText">기본 정보</span>
            <span className="essentialRequire">필수 사항</span>
          </label>

          <div className="list">
            <input className="email" placeholder="이메일" />
            <input
              className="password"
              placeholder="비밀번호"
              type="password"
            />
            <input
              className="checkPassword"
              placeholder="비밀번호 확인"
              type="password"
            />
          </div>
        </div>
        <div className="nick">
          <label className="nickLabel">
            <span className="nickname">닉네임</span>
            <span className="chooseOption">선택 사항</span>
          </label>
          <input className="inputNickname" placeholder="닉네임" />
        </div>
      </div>

      <div className="action">
        <Button title="회원 가입" />
      </div>
    </div>
  );
};

export default SignUp;
