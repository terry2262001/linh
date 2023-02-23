import React from "react";
import { useController } from "react-hook-form";

const Input = ({
  type = "text",
  name,
  control,
  placeholder,
  className,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <input
      className={`shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      type={type}
      placeholder={placeholder}
      {...props}
      {...field}
    />
  );
};

export default Input;
