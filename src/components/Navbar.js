import React from "react";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <nav className="flex justify-between items-center bg-orange-400">
      <div className="ml-10">
        <span>Let's Shopping</span>
        <Link to="/" className="navLink">
          Home
        </Link>
      </div>
      <div className="flex mr-44 h-8 self-center">
      
        <Link to="/cart1" className="navLink self-center">
          <span>Cart </span>
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <span>{items.length}</span>  
      </div>
      
    </nav>
  );
};

export default Navbar;
