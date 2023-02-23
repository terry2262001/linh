import BookItem from "components/book/BookItem";
import SidebarCategory from "components/sidebar/SidebarCategory";
import React from "react";

const CategoryPage = () => {
  return (
    <>
      <div className="container flex justify-between gap-x-5">
        <SidebarCategory className="mt-14"></SidebarCategory>
        <div className="mt-14">
          <div className="flex items-center justify-between mb-10">
            <p>Showing all 20 results</p>
            <p>View all</p>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <BookItem></BookItem>
            <BookItem></BookItem>
            <BookItem></BookItem>
            <BookItem></BookItem>
            <BookItem></BookItem>
            <BookItem></BookItem>
            <BookItem></BookItem>
            <BookItem></BookItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
