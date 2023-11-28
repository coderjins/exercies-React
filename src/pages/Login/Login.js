import React from "react";
import "./Login.scss";
import Button from "../../components/Button/Button";

const Login = () => {
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
        <input className="userInput" placeholder="이메일" />
        <input className="userInput" placeholder="비밀번호" type="password" />
        <Button title="로그인" />

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
