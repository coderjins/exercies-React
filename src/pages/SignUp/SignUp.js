import React, { useState } from "react";
import "./SignUp.scss";
import Button from "../../components/Button/Button";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const inputUserEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const inputConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const isEmailValid = userEmail.match(emailRegex) !== null;
  const isPasswordValid = password.length >= 10 && password === confirmPassword;

  const loginClick = () => {
    alert("회원가입 시도");
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="joinInfoRequire">
      <header className="header">
        <img
          className="goBackButton"
          alt="back_button"
          src="images/Back_arrow.png"
          onClick={goBack}
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
            <input
              className="email"
              placeholder="이메일"
              onChange={inputUserEmail}
              value={userEmail}
            />
            <input
              className="password"
              placeholder="비밀번호"
              type="password"
              onChange={inputPassword}
              value={password}
            />
            <input
              className="checkPassword"
              placeholder="비밀번호 확인"
              type="password"
              onChange={inputConfirmPassword}
              value={confirmPassword}
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
        <Button
          onClick={loginClick}
          disabled={!isEmailValid || !isPasswordValid}
        >
          회원 가입
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
