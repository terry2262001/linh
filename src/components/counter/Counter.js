import React from "react";

const Counter = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="relative flex flex-row w-full h-full mt-1 bg-transparent rounded-lg">
        <button
          data-action="decrement"
          className="w-20 h-full text-gray-600 bg-gray-200 rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="flex items-center w-full h-full font-medium text-center bg-gray-200 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default "
          name="custom-input-number"
          value="0"
        ></input>
        <button
          data-action="increment"
          className="w-20 h-full text-gray-600 bg-gray-200 rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-300"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
// eslint-disable-next-line no-lone-blocks
{
  /* <p className="flex items-center justify-center w-full h-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default ">
          0
        </p> */
}
