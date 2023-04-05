import React, { useState } from "react";
import "../styles/service_tracking.css";
import { Link } from 'react-router-dom';

const Service_tracking = () => {
    const [data1, setdata1] = useState(false);
    const [data2, setdata2] = useState(false);
    const [data3, setdata3] = useState(false);
    const [data4, setdata4] = useState(false);
    
    const changeBox1 = () => { setdata1(!data1) }
    const changeBox2 = () => { setdata2(!data2) }
    const changeBox3 = () => { setdata3(!data3) }
    const changeBox4 = () => { setdata4(!data4) }
    
    return (
        <div className='service_tracking'>
            <h1>Track Your Service</h1>
            <br /><br /><br />
            <div className='service_tracking_item'>
                <div>
                    <h4><b>Custom service</b></h4>
                    <p style={{ color: "gray", fontSize: "small" }}>02, Jan 2023 12:05 pm</p>

                </div>

                <button onClick={changeBox1} className="service_tracking_item_btn">{(data1)?"View Less ":"View More"}</button></div>
            {data1 && <div className='service_tracking_data'>
                <p style={{ color: "gray", fontSize: "medium" }}>Request ID</p>
                <h6><b>MDC002345643</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Status</p>
                <h6><b>Pending</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Mechanic's Name</p>
                <h6><b>Seenu Reddy</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Appointment Booked</p>
                <h6><b>02, Jan 2023 12:05 pm</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Service type</p>
                <h6><b>Both pick up and Drop</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Payment Details</p>
                <h6><b>Paid</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Description of Problem</p>
                <h6><b>While driving through the Streets, my tyres just went flat. Need help to fix it soon as I have to go for a road trip.</b></h6>
                <br />






            </div>}

            <br />
            <div className='service_tracking_item'>
                <div>
                    <h4><b>Periodic service</b></h4>
                    <p style={{ color: "gray", fontSize: "small" }}>02, Jan 2023 12:05 pm</p>

                </div>

                <button onClick={changeBox2} className="service_tracking_item_btn">{(data2)?"View Less ":"View More"}</button></div>
            {data2 && <div className='service_tracking_data'>
                <p style={{ color: "gray", fontSize: "medium" }}>Request ID</p>
                <h6><b>MDC002345643</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Status</p>
                <h6><b>Pending</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Mechanic's Name</p>
                <h6><b>Seenu Reddy</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Appointment Booked</p>
                <h6><b>02, Jan 2023 12:05 pm</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Service type</p>
                <h6><b>Both pick up and Drop</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Payment Details</p>
                <h6><b>Paid</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Description of Problem</p>
                <h6><b>While driving through the Streets, my tyres just went flat. Need help to fix it soon as I have to go for a road trip.</b></h6>
                <br />






            </div>}
            <br />
            <div className='service_tracking_item'>
                <div>
                    <h4><b>Car Spa & Cleaning	</b></h4>
                    <p style={{ color: "gray", fontSize: "small" }}>02, Jan 2023 12:05 pm</p>

                </div>

                <button onClick={changeBox3} className="service_tracking_item_btn">{(data3)?"View Less ":"View More"}</button></div>
            {data3 && <div className='service_tracking_data'>
                <p style={{ color: "gray", fontSize: "medium" }}>Request ID</p>
                <h6><b>MDC002345643</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Status</p>
                <h6><b>Pending</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Mechanic's Name</p>
                <h6><b>Seenu Reddy</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Appointment Booked</p>
                <h6><b>02, Jan 2023 12:05 pm</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Service type</p>
                <h6><b>Both pick up and Drop</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Payment Details</p>
                <h6><b>Paid</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Description of Problem</p>
                <h6><b>While driving through the Streets, my tyres just went flat. Need help to fix it soon as I have to go for a road trip.</b></h6>
                <br />






            </div>}
            <br />
            <div className='service_tracking_item'>
                <div>
                    <h4><b>AC Services 	</b></h4>
                    <p style={{ color: "gray", fontSize: "small" }}>02, Jan 2023 12:05 pm</p>

                </div>

                <button onClick={changeBox4} className="service_tracking_item_btn">{(data4)?"View Less ":"View More"}</button></div>
            {data4 && <div className='service_tracking_data'>
                <p style={{ color: "gray", fontSize: "medium" }}>Request ID</p>
                <h6><b>MDC002345643</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Status</p>
                <h6><b>Pending</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Mechanic's Name</p>
                <h6><b>Seenu Reddy</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Appointment Booked</p>
                <h6><b>02, Jan 2023 12:05 pm</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Service type</p>
                <h6><b>Both pick up and Drop</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Payment Details</p>
                <h6><b>Paid</b></h6>
                <br />
                <p style={{ color: "gray", fontSize: "medium" }}>Description of Problem</p>
                <h6><b>While driving through the Streets, my tyres just went flat. Need help to fix it soon as I have to go for a road trip.</b></h6>
                <br />






            </div>}

            <br/><br/>
            <Link to="/"><button   className="book_appointment_continue_btn">GO BACK TO HOME</button></Link>
            <br/><br/><br/><br/><br/><br/><br/>
      




        </div>
    )
}

export default Service_tracking