import React from 'react'
import Navbar from "./about_navbar"
import "../styles/contact.css"

const contact = () => {
  return (
    
    <div id='contact'>
        <Navbar/>
        <br/><br/><br/><br/>
        <div id='about_touch'>
        <h1 style={{ color: "rgb(255, 143, 99)" }}>Contact US</h1>
        <br /><br />
        <div style={{ display: "flex" }}>
          <div style={{ width: "65%", height: "700px"}}>
            <form>
            
              <input className='about_input' placeholder='     Name'></input>
              <input className='about_input' placeholder='     Email'></input>
              <input className='about_input_msg' placeholder='     Message'></input>
              <button className='about_input_btn'>SUBMIT</button>
              
              
      
            </form>
          </div>
          <div style={{ width: "35%", height: "700px"}}>
          <br /><br />
            <div>
              <h2 style={{ color: "rgb(255, 143, 99)", textAlign: "left", marginLeft: "70px" }}>Phone</h2>
              <h3>+91 120 000 0000</h3>
            </div>
            <br /><br />
            <div>
              <h2 style={{ color: "rgb(255, 143, 99)", textAlign: "left", marginLeft: "70px" }}>Email Address</h2>
              <h3>helpymoto@gmail.com</h3>
            </div>
            <br /><br />
            <div>
              <h2 style={{ color: "rgb(255, 143, 99)", textAlign: "left", marginLeft: "70px" }}>Address</h2>
              <h3>Delhi,India</h3>
            </div>
            <br /><br /><br />
            <div>
              <h2 style={{ color: "rgb(255, 143, 99)", textAlign: "left", marginLeft: "70px" }}>Social media</h2>
              <h3>+91 120 000 0000</h3>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}

export default contact