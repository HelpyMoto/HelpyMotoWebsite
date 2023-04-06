import React, { useState, useEffect } from "react";
import "../styles/newnavbar.css";
import Videos from "../assets/HM final.mp4";
import Logo from "../assets/Logo.png";
import MobileImage from "../assets/bg4.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bgSize, setBgSize] = useState('110vh'); // initialize the background image size

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowForm(true), 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 992);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleClick() {
    setBgSize('130vh'); // set the new background image size
  }

  return (
    <>
      <header>
        {" "}
        <nav
          className={`navbar containernavbar navbar-expand-lg navbar-light nav-color ${
            isMobile ? "mobile-nav" : ""
          }`}
        >
          <Link className="navbar-brand" to="#/">
            {" "}
            <img
              src={Logo}
              alt="logo"
              className="img-fluidnavbar"
              style={{ width: "70px", height: "70px", marginLeft: "20px" }}
            />
          </Link>
          <span
            className="centrenavbar"
            style={{
              fontSize: "17px",
              color: "white",
              marginRight: isMobile ? "20px" : "0",
            }}
          >
            For Unstoppable <br />
            Journey
            <span
              className="centrenavbar1"
              style={{
                fontSize: "17px",
                color: "white",
                marginLeft: isMobile ? "30px" : "0",
              }}
            >
            </span>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HM Store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About Us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <Link to="/LoginPage">
                  <button
                    type="submit"
                    className="css-button-arrow--red buttonnavbar"
                  >
                    Login/Sign up
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {isMobile ? (
         <div className="mobile-image" onClick={handleClick}>
         <img src={MobileImage} alt="mobile-background" style={{ height: bgSize }} />
    <div className="maincontainerform123">
      <form className="container-navbar-form" action="#!" method="post">
        <div className="card-navbar">
          <Link className="signgup-navbar" href="#!">Hire A Mechanic</Link>
          <div className="inputBox1-navbar">
            <input type="text" required="required" />
            <span className="user-navbar">Location</span>
          </div>
          <div className="inputBox1-navbar">
            <input type="text" required="required" />
            <span className="user-navbar">Vehicle Model</span>
                </div>
                <div className="inputBox1-navbar">
            <input type="text" required="required" />
            <span className="user-navbar">Vehicle Number</span>
                </div>
                <div className="inputBox1-navbar">
            <input type="text" required="required" />
            <span className="user-navbar">Issue</span>
          </div>
          
          <button className="enter">Hire Now</button>
        </div>
      </form>
    </div>
  </div>
) : (
  <div className="banner">
    <video
  autoPlay
  muted
  preload="auto"
  loop="true"

  className={`tagline-video ${showForm ? "hidden" : ""}`}
>
  <source src={Videos} type="video/mp4" />
</video>

            <div className="overlay" />
            <div className="mobile-image">
              <img src={MobileImage} alt="mobile-background"
               className={`images ${showForm ? "hidden" : ""}`}/>
    <div className="maincontainerform123">
      <form className="container-navbar-form" action="#!" method="post">
        <div className="card-navbar">
          <Link className="signgup-navbar" href="#!">Hire A Mechanic</Link>
          <div className="inputBox1-navbar">
            <input type="text" required="required" />
            <span className="user-navbar">Location</span>
          </div>
          <div className="inputBox-navbar">
            <input type="text" required="required" />
            <span>Vehicle Model</span>
                    </div>
                    <div className="inputBox1-navbar">
            <input type="text" required="required" />
            <span className="user-navbar">Vehicle Number</span>
          </div>
          <div className="inputBox-navbar">
            <input type="text" required="required" />
            <span>Issue</span>
          </div>
          
          <button className="enter">Hire Now</button>
        </div>
      </form>
    </div>
  </div>
  </div>
)}
    </>
  );
};

export default Navbar;
