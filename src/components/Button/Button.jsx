import React from "react";

const Button = ({ className, text, handleOnClick, type }) => {
  return (
    <button type={type} onClick={handleOnClick} className={className}>
      <p className="text-sm">{text}</p>
    </button>
  );
};

export default Button;
