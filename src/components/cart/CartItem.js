import React from "react";

const CartItem = () => {
  return (
    <tr>
      <td>X</td>
      <td className="w-[120px] h-[160px]">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          width="600"
          className="object-cover w-full h-full"
        />
      </td>
      <td className="max-w-[200px]">
        Wellness And ParadiseWellnessWellness And ParadiseWellnes
      </td>
      <td> $67.00</td>
      <td>
        <div className="inline-block gap-x-5 bg-slate-200">
          <div className="flex items-center justify-center gap-x-5">
            <button className="w-10 h-10 transition-all hover:bg-slate-100">
              +
            </button>
            <p>0</p>
            <button className="w-10 h-10 transition-all hover:bg-slate-100">
              -
            </button>
          </div>
        </div>
      </td>
      <td> $67.00</td>
    </tr>
  );
};

export default CartItem;
