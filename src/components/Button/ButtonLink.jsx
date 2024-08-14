import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ className, text, handleOnClick, type, path }) => {
  return (
    <Link to={path}>
      <button type={type} onClick={handleOnClick} className={className}>
        <p className="text-sm">{text}</p>
      </button>
    </Link>
  );
};

export default ButtonLink;
