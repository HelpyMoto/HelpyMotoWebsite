import React from "react";
import "../styles/your_cart.css";

const Your_cart = props => {
  return (
    <div>
      {/* <div class="background"></div>
      <div class="foreground"></div> */}
      <div className="cart_box">
        
        {props.content}
      </div>
    </div>
  );
};

export default Your_cart;