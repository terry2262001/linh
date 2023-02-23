import LoadingSpinner from "components/loading/LoadingSpinner";
import React from "react";

const Button = ({
  className,
  type = "button",
  isLoading = false,
  children,
  bgColor = "primary",
  disabled = false,
  ...props
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary hover:bg-red-500";
      break;
    case "light-primary":
      bgClassName = "bg-red-400 hover:bg-red-500";
      break;
    default:
      break;
  }
  const child = isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  return (
    <button
      className={`${bgClassName} text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all ${className} whitespace-nowrap ${
        disabled && "opacity-80"
      }`}
      type={type}
      disabled={disabled}
      {...props}
    >
      {child}
    </button>
  );
};

export default Button;
