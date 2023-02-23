import React from "react";

const Label = ({ name, className, children, ...props }) => {
  return (
    <label
      className={`block text-gray-700 text-sm font-medium tracking-wide ${className}`}
      htmlFor={name}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
