import React, { useEffect, useState } from "react";
import "../styles/payment.css"
import { Link } from 'react-router-dom';


const Paymentmethodh = () => {





  // const [Item, setItem] = useState([]);

  const [count, setcount] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("cart") != null) {
      let text;
      let count1 = 0;
      text = JSON.parse(localStorage.getItem("cart"));
      console.log(text);
      // setItem(text);
      text.map((d) =>
      (
        count1 = count1 + d.price
      ))
      setcount(count1)

    }

  }, []);

  return (
    <div className='paymentmethodh'>
      <div className="payment_container">
        <div style={{ width: "100%", height: "60px", backgroundColor: "#555FEF", color: "white", textAlign: "center", justifyContent: "center" }}><h1>Payment methods</h1></div>
        <br />
        <div style={{ marginLeft: "10%", color: 'black', fontSize: "20px" }}>
          <input type="radio" /> UPI
          <div style={{ marginLeft: "12%", fontSize: "16px"  }}>

            <h5 >Choose an Option</h5>
            
            <input type="radio" /> PhonePe
            <br/>
            <input type="radio" /> Your UPI ID
            

          </div>
          <br/><br />
          <input type="radio" /> Wallets
          <br/><br/><br />
          <input type="radio" /> Credit / Debit / ATM cards <div style={{color:"gray",marginLeft:"3%",fontSize:"15px"}}>Add your card according to RBI guidelines</div>
          <br/><br/>
          <input type="radio" /> Netbanking <div style={{color:"gray",marginLeft:"3%",fontSize:"15px"}}>Add your card according to RBI guidelines</div>
          <br/><br/>
          <input type="radio" /> Cash on Delivery
        </div>
      </div>
      
      <div className="price_card">
        <p id="heading1">Price Details</p>
        
      
        <p id="heading2">Total Payable Amount  -  ₹ {count}</p>
        <Link to="/track">
          <button className="pricecard_btn">Checkout </button>
        </Link>
        

        
        
      </div>

    </div>
  )
}

export default Paymentmethodh