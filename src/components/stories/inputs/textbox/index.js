import React from "react";

const TextBox = ({type, label, placeholder,handelInputChange }) => {
  return (
    <>
      <label className="form-label" htmlFor={label}>
        {label}
      </label>
      <input
        type={type ? type : 'text'}
        id={label}
        className="form-control"
        placeholder={placeholder}
        onChange={(e)=>{handelInputChange(label,e.target.value)}}
      />
    </>
  );
};

export default TextBox;
