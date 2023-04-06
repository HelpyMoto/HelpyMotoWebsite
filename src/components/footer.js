import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <div className="containerfooter my-5">
        <footer
          className="text-center text-lg-start text-dark"
          style={{ backgroundColor: "white" }}
        >
          <section
  className="social-section d-flex justify-content-between p-3 text-white"
  style={{ backgroundColor: "black" }}
>

            <div className="mt-2">
              <span>Get connected with us on social networks:</span>
            </div>
            <div class="special-animation">
              <Link to="https://www.facebook.com/profile.php?id=100069828099402&mibextid=ZbWKwL" className="text-white me-4">
                <i className="fab fa-facebook-f"  style={{color: "blue"}} />
              </Link>
              <Link  to="//twitter.com/HelpyMoto?t=FmxcdcAnmVX6GO20FkKFzA&s=09" className="text-white me-4">
                <i className="fab fa-twitter"  style={{color: "blue"}} />
              </Link>
              <Link  to="https://instagram.com/helpy_moto?igshid=YmMyMTA2M2Y=" className="text-white me-4">
                <i className="fab fa-instagram"  style={{color: "red"}} />
              </Link>
              <Link  to="" className="text-white me-4">
                <i className="fab fa-linkedin"   style={{color: "blue"}}/>
              </Link>
              
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <img
                    src={require("../assets/Logo.png")}
                    alt="logo"
                    className="img-fluidfooter"
                    style={{ width: "100px", marginTop: "-40px" }}
                  />

                  <p  style={{color: "black", fontSize:"20px"}} >
                    At our venture, we strive to restore motors all across India
                    in an efficient manner that saves our customers' valuable
                    time by eliminating the need to bring their cars to a repair
                    shop
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 underlinefp">
                  <h6 className="text-uppercase fw-bold">Useful Links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <Link  to="#!" className="text-dark">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link  to="#!" className="text-dark">
                      About Us
                    </Link>
                  </p>
                  <p>
                    <Link  to="#!" className="text-dark">
                      Services
                    </Link>
                  </p>
                  <p>
                    <Link  to="#!" className="text-dark ">
                      Terms of service
                    </Link>
                  </p>
                  <p>
                    <Link  to="#!" className="text-dark">
                      Privacy policy
                    </Link>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Practice Areas</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <Link to="#!" className="text-dark">
                      Repairing
                    </Link>
                  </p>
                  <p>
                    <Link  to="#!" className="text-dark">
                      Engine
                    </Link>
                  </p>
                  <p>
                    <Link  to="#!" className="text-dark">
                      Painting
                    </Link>
                  </p>
                  <p>
                    <Link  to="#!" className="text-dark">
                      Body and Tires
                    </Link>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <i className="fas fa-home mr-2" /> Indranagar phase-2, New{" "}
                    <span className="sidefooterbar"> Delhi-110001, India </span>
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-2" />{" "}
                    officialbusiness.sb@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-2" /> +91 9098630635
                  </p>
                </div>
              </div>
            </div>
          </section>
        
          <div className="text-center_p-3" style={{ backgroundColor: "black" }}>
            <span className="text-white">© 2021-2023 Copyright :</span>

            <Link className="text-white" to="#">
              All Rights Reserved
            </Link>
          </div>
        </footer>
        <marquee behavior="" direction="right">Thank you for choosing our mechanical services. We are committed to providing you with the best possible experience.</marquee>
      </div>
    </>
  );
};

export default footer;
