

import React from 'react'
import "../styles/footer.css"

const footer = () => {
  return (

  
<>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="containerfooter my-5">
    {/* Footer */}
    <footer
      className="text-center text-lg-start text-dark"
      style={{ backgroundColor: "white" }}
    >
      {/* Section: Social media */}
      <section
        className="d-flex justify-content-between p-4 text-white"
        style={{ backgroundColor: "black" }}
      >
        {/* Left */}
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        
        <div>
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <img src={require("../assets/Logo.png")} alt="logo" className="img-fluidfooter" style={{ width:"100px",marginTop:"-40px" }} />
             
              <p>
                    At our venture, we strive to restore motors all across India in an efficient manner that saves our customers' valuable time by eliminating the need to bring their cars to a repair shop

              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 underlinefp">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Useful Links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-dark">
                  Home 
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Services
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark ">
                Terms of service
                </a>
                  </p>
                   <p>
                <a href="#!" className="text-dark">
                Privacy policy
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Practice Areas</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-dark">
                Repairing
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                Engine
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Painting
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                Body and Tires
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <i className="fas fa-home mr-2" />  Indranagar phase-2, New <span className="sidefooterbar" > Delhi-110001, India </span>
              </p>
              <p>
                <i className="fas fa-envelope mr-2" /> officialbusiness.sb@gmail.com
              </p>
                  <p>
                <i className="fas fa-phone mr-2" /> +91 9098630635
              </p>
              
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "black" }}
          >
            <span className="text-white">
            © 2021-2023 Copyright : 
            </span>
       
        <a className="text-white" href="#">
        All Rights Reserved
        </a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </div>
  {/* End of .container */}
</>

    
   


  )
}

export default footer;