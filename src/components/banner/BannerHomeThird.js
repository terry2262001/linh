import LayoutBanner from "components/layout/LayoutBanner";
import React from "react";
import BannerHomeContent from "./BannerHomeContent";

const BannerHomeThird = () => {
  return (
    <LayoutBanner bgColor="bg-[#282828]">
      <img
        src={require("../images/img-banner3.jpg")}
        alt=""
        className="absolute w-[450px] h-[95%] bottom-0"
      />
      <img
        src={require("../images/best-seller.png")}
        alt=""
        className="absolute w-[7%] left-[29%] top-[16%] z-10"
      />
      <BannerHomeContent
        fontWhite
        title={"Your world of words"}
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          error tenetur sit excepturi fugiat quo vitae animi fugit."
        className="w-[50%] top-1/2 -translate-y-1/2 left-[40%]"
      ></BannerHomeContent>
    </LayoutBanner>
  );
};

export default BannerHomeThird;
