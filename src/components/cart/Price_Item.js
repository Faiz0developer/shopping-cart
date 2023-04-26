import React from "react";
import styles from "../../styles/Cart.module.css";
const Price_Item = ({ cart, totalPrice }) => {
  return (
    <table className={styles.right_container}>
      <thead>PRICE DETAILS</thead>
      <hr />
      <tbody>
        <tr>
          <td>
            <p>Price ({cart.length} items)</p>
          </td>
          <td>${totalPrice}</td>
        </tr>
        <tr>
          <td>Discount</td>
          <td>No offer</td>
        </tr>
        <tr>
          <td>
            <p>Delivery Charges:</p>
          </td>
          <td>
            <p>free</p>
          </td>
        </tr>
      </tbody>
      <hr />
      <tfoot>
        <tr>
          <td>Total Amount</td>
          <td>${totalPrice}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Price_Item;
