import React from 'react'
import "../styles/service_payment.css"
import { Link } from 'react-router-dom';

const service_payment = () => {
    return (
        <div className='service_payment'>
            
            <br />
            <br />

            <h1>Payment</h1>
            <br />
            <br />
            <div className='payment_card'>
                <br />
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{marginLeft:"5%"}}>Service Charge</p>
                    <p style={{marginLeft:"35%"}}>Rs. 800</p>

                </div>
                <div style={{ display: "flex" }}>
                    <p style={{marginLeft:"5%"}}>GST</p>
                    <p style={{marginLeft:"60%"}}>Rs. 224</p>

                </div>
                <hr />
                <div style={{ display: "flex" }}>
                    <p style={{marginLeft:"5%"}}>Total</p>
                    <p style={{marginLeft:"55%"}}>Rs. 1024</p>

                </div>



            </div>
            <br/>
            <Link to="/paymentmethodh"><button   className="book_appointment_continue_btn">Continue</button></Link>
        </div>
    )
}

export default service_payment