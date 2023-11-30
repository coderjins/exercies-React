import React from "react";
import "./Button.scss";

const Button = ({ onClick, disabled, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
