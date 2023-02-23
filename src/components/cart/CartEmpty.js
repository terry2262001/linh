import Button from "components/button/Button";
import Bag from "components/icon/Bag";
import React from "react";
import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[600px] mt-10 bg-secondary relative">
      <div className="absolute text-center -translate-x-1/2 -translate-y-[60%] top-1/2 left-1/2">
        <Bag width="200" height="200" className="inline-block"></Bag>
        <p className="my-8 text-2xl">Your cart is currently empty.</p>
        <Button onClick={() => navigate("/")} className="px-8 py-3 text-xl">
          Return to shop
        </Button>
      </div>
    </div>
  );
};

export default CartEmpty;
