import Button from "components/button/Button";
import CartCoupon from "components/cart/CartCoupon";
import CartItem from "components/cart/CartItem";
import Table from "components/table/Table";
import React from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Table className="">
        <thead className="border-b">
          <tr>
            <th className="w-0 !px-0 !py-0"></th>
            <th className="w-0 !px-0 !py-0"></th>
            <th>Name</th>
            <th>Slug</th>
            <th className="w-[20%]">Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="border-b">
          <CartItem></CartItem>
        </tbody>
      </Table>
      <div className="flex items-center justify-between my-10">
        <CartCoupon></CartCoupon>
        <Button className={"px-8 py-3 uppercase tracking-wide"}>
          Update basket
        </Button>
      </div>
      <div className="cart-total">
        <h2 className="text-[30px] font-semibold ">Basket totals</h2>
        <Table className={" my-5"}>
          <tbody>
            <tr className="border-b">
              <th className="w-[20%] font-medium ">Subtotal</th>
              <td className="">$67.00</td>
            </tr>
            <tr className="border-b">
              <th className="w-[20%] font-medium">Shipping</th>
              <td className="">
                <p>Flat rate: $79.00</p>
                <p>Shipping to Vietnam.</p>
              </td>
            </tr>
            <tr>
              <th className="w-[20%] font-medium">Total</th>
              <td className="!font-bold">$146.00</td>
            </tr>
          </tbody>
        </Table>
        <Button
          className={"px-12 py-3 uppercase tracking-wide"}
          onClick={() => navigate("/checkout")}
        >
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
