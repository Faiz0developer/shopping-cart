import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/slices/cartSlice";
import styles from "../../styles/Card.module.css";

const Card = ({ item }) => {
  const { status } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const addData = () => {
    const itemData = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1,
      rating: item.rating,
      totalPrice: item.price,
      category: item.category,
    };
    dispatch(add(itemData));
  };

  return (
    <>
      <div className={styles.cards}>
        <div className="flex justify-center h-[300px] ">
        <img src={item.image} alt="" />
        </div>
        <div className="flex flex-col h-[150px]">
          <p className="font-normal text-lg mt-1">{item.title}</p>
          <p className="font-medium">Rating: <span className="text-[#C45500]">{item.rating.rate}</span></p>
          <p className="text-black font-medium text-4xl mt-1">${item.price}</p>
          <p>FREE Delivery</p>
        </div>
        <button className={styles.button} onClick={addData}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
