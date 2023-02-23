import Button from "components/button/Button";
import LayoutBanner from "components/layout/LayoutBanner";
import React from "react";
import BannerHomeContent from "./BannerHomeContent";
const BannerHomeFirst = () => {
  return (
    <LayoutBanner>
      <img
        src={require("../images/img-banner1.png")}
        alt=""
        className="absolute object-cover w-full h-full max-w-full top-3"
      />
      <img
        src={require("../images/best-seller.png")}
        alt=""
        className="absolute w-[7%] right-[7%] top-[7%] z-10"
      />
      <img
        src={require("../images/eiffel.png")}
        alt=""
        className="absolute w-[20%] h-[43%] top-1/4 left-[52%]"
      />
      <img
        src={require("../images/couple.png")}
        alt=""
        className="absolute w-[79px] h-[159px] top-1/2 right-[2%]"
      />
      <BannerHomeContent
        title={"We love literature"}
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          error tenetur sit excepturi fugiat quo vitae animi fugit."
        className={"w-[50%] top-1/2 -translate-y-1/2 left-[5%]"}
      ></BannerHomeContent>
    </LayoutBanner>
  );
};

export default BannerHomeFirst;
