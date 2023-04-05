import React, { useState } from 'react';
import "../styles/mechanic_list.css";
import Popup from './Popup';



const Customer_list = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    // const handleClick = () => {

    //     alert("button is clicked");


    // };

    return (
        <div style={{ textAlign: "center" }}>

            {isOpen && <Popup
                content={<>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    <b style={{ marginLeft: "60px" }}>Rishab Jain</b>

                    <b style={{ marginLeft: "160px" }}> Himalayat nagar, </b>
                    <b style={{ marginLeft: "90px" }}>Hyderabad,Telangana.</b>
                    <br />
                    <b style={{ marginLeft: "90px" }}>Mahindra bike vehicle no. XXXX</b>
                    <br /><br /><br />
                    <div style={{ border: "solid 1px black", padding: "25px", borderRadius: "25px" }}>

                        <b>Description of the problem :</b>
                        <br /><br />

                        <p>While driving through the streets, my tyres just went flat. need help to fix it soon as I have to go for a road trip.</p>

                    </div>
                    <br /><br />
                    <button style={{ backgroundColor: "#5D5FEF", color: "White", borderRadius: "5px", marginLeft: "5%", width: "45%", height: "50px" }} onClick={togglePopup}>Accept</button>
                    <button style={{ backgroundColor: "black", color: "White", borderRadius: "5px", marginLeft: "5%", width: "45%", height: "50px" }} onClick={togglePopup}>Reject</button>


                </>}
                handleClose={togglePopup}
            />}
            <br />
            <br />
            <h1 style={{ color: "#5D5FEF" }}>List of customber Requests</h1>

            <br />
            <br />
            <div className='mech_list_container'>
                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup} style={{ width: "100px", height: "40px" }}>View</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup} style={{ width: "100px", height: "40px" }}>View</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup} style={{ width: "100px", height: "40px" }}>View</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup} style={{ width: "100px", height: "40px" }}>View</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup} style={{ width: "100px", height: "40px" }}>View</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup} style={{ width: "100px", height: "40px" }}>View</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup} style={{ width: "100px", height: "40px" }}>View</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup} style={{ width: "100px", height: "40px" }}>View</button>



                </div>




            </div>
        </div>
    )
}

export default Customer_list