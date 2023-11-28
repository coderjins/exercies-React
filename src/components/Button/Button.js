import React from "react";
import "./Button.scss";

const Button = ({ title, onClick }) => {
  const buttonTitle = title ? title : "button";

  return (
    <button onClick={onClick} className="button">
      {buttonTitle}
    </button>
  );
};

export default Button;
