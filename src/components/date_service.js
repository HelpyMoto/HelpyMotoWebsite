
import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../styles/date_appointment.css"
import { Link } from 'react-router-dom';


export default function TableDatePicker() {
    const [date, setDate] = useState(new Date());
    
    const [bgColor1, setBgColor1] = useState(true);
    const [bgColor2, setBgColor2] = useState(true);
    const [bgColor3, setBgColor3] = useState(true);
    const [bgColor4, setBgColor4] = useState(true);
    const [bgColor5, setBgColor5] = useState(true);

    const changeColor1 = () => {setBgColor1(!bgColor1) }
    const changeColor2 = () => {setBgColor2(!bgColor2) }
    const changeColor3 = () => {setBgColor3(!bgColor3) }
    const changeColor4 = () => {setBgColor4(!bgColor4) }
    const changeColor5 = () => {setBgColor5(!bgColor5) }

    return (
        <div className="select_date_service">
           

            <br />  <br /><br /><br />
            <div style={{ display: "flex", textAlign: "center" }}>
                <h3 style={{ marginLeft: "35%", marginRight: "30px" }}>Selected Date :  </h3>
                <div ><DatePicker selected={date} onChange={date => setDate(date)} />
                </div>

            </div>
            <br /><br />

            <div style={{ textAlign: "left" }}>
                <h4 style={{ marginLeft: "10%", marginRight: "30px" }}>Available Slots</h4>
                <br />
                <div className="select_date_slot">
                <button onClick={changeColor1} style={{ background: bgColor1 ? "white" : "#5D5FEF" ,color: bgColor1?"black":"white" ,height:"50px",borderRadius:"20px"}}>06:00 AM - 11.00 AM</button>
                <button onClick={changeColor2} style={{ background: bgColor2 ? "white" : "#5D5FEF" ,color: bgColor2?"black":"white" ,height:"50px",borderRadius:"20px"}}>06:00 AM - 11.00 AM</button>
                <button onClick={changeColor3} style={{ background: bgColor3 ? "white" : "#5D5FEF" ,color: bgColor3?"black":"white" , height:"50px",borderRadius:"20px"}}>06:00 AM - 11.00 AM</button>
                <button onClick={changeColor4} style={{ background: bgColor4 ? "white" : "#5D5FEF" ,color: bgColor4?"black":"white" , height:"50px",borderRadius:"20px"}}>06:00 AM - 11.00 AM</button>
                <button onClick={changeColor5} style={{ background: bgColor5 ? "white" : "#5D5FEF" ,color: bgColor5?"black":"white" , height:"50px",borderRadius:"20px"}}>06:00 AM - 11.00 AM</button>


                </div>
                <br /><br /><br /><br />
                <Link to="/bookappointment"><button className="select_date_btn" >Continue</button></Link>

                
            </div>


        </div>

    );
}