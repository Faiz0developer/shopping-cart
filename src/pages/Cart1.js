import React from "react";
import Cart from "../components/cart/Cart";

const Cart1 = () => {
  return (
    <div className="ml-10 mt-10 ">
      <div className="flex justify-between mx-4  w-[63%]">
        <h1 className="text-2xl">Shopping Cart</h1>
        <h1>Price</h1>
      </div>
      <hr />
      <Cart />
    </div>
  );
};

export default Cart1;
