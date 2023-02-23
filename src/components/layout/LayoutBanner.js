import React from "react";

const LayoutBanner = ({ children, bgColor = "bg-secondary" }) => {
  return (
    <div className={`relative w-full h-[493px] container ${bgColor}`}>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export default LayoutBanner;
