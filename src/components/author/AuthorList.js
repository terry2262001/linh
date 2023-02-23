import ArrowLeft from "components/icon/ArrowLeft";
import ArrowRight from "components/icon/ArrowRight";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { v4 } from "uuid";
import AuthorItem from "./AuthorItem";

const AuthorList = () => {
  const authorList = [
    <AuthorItem></AuthorItem>,
    <AuthorItem></AuthorItem>,
    <AuthorItem></AuthorItem>,
    <AuthorItem></AuthorItem>,
    <AuthorItem></AuthorItem>,
    <AuthorItem></AuthorItem>,
  ];
  function SlideNextButton() {
    const swiper = useSwiper();
    return (
      <button
        className="absolute right-0 z-10 h-full px-1 -translate-y-1/2 top-1/2 btn-next"
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
        className="absolute left-0 z-10 h-full px-1 -translate-y-1/2 top-1/2 btn-prev"
        onClick={() => swiper.slidePrev()}
      >
        <ArrowLeft width={40} height={40}></ArrowLeft>
      </button>
    );
  }
  return (
    <Swiper
      grabCursor={true}
      spaceBetween={0}
      pagination={{ clickable: true }}
      slidesPerView={5}
      loop={true}
      className="container relative"
    >
      {authorList.map((item) => {
        return <SwiperSlide key={v4()}>{item}</SwiperSlide>;
      })}
      <div className="absolute w-full h-full top-0 z-[100]">
        <SlidePrevButton></SlidePrevButton>
        <SlideNextButton></SlideNextButton>
      </div>
    </Swiper>
  );
};

export default AuthorList;
