import React from "react";

const DealItem = (props) => {
  return (
    <div className="w-full h-full gap-x-5">
      <div className="flex h-full p-12 border gap-x-10">
        <img
          src={
            "https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-1.jpg"
          }
          alt=""
          className="w-[200px] h-full"
        />
        <div className="content">
          <p className="text-xs tracking-widest uppercase text-primary">
            Kindle
          </p>
          <p className="text-[25px] font-semibold font-cormorant">
            Winter Darkest Tragedy
          </p>
          <p className="mt-5 text-lg font-cormorant text-lightGray">
            Luanne Rice
          </p>
          <p className="text-xl font-cormorant">$1.75</p>
        </div>
      </div>
    </div>
  );
};

export default DealItem;
