import Button from "components/button/Button";
import React from "react";

const BannerHomeContent = ({ title, desc, fontWhite, className }) => {
  return (
    <div className={`absolute ${className}`}>
      <p className="tracking-[0.2rem] uppercase text-lightGray">
        It's chapterone
      </p>
      <h2
        className={`font-cormorant text-[40px] md:text-[60px] font-medium tracking-wide ${
          fontWhite && "text-white"
        }`}
      >
        {title}
      </h2>
      <p className={`mb-20 text-lg ${fontWhite && "text-white"}`}>{desc}</p>
      <Button className={"uppercase !py-3 !px-8"}>read more</Button>
    </div>
  );
};

export default BannerHomeContent;
