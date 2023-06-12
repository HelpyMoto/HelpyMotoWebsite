import React, { useEffect, useState } from "react";
import "../styles/description.css"

import Button from 'react-bootstrap/Button';

import 'react-notifications/lib/notifications.css';
import Popup from './Popup_service';
import Engine from "../assets/engine.png";
import Plumber from "../assets/plumber-holding-something.jpg";
import hr from "../assets/24.jpg";


const Description = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);
  const [isOpen15, setIsOpen15] = useState(false);



  const togglePopup1 = () => { setIsOpen(!isOpen); }
  const togglePopup2 = () => { setIsOpen2(!isOpen2); }
  const togglePopup3 = () => { setIsOpen3(!isOpen3); }
  const togglePopup4 = () => { setIsOpen4(!isOpen4); }
  const togglePopup5 = () => { setIsOpen5(!isOpen5); }
  const togglePopup6 = () => { setIsOpen6(!isOpen6); }
  const togglePopup7 = () => { setIsOpen7(!isOpen7); }
  const togglePopup8 = () => { setIsOpen8(!isOpen8); }
  const togglePopup9 = () => { setIsOpen9(!isOpen9); }
  const togglePopup10 = () => { setIsOpen10(!isOpen10); }
  const togglePopup11 = () => { setIsOpen11(!isOpen11); }
  const togglePopup12 = () => { setIsOpen12(!isOpen12); }
  const togglePopup13 = () => { setIsOpen13(!isOpen13); }
  const togglePopup14 = () => { setIsOpen14(!isOpen14); }
  const togglePopup15 = () => { setIsOpen15(!isOpen15); }



  const [item, setItem] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart") != null) {
      let val = JSON.parse(localStorage.getItem("cart"));
      console.log("val", val);
      console.log(typeof val);
      setItem(val);
    }
  }, []);

  const addItem = (e) => {
    let newVal = e;

    if (localStorage.getItem("cart") == null) {
      localStorage.setItem("cart", "[]");
    }

    setItem((Item) => [...item, e]);

    let oldVal = JSON.parse(localStorage.getItem("cart"));

    oldVal.push(newVal);

    localStorage.setItem("cart", JSON.stringify(oldVal));
    alert(e.data + " is added to cart");
   
  };


  return (
    <div className='flex flex-col py-20 my-10 bg-black -skew-y-3'>
      {/*From here onwards the service page will start*/}
      <div className='text-center text-white skew-y-3'>

        <h1>Our Best Services</h1>

        <br />
  
  <div className="desc flex flex-wrap justify-center gap-3  text-black max-w-6xl mx-auto">
  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup1}>
    <img src={Engine} alt="Avatar" className="mb-4 object-contain" />
    <h4 className="font-bold text-center text-xs">PERIODIC SERVICE</h4>
  </div>
  <div className="des card flex flex-col items-center justify-center w-full w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup2}>
    <img src={Plumber} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">TYRE AND WHEEL CARE</h4>
  </div>
  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup3}>
    <img src={hr} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">CUSTOM SERVICES</h4>
  </div>
  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup4}>
    <img src={Engine} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">BRAKE MAINTENANCE</h4>
  </div>
  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup5}>
    <img src={Plumber} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">CAR SPA AND CLEANING</h4>
  </div>
  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup6}>
    <img src={hr} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">CLUTCH AND FITMENTS</h4>
  </div>
  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup7}>
    <img src={Engine} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">BATTERIES</h4>
  </div>
  
  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup8}>
    <img src={Plumber} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">DENTING AND PAINTING</h4>
  </div>
  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup9}>
    <img src={hr} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">WINDSHEILD AND LIGHTS</h4>
  </div>
  
  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup10}>
    <img src={Engine} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">INSURANCE</h4>
  </div>
  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup11}>
    <img src={Plumber} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">ROAD SIDE ASSISTANCE</h4>
  </div>
  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup12}>
    <img src={hr} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">ACCESSORIES</h4>
  </div>

  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup13}>
    <img src={Engine} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">DETAILING SERVICE</h4>
  </div>
  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup14}>
    <img src={Plumber} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">AC SERVICE AND REPAIR</h4>
  </div>
  <div className="des card flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4" onClick={togglePopup15}>
    <img src={Plumber} alt="Avatar" className="mb-2 object-contain" />
    <h4 className="font-bold text-center text-xs">SUSPENSION AND FITMENTS</h4>
  </div>
