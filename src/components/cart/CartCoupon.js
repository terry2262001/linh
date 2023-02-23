import Button from "components/button/Button";
import React from "react";

const CartCoupon = () => {
  return (
    <div className="flex items-center gap-x-5">
      <input
        type="text"
        className="flex-1 px-4 py-3 border rounded"
        placeholder="Enter code"
      />
      <Button className={"px-8 py-3 uppercase tracking-wide "}>
        Apply coupon
      </Button>
    </div>
  );
};

export default CartCoupon;
