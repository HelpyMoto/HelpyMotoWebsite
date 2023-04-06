import React from 'react';
import "../styles/work.css";

const Number = () => {
    return (
        <div>
            <div style={{ width: "18%", backgroundColor: "#555FEF", height: "5px", marginTop: "400px", marginLeft: "7%", borderRadius: "20px" }}></div>
            <div className='numbers'>
                <div className='num1'>
                    <h2><Number n={1500000} />+</h2>
                    <h4 style={{ marginLeft: "30%" }}>Cars Serviced</h4>
                </div>
                <div className='num1'>
                    <h2><Number n={1000000} />+</h2>
                    <h4 style={{ marginLeft: "10%" }}>Happy Customers</h4>
                </div>
                <div className='num1'>
                    <h2><Number n={4.4} />+</h2>
                    <h4>Average Rating</h4>
                </div>
                <div className='num1'>
                    <h2><Number n={1000} />+</h2>
                    <h4>Touch Points in India</h4>
                </div>





            </div>
            <div style={{ width: "18%", backgroundColor: "#555FEF", height: "5px", marginTop: "15px", marginLeft: "7%", borderRadius: "20px" }}></div>

        </div>
    )
}

export default Number