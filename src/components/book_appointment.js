import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/date_appointment.css"



const Book_appointment = () => {
    const [bgColor1, setBgColor1] = useState(true);
    const [bgColor2, setBgColor2] = useState(true);
    const [bgColor3, setBgColor3] = useState(true);
    const [bgColor4, setBgColor4] = useState(true);


    const changeColor1 = () => { setBgColor1(!bgColor1) }
    const changeColor2 = () => { setBgColor2(!bgColor2) }
    const changeColor3 = () => { setBgColor3(!bgColor3) }
    const changeColor4 = () => { setBgColor4(!bgColor4) }

    return (
        <div className='book_appointment'>
     
            <div className='book_appointment_card'>
                <h1 style={{ color: "#5D5FEF", marginTop: "50px" }}>Book Appointment</h1>
                <br />
                <button className='book_appointment_btn' onClick={changeColor1} style={{ background: bgColor1 ? "white" : "#5D5FEF", color: bgColor1 ? "black" : "white" }}>Pick-Up My vehicle</button>
                <br />
                <button className='book_appointment_btn' onClick={changeColor2} style={{ background: bgColor2 ? "white" : "#5D5FEF", color: bgColor2 ? "black" : "white" }}>Drop My Vehicle</button>
                <br />
                <button className='book_appointment_btn' onClick={changeColor3} style={{ background: bgColor3 ? "white" : "#5D5FEF", color: bgColor3 ? "black" : "white" }}>Both Pick-Up and Drop</button>
                <br />
                <button className='book_appointment_btn' onClick={changeColor4} style={{ background: bgColor4 ? "white" : "#5D5FEF", color: bgColor4 ? "black" : "white" }}>I Prefer to Drive</button>
                <br />
            </div>

            
            <Link to="/servicepayment"><button className="book_appointment_continue_btn">Continue</button></Link>


        </div>
    )
}

export default Book_appointment