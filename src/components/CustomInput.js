import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, className } = props;
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`form-control ${className}`}
      />
    </div>
  );
};

export default CustomInput;
