import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2023/Oct/winter/fest/GW/Mens_PC__Prime3000._CB572802467_.jpg"
          alt=""
        />
        <div></div>

        <h2 className="checkout_title">Your Shopping Basket</h2>
        {/* basket item */}
        {/* basket item */}
        {/* basket item */}
        {/* basket item */}
        {/* basket item */}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
