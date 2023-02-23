import Button from "components/button/Button";
import Label from "components/input/Label";
import Table from "components/table/Table";
import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-[30px] font-semibold">Billing details</h2>
          <h2 className="text-[30px] font-semibold">Your product</h2>
        </div>
        <div className="flex items-start justify-between gap-x-10">
          <div className="w-[50%]">
            <div className="flex items-center justify-center my-10 gap-x-5">
              <div className="w-full h-full">
                <Label className={"mb-2 !text-base"} name="firstName">
                  First name *
                </Label>
                <input
                  type="text"
                  className="w-full h-full px-4 py-3 leading-tight text-gray-700 border-2 rounded focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full h-full">
                <Label className={"mb-2 !text-base"} name="lastName">
                  Last name *
                </Label>
                <input
                  type="text"
                  className="w-full h-full px-4 py-3 leading-tight text-gray-700 border-2 rounded focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="flex items-center justify-center my-10 gap-x-5">
              <div className="w-full h-full">
                <Label className={"mb-2 !text-base"} name="firstName">
                  Email
                </Label>
                <input
                  type="text"
                  className="w-full h-full px-4 py-3 leading-tight text-gray-700 border-2 rounded focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full h-full">
                <Label className={"mb-2 !text-base"} name="lastName">
                  Phone
                </Label>
                <input
                  type="text"
                  className="w-full h-full px-4 py-3 leading-tight text-gray-700 border-2 rounded focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="w-full h-full my-10">
              <Label className={"mb-2 !text-base"} name="firstName">
                Address
              </Label>
              <input
                type="text"
                className="w-full h-full px-4 py-3 leading-tight text-gray-700 border-2 rounded focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full h-full">
              <Label className={"mb-2 !text-base"} name="firstName">
                Order notes (optional)
              </Label>
              <textarea
                name="order_comments"
                className="w-full h-[150px] p-3 text-gray-700 border-2 rounded"
                id="order_comments"
                placeholder="Notes about your order, e.g. special notes for delivery."
                rows="2"
                cols="5"
                spellcheck="false"
              ></textarea>
            </div>
          </div>
          <div className="w-[50%] h-full]">
            <Table className={"my-5"}>
              <tbody>
                <tr className="border-b">
                  <td className="">Product</td>
                  <td className="">Subtotal</td>
                </tr>
                <tr className="border-b">
                  <td className="">
                    Wellness And Paradise × <span>2</span>
                  </td>
                  <td className="">$134.00</td>
                </tr>
                <tr className="border-b">
                  <td className="">Shipping</td>
                  <td className="">$30.00</td>
                </tr>
                <tr className="border-b">
                  <td className="">Total</td>
                  <td className="!font-bold">$146.00</td>
                </tr>
              </tbody>
            </Table>
            <p className="py-5 text-sm text-center border-b text-lightGray">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy
            </p>
            <div className="text-right">
              <Button
                className={"px-12 py-3 my-5 uppercase tracking-widest "}
                onClick={() => navigate("/checkout")}
              >
                Place order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
