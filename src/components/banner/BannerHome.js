import React from "react";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import { v4 } from "uuid";
import BannerHomeFirst from "./BannerHomeFirst";
import BannerHomeSecond from "./BannerHomeSecond";
import BannerHomeThird from "./BannerHomeThird";
import SwiperCore, { Autoplay } from "swiper";
import { EffectFade } from "swiper";

import ArrowRight from "components/icon/ArrowRight";
import styled from "styled-components";
import ArrowLeft from "components/icon/ArrowLeft";
const BannerHomeStyle = styled.div`
  .btn-next,
  .btn-prev {
    transition: all 0.2s linear;
    &:hover {
      opacity: 0.5;
    }
  }
`;
const BannerHome = () => {
  SwiperCore.use([Autoplay]);
  function SlideNextButton() {
    const swiper = useSwiper();
    return (
      <button
        className="absolute right-0 z-10 h-full px-1 -translate-y-1/2 opacity-0 top-1/2 btn-next bg-slate-100"
        onClick={() => swiper.slideNext()}
      >
        <ArrowRight width={40} height={40}></ArrowRight>
      </button>
    );
  }
  function SlidePrevButton() {
    const swiper = useSwiper();
    return (
      <button
        className="absolute left-0 z-10 h-full px-1 -translate-y-1/2 opacity-0 top-1/2 btn-prev bg-slate-100"
        onClick={() => swiper.slidePrev()}
      >
        <ArrowLeft width={40} height={40}></ArrowLeft>
      </button>
    );
  }
  const listBanner = [
    <BannerHomeFirst></BannerHomeFirst>,
    <BannerHomeSecond></BannerHomeSecond>,
    <BannerHomeThird></BannerHomeThird>,
  ];
  return (
    <BannerHomeStyle>
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        speed={500}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="container relative"
      >
        {listBanner.map((item) => {
          return <SwiperSlide key={v4()}>{item}</SwiperSlide>;
        })}
        <div className="absolute w-full h-full top-0 z-[100]">
          <SlidePrevButton></SlidePrevButton>
          <SlideNextButton></SlideNextButton>
        </div>
      </Swiper>
    </BannerHomeStyle>
  );
};

export default BannerHome;
