import Gallery from "components/icon/Gallery";
import React from "react";

const CategoryList = () => {
  return (
    <div className="grid grid-cols-5 gap-x-10">
      <div className="flex items-center justify-center bg-purple-100 h-[120px] rounded">
        <Gallery color="#a200fc" className="w-[35px] h-[35px] "></Gallery>
      </div>
      <div className="flex items-center justify-center bg-yellow-100 h-[120px] rounded">
        <Gallery className="w-[35px] h-[35px]"></Gallery>
      </div>
      <div className="flex items-center justify-center bg-red-100 h-[120px] rounded">
        <Gallery className="w-[35px] h-[35px]"></Gallery>
      </div>
      <div className="flex items-center justify-center bg-blue-200 h-[120px] rounded">
        <Gallery className="w-[35px] h-[35px]"></Gallery>
      </div>
      <div className="flex items-center justify-center bg-pink-200 h-[120px] rounded">
        <Gallery className="w-[35px] h-[35px]"></Gallery>
      </div>
    </div>
  );
};

export default CategoryList;
