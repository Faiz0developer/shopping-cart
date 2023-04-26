import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  remove,
  addQuantity,
  minusQuantity,
} from "../../store/slices/cartSlice";
import styles from "../../styles/Cart.module.css";
import Button from "../UI/Button";
import Price_Item from "./Price_Item";
const Cart = ({ cart, onSetCart }) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const addMoreQuantity = (item) => {
    dispatch(addQuantity(item));
  };

  const removeQuantity = (id) => {
    dispatch(minusQuantity(id));
  };
  return (
    <div className="flex justify-between">
      <div className="my-7 w-4/6 bg-slate-100">
        {cartItems.length == "" ? (
          <h1 className="text-center mt-10 text-2xl font-semibold">
            Your Cart is empty.
          </h1>
        ) : (
          cartItems.map((product) => {
            return (
              <>
                <div key={product.id} className="flex mb-5 rounded-xl ml-5">
                  <img
                    src={product.image}
                    alt=""
                    className="object-cover h-[150px] w-[150px]"
                  />
                  <div className="ml-14 w-full">
                    <div className="grid grid-cols-2 ">
                      <h5 className="font-medium text-2xl">{product.title}</h5>
                      <h5 className="font-bold place-self-end mr-3">
                        ${product.totalPrice}
                      </h5>
                    </div>

                    <div className="w-[160px] grid grid-cols-2 mt-6">
                      <Button
                        className={styles.btn1}
                        onClick={() => removeQuantity(product.id)}
                      >
                        -
                      </Button>
                      <Button
                        className={styles.btn1}
                        onClick={() => addMoreQuantity(product)}
                      >
                        +
                      </Button>
                    </div>
                    <h6 className="bg-slate-100 w-[100px] text-lg mt-4 h-8 text-center rounded-sm">
                      Qty: {product.quantity}
                    </h6>
                    <Button
                      className={styles.btn}
                      onClick={() => handleRemove(product.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <hr />
                <br />
              </>
            );
          })
        )}

        {/* <Price_Item/> */}
      </div>
      <div className="bg-slate-100 w-[30%] mt-7">
        <div>
          <h1>{cartItems.length} items added in your cart</h1>
        </div>
      </div>
    </div>
  );
};
export default Cart;
