import React from "react";
import "../styles/Tracker.css";

function Tracker() {
  return (
<div className="all">  
    <div className="home">
      <h1>How Helpy Moto Works ?</h1>
      <br/>
      <div className="home_list" >
        <div className="home_list_item">
          <div className="number1"><span>1</span></div>
          <div id="line"></div>
          <div className="number2 ">
          <h2 >Select The Perfect Car Service</h2>
          <p>From Helpy Moto's broad portfolio of services</p>
          </div>
          <div className="number3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfExYWW4_10Mar0AjL6gWh8J3PLFhkEtYTQ&usqp=CA" className="abc" alt="car"></img>
          </div>
          
        </div>
        <div className="home_list_item">
          <div className="number1"><span>2</span></div>
          <div className="number2 ">
          <h2 >Schedule Free Doorstep Pick-up</h2>
          <p>We offer free pick up and drop for all services booked</p>
          </div>
          <div className="number3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRhBOO3b4oWdoHSCQfuSNLqQSUZXXRq1rKA&usqp=CAU" className="abc" alt="car"></img>
          </div>
          
        </div>
        <div className="home_list_item">
          <div className="number1"><span>3</span></div>
          <div className="number2 ">
          <h2 >Track Your Car Service Real-Time</h2>
          <p>We will take care of everything from here!</p>
          </div>
          <div className="number3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1b7opqE0SaYvh4uSFSlYGBUzE3IK-3ft5Kg&usqp=CAU" className="abc" alt="car"></img>
          </div>
          
        </div>
        <div className="home_list_item">
          <div className="number1"><span>4</span></div>
          <div className="number2 ">
          <h2 >Track Your Car Service Real-Time</h2>
          <p>We will take care of everything from here!</p>
          </div>
          <div className="number3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWC_EKqi6nfYHZ6m_gbwTd_Rysc536qv455Q&usqp=CAU" className="abc" alt="car"></img>
          </div>
          
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default Tracker;