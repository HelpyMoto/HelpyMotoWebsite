import React, { useEffect, useState } from "react";
import "../styles/goto_cart.css";
import { Link } from "react-router-dom";


const Goto_cart = () => {
  const [Item, setItem] = useState([]);

  const [count, setcount] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("cart") != null) {
      let text;
      let count1 = 0;
      text = JSON.parse(localStorage.getItem("cart"));
      console.log(text);
      setItem(text);
      text.map((d) =>
      (
        count1 = count1 + d.price
      ))
      setcount(count1)

    }

  }, []);

  const deleteByIndex = (index) => {
    let items = [...Item];
    console.log(index);
    let updatedItems = items.filter((val) => val.id !== index);
    setItem(updatedItems);
    let count1 = 0;
    updatedItems.map((d) =>
    (
      count1 = count1 + d.price

    ))
    setcount(count1)
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    //date.now
  };

  return (
    <div className="goto_cart_box">
      <div className="goto_cart_card">
        <br /><br />
        <h1>Your Cart</h1>
        {Item &&
          Item.map((v) => (
            <div key={v.id} className="gotocart_item">
              <div style={{ width: "60%", padding: "15px" }}>{v.data}</div>
              <div style={{ width: "30%", textAlign: "center", padding: "15px" }}>

                <p style={{
                  color: "gray",
                  // position: "absolute",
                  // right: "620px",
                }}>₹{" "}{v.price}</p>
              </div>
              <div style={{ width: "10%", textAlign: "center", padding: "10px" }}>

 
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" onClick={() => deleteByIndex(v.id)} class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg>
            
              </div>




            </div>
          ))}
        <br />
        <br />
        <div style={{ backgroundColor: "#999FEF", height: "4px", width: "80%", marginLeft: "10%" }}></div>
        <br />
        <div className="subtotal_cart">
          <h2>Subtotal ({Item.length} items)</h2>
          <h3 style={{ color: "gray", marginLeft: "70%" }}>₹ {count}</h3>

        </div>
        <Link to="/paymentmethodh">
          <button className="gotocart_btn">Checkout </button>
        </Link>
        <br />


      </div>
      <br /> <br /><br /> <br /><br /> <br /><br /> <br /><br />
      <br />
    </div>
  );
};

export default Goto_cart;