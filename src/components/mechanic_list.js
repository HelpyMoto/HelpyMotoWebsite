import React, { useState } from 'react';
import "../styles/mechanic_list.css";
import Popup from './Popup';



const Mechanic_list = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isaccepted, setIsaccepted] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);

    }
    const closepop = () => {

        setIsaccepted(!isaccepted);
    }


    // const handleClick = () => {

    //     alert("button is clicked");


    // };

    return (
        <div style={{ textAlign: "center" }}>

            {isOpen && <Popup
                content={<>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
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
                    <button style={{ backgroundColor: "#5D5FEF", color: "White", borderRadius: "5px", marginLeft: "5%", width: "90%", height: "50px" }} onClick={togglePopup}>Submit</button>
                </>}
                handleClose={togglePopup}


            />}
            {isaccepted && <Popup
                content={<>
                    <br /><br />
                    <h1><b>Your Request has been accepted</b></h1>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"  fill="Green" class="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" style={{ marginLeft: "30%", marginTop: "30%" }} fill="green" class="bi bi-check2-circle" viewBox="0 0 16 16">
                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>


                </>}
                handleClose={togglePopup}
            />}
            <br />
            <br />
            <h1 style={{ color: "#5D5FEF" }}>List of mechanics</h1>
            <button onClick={closepop} style={{ marginLeft: "70%" }}>if request accepted</button>

            <br />
            <br />
            <div className='mech_list_container'>
                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup}>Hire mechanic</button>



                </div>
                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup}>Hire mechanic</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup}>Hire mechanic</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup}>Hire mechanic</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup}>Hire mechanic</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup}>Hire mechanic</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup}>Hire mechanic</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup}>Hire mechanic</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup}>Hire mechanic</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup}>Hire mechanic</button>



                </div>                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup}>Hire mechanic</button>



                </div>





            </div>
        </div>
    )
}

export default Mechanic_list