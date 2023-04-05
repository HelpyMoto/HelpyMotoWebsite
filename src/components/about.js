import React from 'react'
import Aboutnavbar from "./about_navbar"
import "../styles/about_navbar.css"


const about = () => {
  return (
    <div className='about'>
      <Aboutnavbar />
      <div id='about_welcome'>
        <div id='about_welcome_first'>
          <h2 style={{ marginLeft: "150px", marginTop: "150px" }}>Welcome to,</h2>
          <h1 style={{ color: "rgb(255, 143, 99)", fontSize: "70px", marginLeft: "150px" }}>Helpy_Moto</h1>
          <h4 style={{ marginLeft: "150px", color: "gray" }}>Lorem ipsum sit amet.</h4>
          <br />
          <div style={{ display: "flex" }}>
            <button style={{ background: "rgb(255, 143, 99)", height: "50px", width: "150px", marginLeft: "150px", borderRadius: "10px" }}>HIRE ME</button>
            <button style={{ background: "#5d5FEF", height: "50px", width: "150px", marginLeft: "10px", borderRadius: "10px", color: "rgb(255, 143, 99)", border: "solid 1px rgb(255, 143, 99)" }}>KNOW MORE!</button>
          </div>
        </div>
        <div id='about_welcome_second'></div>
      </div>
      <br />
      <div id="about_about">
        <div style={{ width: "50%" }}></div>
        <div style={{ width: "50%" }}>
          <h1 style={{ color: "rgb(255, 143, 99)" }}>ABOUT US</h1>
          <br />
          <h4 style={{ width: "85%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco </h4>
          <br />
          <h4 style={{ width: "85%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h4>
          <br />
          <h4>Follow my work</h4>

        </div>
        <div >

        </div>
      </div>
      <div id='about_services'>
        <h1 style={{ color: "rgb(255, 143, 99)" }}><ul>SERVICES I OFFER</ul></h1>
        <br /><br /><br />
        <div id='about_cards'>
          <div className='about_card'></div>
          <div className='about_card'></div>
          <div className='about_card'></div>

        </div>

      </div>
      <div id='about_software'>
        <br /><br /><br /><br /><br /><br />
        <h1 style={{ color: "rgb(255, 143, 99)" }}>Our Softwares</h1>
        <br /><br />
        <div style={{ display: "flex" }}>
          <h4 style={{ marginLeft: "20%" }}><b>Hm store</b></h4>
          <h4 style={{ marginLeft: "15%" }}><b>Applications</b></h4>
          <h4 style={{ marginLeft: "15%" }}><b>Social media</b></h4>

        </div>
        <br /><br />
        <div style={{ display: "flex", width: "80%", marginLeft: "8%" }}>
          <div className='about_software_card' >f</div>
          <div className='about_software_card' >f</div>
          <div className='about_software_card' >f</div>

        </div>
        <br /><br />
        <div style={{ display: "flex", width: "80%", marginLeft: "8%" }}>
          <div className='about_software_card' >f</div>
          <div className='about_software_card' >f</div>
          <div className='about_software_card' >f</div>

        </div>

      </div>
      <div id='about_client'>
        <h1 style={{ color: "rgb(255, 143, 99)" }}>WHAT MY CLIENT SAY..</h1>
        <br /><br /><br /><br />
        <div style={{ width: "55%", marginLeft: "5%", height: "300px", display: "flex" }}>
          <div style={{ width: "25%", height: "100%" }}></div>
          <div style={{ width: "75%", height: "100%" }}>
            <h4 style={{ width: "85%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam,</h4>
            <br />
            <h4 style={{ color: "rgb(255, 143, 99)" }}>---- Person A</h4>
          </div>

        </div>
        <br />
        <div style={{ width: "55%", marginLeft: "25%", height: "300px", display: "flex" }}>
          <div style={{ width: "25%", height: "100%" }}></div>
          <div style={{ width: "75%", height: "100%" }}>
            <h4 style={{ width: "85%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam,</h4>
            <br />
            <h4 style={{ color: "rgb(255, 143, 99)" }}>---- Person A</h4>
          </div>

        </div>
      </div>
      <div id='about_touch'>
        <h1 style={{ color: "rgb(255, 143, 99)" }}>GET IN TOUCH</h1>
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

export default about