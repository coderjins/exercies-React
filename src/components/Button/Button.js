import React from "react";
import "./Button.scss";

const Button = ({ title, onClick, disabled }) => {
  const buttonTitle = title ? title : "button";
  const buttonState = `button ${disabled ? "disabled" : ""}`;

  return (
    <button onClick={onClick} className={buttonState} disabled={disabled}>
      {buttonTitle}
    </button>
  );
};

export default Button;
