import ArrowRight from "components/icon/ArrowRight";
import React from "react";

const Title = ({ titleLeft, titleRight, className }) => {
  return (
    <div
      className={`flex items-center justify-between my-10 md:mt-20 ${className}`}
    >
      <h2 className="text-[28px] font-medium">{titleLeft}</h2>
      <div className="flex items-center justify-center gap-x-2">
        <p className="text-md">{titleRight}</p>
        <ArrowRight></ArrowRight>
      </div>
    </div>
  );
};

export default Title;