</div>



          {isOpen && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>PERIODIC SERVICES</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Recommended once every 6 months</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil change</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil filter replacement</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Tyre pressure and adjust</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 2,200/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. When is the best time to get this service done?</b></p>
                  <p>A. We would suggest, before going for a long drive or if the car is not being used for a long time.</p>


                  <br /> <br />
                  {/* <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "periodic service", price: 2200 });
                  }}>Add to cart</Button> */}




                </div>
              </div>
            </>}
            handleClose={togglePopup1} />}
          {isOpen2 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Plumber} alt="react logo" />
                <div >
                  <h2>TYRE AND WHEEL CARE</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Recommended once every 6 months</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Wheel Alignment and Balance</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Tyre inspection for tread</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Fitting cost included</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Weight correction</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Takes 4 to 5 hours</p>


                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 2,000/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. After how many Km is this recommended?</b></p>
                  <p>A. This service is recommended once every 6 months or when 5000km’s are completed, whichever occurs first</p>
                  <br /> <br />
                  {/* <Button variant="primary" onClick={() => {
                    addItem({ id: Date.now(), data: "Tyre and wheel care", price: 2000 });
                  }}>Add to cart</Button> */}


                </div>
              </div>
            </>}
            handleClose={togglePopup2} />}
          {isOpen3 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>CUSTOM SERVICES</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Engine oil inspection</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Brake fluid check</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Battery water inspection</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Takes roughly 3 hours</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 700/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. How often is this service recommended?</b></p>
                  <p>A. We would suggest getting the service done every 3-4 months.</p>
                  <br /> <br />
                  {/* <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "Custom service", price: 700 });
                  }}>Add to cart</Button> */}

                </div>
              </div>
            </>}
            handleClose={togglePopup3} />}
          {isOpen4 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>BRAKE MAINTENANCE</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Recommended once every 6 months</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Front brake pads replacement</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Front brake disc cleaning</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Takes roughly 3 hours to complete</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 1,600/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. When is the best time to get this service done?</b></p>
                  <p>A. We would suggest, before going for a long drive or if the car is not being used for a long time.</p>
                  <br /> <br />
                  {/* <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "Brake maintenance", price: 1600 });
                  }}>Add to cart</Button> */}


                </div>
              </div>
            </>}
            handleClose={togglePopup4} />}
          {isOpen5 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>CAR SPA AND CLEANING</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Recommended once every 6 months</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil change</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil filter replacement</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Tyre pressure and adjust</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 2,200/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. When is the best time to get this service done?</b></p>
                  <p>A. We would suggest, before going for a long drive or if the car is not being used for a long time.</p>
                  <br /> <br />
                  {/* <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "Car Spa and Cleaning", price: 2200 });
                  }}>Add to cart</Button> */}


                </div>
              </div>
            </>}
            handleClose={togglePopup5} />}
          {isOpen6 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>CLUTCH AND FITMENTS</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Recommended once every 6 months</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil change</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil filter replacement</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Tyre pressure and adjust</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 1,000/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. When is the best time to get this service done?</b></p>
                  <p>A. We would suggest, before going for a long drive or if the car is not being used for a long time.</p>
                  {/* <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "Clutch and Fitments", price: 1000 });
                  }}>Add to cart</Button> */}


                </div>
              </div>
            </>}
            handleClose={togglePopup6} />}
          {isOpen7 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>BATTERIES</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Recommended once every 6 months</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil change</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil filter replacement</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Tyre pressure and adjust</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 4,500/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. When is the best time to get this service done?</b></p>
                  <p>A. We would suggest, before going for a long drive or if the car is not being used for a long time.</p>
                  {/* <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "Batteries services", price: 4500 });
                  }}>Add to cart</Button> */}


                </div>
              </div>
            </>}
            handleClose={togglePopup7} />}
          {isOpen8 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>DENTING AND PAINTING</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Removal of dent and scratches</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Polishing of surface</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	4-layer painting process for the bumper</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Takes 24 hours for completion</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 2,000/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. When is the best time to get this service done?</b></p>
                  <p>A. We would suggest, before going for a long drive or if the car is not being used for a long time.</p>
                  {/* <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "Denting and painting services", price: 2000 });
                  }}>Add to cart</Button> */}


                </div>
              </div>
            </>}
            handleClose={togglePopup8} />}
          {isOpen9 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>WINDSHEILD AND LIGHTS</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Recommended if there is a crack on the windshield</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Opening and fitting of new windshield</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil filter replacement</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Takes 6 hours for completion</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 9,000/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. How much will it cost for a Maruti Suzuki swift?</b></p>
                  <p>A. The cost for replacement of front glass for a Maruti Suzuki will be 4,800/- to 5,000/-</p>
                  {/* <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "Windsheild and Lights", price: 9000 });
                  }}>Add to cart</Button> */}


                </div>
              </div>
            </>}
            handleClose={togglePopup9} />}
          {isOpen10 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>INSURANCE</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Recommended once every 6 months</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil change</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil filter replacement</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Tyre pressure and adjust</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 1,000/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. When is the best time to get this service done?</b></p>
                  <p>A. We would suggest, before going for a long drive or if the car is not being used for a long time.</p>
                  {/* <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "Insurances", price: 2200 });
                  }}>Add to cart</Button> */}


                </div>
              </div>
            </>}
            handleClose={togglePopup10} />}
          {isOpen11 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>ROAD SIDE ASSISTANCE</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Recommended once every 6 months</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil change</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil filter replacement</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Tyre pressure and adjust</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 2,200/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. What kind of services does Helpy Moto provide under Road Side Assistance?</b></p>
                  <p>A. We offer services under roadside assistance such as  flat-bed towing, wheel-lift towing, battery jumpstarting, and car self-starter issues.</p>
                 {/*  <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "Road side Assistance", price: 2200 });
                  }}>Add to cart</Button> */}


                </div>
              </div>
            </>}
            handleClose={togglePopup11} />}
          {isOpen12 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>ACCESSORIES</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Recommended once every 6 months</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil change</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil filter replacement</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Tyre pressure and adjust</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 5,000/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. When is the best time to get this service done?</b></p>
                  <p>A. We would suggest, before going for a long drive or if the car is not being used for a long time.</p>
                  {/* <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "Accessories", price: 5000 });
                  }}>Add to cart</Button> */}


                </div>
              </div>
            </>}
            handleClose={togglePopup12} />}
          {isOpen13 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>DETAILING SERVICE</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Recommended once every 6 months</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil change</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil filter replacement</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Tyre pressure and adjust</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 2,600/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. When is the best time to get this service done?</b></p>
                  <p>A. We would suggest, before going for a long drive or if the car is not being used for a long time.</p>
                  {/* <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "Detailing services", price: 2600 });
                  }}>Add to cart</Button> */}


                </div>
              </div>
            </>}
            handleClose={togglePopup13} />}
          {isOpen14 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>AC SERVICE AND REPAIR</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Recommended once every 6 months</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil change</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil filter replacement</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Tyre pressure and adjust</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 3,200/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. When is the best time to get this service done?</b></p>
                  <p>A. We would suggest, before going for a long drive or if the car is not being used for a long time.</p>
                  {/* <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "AC Services", price: 3200 });
                  }}>Add to cart</Button> */}


                </div>
              </div>
            </>}
            handleClose={togglePopup14} />}
          {isOpen15 && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
                <img src={Engine} alt="react logo" />
                <div >
                  <h2>SUSPENSION AND FITMENTS</h2>
                  <br />
                  <div className="des_popup_items">
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Recommended once every 6 months</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil change</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Oil filter replacement</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	Tyre pressure and adjust</p>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: "5px", borderRadius: "20px", margin: "5px" }}>•	 Only 1,200/-</p>


                  </div>
                  <br />
                  <h4>FAQ</h4>
                  <p><b>Q. When is the best time to get this service done?</b></p>
                  <p>A. We would suggest, before going for a long drive or if the car is not being used for a long time.</p>
                 {/*  <Button variant="primary" style={{ marginLeft: "80%" }} onClick={() => {
                    addItem({ id: Date.now(), data: "Suspension and Fitments", price: 1200 });
                  }}>Add to cart</Button> */}

                </div>
              </div>
            </>}
            handleClose={togglePopup15} />}



        </div>

        

    
      </div>
    
    
    
  )
}

export default Description