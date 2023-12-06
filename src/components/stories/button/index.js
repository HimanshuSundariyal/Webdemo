import React from "react";
import "./button.css";

const Button = ({ buttonText, handelClick, buttonType, link, children }) => {
  const handelButtonClick = (e) => {
    if (link) {
      window.location.href = "/itemdetails";
    } else {
      handelClick(e);
    }
  };

  return (
    <button
      className={`btn btn-${buttonType} btn-block fa-lg custom_buttom mb-3`}
      onClick={(e)=>handelButtonClick(e)}
    >
      {children ? children :buttonText}
    </button>
  );
};

export default Button;
