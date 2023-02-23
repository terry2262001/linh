import React from "react";
import BannerHome from "components/banner/BannerHome";
import CategoryList from "components/categories/CategoryList";
import BookList from "components/book/BookList";
import SectionHome from "components/section/SectionHome";
import DealList from "components/book/DealList";
import BookItem from "components/book/BookItem";
import BannerRelease from "components/banner/BannerRelease";
import AuthorList from "components/author/AuthorList";
const HomePage = () => {
  return (
    <>
      <div className="my-10">
        <BannerHome></BannerHome>
      </div>
      <SectionHome
        className="container"
        titleLeft="Featured Categories"
        titleRight="All Categories"
      >
        <CategoryList></CategoryList>
      </SectionHome>
      <SectionHome
        className="container"
        titleLeft="Bestselling Books"
        titleRight="View All"
      >
        <BookList></BookList>
      </SectionHome>
      <SectionHome
        className="relative h-[80vh]"
        classNameTitle={"absolute z-10 !mb-0 !mt-5 container"}
        titleLeft="Deals of the Week"
        titleRight="View all"
      >
        <div className="absolute z-0 w-full h-full bg-secondary"></div>
        <DealList></DealList>
      </SectionHome>
      <SectionHome
        className="container relative"
        titleLeft="New Releases"
        titleRight="View all"
      >
        <div className="grid grid-cols-5 grid-rows-2 gap-12">
          <div className="relative grid col-span-2 row-span-2 bg-secondary">
            <BannerRelease></BannerRelease>
          </div>
          <BookItem
            classNameImage="h-[200px]"
            title={"Winter Darkest Tragedy"}
          ></BookItem>
          <BookItem
            classNameImage="h-[200px]"
            title={"Winter Darkest Tragedy"}
          ></BookItem>
          <BookItem
            classNameImage="h-[200px]"
            title={"Winter Darkest Tragedy"}
          ></BookItem>
          <BookItem
            classNameImage="h-[200px]"
            title={"Winter Darkest Tragedy"}
          ></BookItem>
          <BookItem
            classNameImage="h-[200px]"
            title={"Winter Darkest Tragedy"}
          ></BookItem>
          <BookItem
            classNameImage="h-[200px]"
            title={"Winter Darkest Tragedy"}
          ></BookItem>
        </div>
      </SectionHome>
      <SectionHome titleLeft="Favorite Authors" titleRight="View All">
        <AuthorList></AuthorList>
      </SectionHome>
    </>
  );
};

export default HomePage;
