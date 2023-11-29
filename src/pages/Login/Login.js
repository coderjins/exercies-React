import React, { useState } from "react";
import "./Login.scss";
import Button from "../../components/Button/Button";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return email.match(emailRegex) != null;
  };

  const inputUserEmail = (event) => {
    setUserEmail(event.target.value);
    setIsEmailValid(validateEmail(event.target.value));
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };
  const isPasswordValid = password.length >= 10;

  const loginClick = () => {
    alert("로그인 시도");
  };

  return (
    <div className="Login">
      <div className="splash">
        <img className="logoImage" alt="main_logo" src="images/Logo.png" />
        <img
          className="logoWecode"
          alt="logo_wecode"
          src="images/LogoWecode.png"
        />
      </div>
      <div className="container">
        <input
          className="userInput"
          placeholder="이메일"
          onChange={inputUserEmail}
          value={userEmail}
        />
        <input
          className="userInput"
          placeholder="비밀번호"
          type="password"
          onChange={inputPassword}
          value={password}
        />
        <Button
          onClick={loginClick}
          title="로그인"
          disabled={!isEmailValid || !isPasswordValid}
        />
        <div className="signUpfindPw">
          <span className="signUp">회원가입</span>
          <span className="separator">|</span>
          <span className="findPw">비밀번호 찾기</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
