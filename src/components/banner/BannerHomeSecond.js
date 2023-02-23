import LayoutBanner from "components/layout/LayoutBanner";
import BannerHomeContent from "./BannerHomeContent";

const BannerHomeSecond = () => {
  return (
    <LayoutBanner>
      <img
        src={require("../images/img-banner2.jpg")}
        alt=""
        className="absolute w-full h-full"
      />
      <img
        src={require("../images/best-seller.png")}
        alt=""
        className="absolute w-[7%] left-[15%] top-[15%] z-10"
      />
      <BannerHomeContent
        title={"Your world of words"}
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          error tenetur sit excepturi fugiat quo vitae animi fugit."
        className="w-[50%] text-center top-1/2 -translate-y-1/2 -translate-x-1/2 left-[50%]"
      ></BannerHomeContent>
    </LayoutBanner>
  );
};

export default BannerHomeSecond;
