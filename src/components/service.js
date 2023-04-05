import React, { useEffect, useState } from "react";
import NewNavbar from "./newnavbar";
import Cart from "./your_cart";

import "../styles/service.css";

const Service = () => {
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
  };
  const deleteByIndex = (index) => {
    let items = [...item];
    console.log(index);
    let updatedItems = items.filter((val) => val.id !== index);
    setItem(updatedItems);

    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };
  return (
    <div id="service">
        <NewNavbar/>
      <Cart
        content={
          <>
            <h1>Your Cart</h1>
            {item.map((v) => (
              <div
                key={v.id}
                style={{
                  height: "40px",
                  width: "90%",
                  marginLeft: "5%",
                  border: "1px solid black",
                  color: "black",
                }}
              >
                {v.data}
                {"   "}
                <button
                  onClick={() => deleteByIndex(v.id)}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        }
      />
      <br /> <br />
      <h1 style={{ textAlign: "center", fontSize: "80px" }}>Services</h1>
      <br />
      <h2 style={{ marginLeft: "3%" }}>Periodic Services</h2>
      <br />
      <div className="periodic_service">
        <div className="periodic_service_item">
          Basic Service
          <br /> <br /> 
          <li>Recommended once every 6 months</li>
          <li>Oil change</li>
          <li>Oil filter replacement</li>
          <li>Tyre pressure and adjust</li>
          <li>Only 2,200</li>
          <br /><br /><br /> <br />
          <button
            onClick={() => {
              addItem({ id: Date.now(), data: "basic service" });
            }}
            style={{
              color: "white",
              // backgroundColor: "rgb(0, 144, 255)",
              // marginLeft: "50px",
              backgroundColor: "rgb(255, 143, 99)",
              marginLeft: "4%",
              width:"90%"
            }}
          >
            Add Item
          </button>
        </div>
        <div className="periodic_service_item">
          Comprehensive Service
          <br /> <br />
          <li>Recommended once every 6 months</li>
          <li>Oil change</li>
          <li>Oil filter replacement</li>
          <li>Check on the break</li>
          <li>Only 3,500</li>
          <br />
          <br /> <br /> <br />
          <button
            onClick={() => {
              addItem({ id: Date.now(), data: "Comprehensive service" });
            }}
            style={{
              color: "white",
              // backgroundColor: "rgb(0, 144, 255)",
              // marginLeft: "50px",
              backgroundColor: "rgb(255, 143, 99)",
              marginLeft: "4%",
              width:"90%"
            }}
          >
            Add Item
          </button>
        </div>
        <div className="periodic_service_item">
          Standard Service
          <br /> <br />
          <li>Recommended once every 6 months</li>
          <li>Oil change</li>
          <li>Oil filter replacement</li>
          <li>Tyre pressure and adjust</li>
          <li>Only 2,200</li>
          <br />
          <br /><br /> <br />
          <button
            onClick={() => {
              addItem({ id: Date.now(), data: "Standard Service" });
            }}
            style={{
              color: "white",
              // backgroundColor: "rgb(0, 144, 255)",
              backgroundColor: "rgb(255, 143, 99)",
              marginLeft: "4%",
              width:"90%"
              
            }}
          >
            Add Item
          </button>
        </div>
        <div className="periodic_service_item">
          50 Point Services
          <br /> <br />
          <li>Recommended once every 6 months</li>
          <li>Oil change</li>
          <li>Oil filter replacement</li>
          <li>Tyre pressure and adjust</li>
          <li>Only 2,200</li>
          <br />
          <br /><br /> <br />
          <button
            onClick={() => {
              addItem({ id: Date.now(), data: "50 point service" });
            }}
            style={{
              color: "white",
              // backgroundColor: "rgb(0, 144, 255)",
              // marginLeft: "50px",
              backgroundColor: "rgb(255, 143, 99)",
              marginLeft: "4%",
              width:"90%"
            }}
          >
            Add Item
          </button>
        </div>
      </div>
      <h2>Tyre and Wheel Care </h2>
      <br />
      <br />
      <div className="tyres_service">
        <div className="tyre_included">
          <div className="tyre_service_first_item">
            Complete Wheel Care
            <br /> <br />
            <li>Recommended once every 6 months</li>
            <li>Oil change</li>
            <li>Oil filter replacement</li>
            <li>Tyre pressure and adjust</li>
            <li>Only 2,200</li>
            <br />
            <br />
            <button
              onClick={() => {
                addItem({ id: Date.now(), data: "Full wheel Care" });
              }}
              style={{
                color: "white",
                // backgroundColor: "rgb(0, 144, 255)",
                // marginLeft: "50px",
                backgroundColor: "rgb(255, 143, 99)",
                marginLeft: "4%",
                width:"90%"
              }}
            >
              Add Item
            </button>
          </div>
          <div className="tyre_service_first_item">
            Mud Flaps
            <br /> <br />
            <li>Recommended once every 6 months</li>
            <li>Oil change</li>
            <li>Oil filter replacement</li>
            <li>Tyre pressure and adjust</li>
            <li>Only 2,200</li>
            <br />
            <br />
            <button
              onClick={() => {
                addItem({ id: Date.now(), data: "Mud Flaps" });
              }}
              style={{
                color: "white",
                // backgroundColor: "rgb(0, 144, 255)",
                // marginLeft: "50px",
                backgroundColor: "rgb(255, 143, 99)",
                marginLeft: "4%",
                width:"90%"
              }}
            >
              Add Item
            </button>
          </div>
        </div>
        <br />
        <br />
        <h3>Tyre Include</h3>
        <br />
        <div className="tyre_included">
          <div className="tyre_included_item">Apollo</div>
          <div className="tyre_included_item">JK</div>
          <div className="tyre_included_item">Ceat</div>
        </div>
      </div>
      <br /> <br />
      <h2>Custom Service</h2>
      <br />
      <div className="custom_service">
        <div className="custom_service_item">Car fluids check</div>
        <div className="custom_service_item">
          Complete Suspension Inspection
        </div>
        <div className="custom_service_item">Engine Scanning</div>
        <div className="custom_service_item">EPS Module Repair</div>
      </div>
      <br /> <br />
      <h2>Brake maintenance</h2>
      <br />
      <div className="brake_maintenance">
        <div className="brake_maintanence_item">Front Brake pads</div>
        <div className="brake_maintanence_item">Rear Brake Shoes</div>
        <div className="brake_maintanence_item">Front Brake Discs</div>
        <div className="brake_maintanence_item">Caliper Pin Replacement</div>
      </div>
      <br />
      <br />
      <br />
      <div className="brake_maintenance">
        <div className="brake_maintanence_item">Disc Turning</div>
        <div className="brake_maintanence_item">Handbrake Wire Replacement</div>
        <div className="brake_maintanence_item">Brake Drums Turning</div>
        <div className="brake_maintanence_item">Wheel Cylinder Replacement</div>
      </div>
      <br /> <br />
      <h2>AC services</h2>
      <br />
      <div className="ac_service">
        <br />
        <br />
        <h3>service packages</h3>
        <br />
        <br />
        <div className="service_package">
          <div className="service_package_item">
            High Performance AC service
          </div>
          <div className="service_package_item">Regular AC service</div>
        </div>
        <br />
        <br />
        <h3>AC fitment</h3>
        <br />
        <div className="ac_fitment">
          <div className="ac_fitments_item">heating Coil Replacement</div>
          <div className="ac_fitments_item">V-Belt Replacement</div>
          <div className="ac_fitments_item">AC Blower Motor Replacement</div>
          <div className="ac_fitments_item">Compressor Replacement</div>
          <div className="ac_fitments_item">Condenser Replacement</div>
          <div className="ac_fitments_item">Cooling Coil Replacement</div>
        </div>
        <br />
        <br />
        <h3>Radiator</h3>
        <br />
        <div className="radiator">
          <div className="radiator_item">Radiator Flush and clean</div>
          <div className="radiator_item">Radiator Fan Motor Replacement</div>
          <div className="radiator_item">Radiator replacement</div>
        </div>
      </div>
      <br /> <br />
      <h2>Car spa and cleaning</h2>
      <br />
      <div>
        <div className="sunroof_service">Sunroof Service</div>
        <br />
        <br />
        <h3>Spa</h3>
        <br />
        <div className="spa">
          <div className="spa_item">Deep All Round Services</div>
          <div className="spa_item">Car Rubbing and polishing</div>
          <div className="spa_item">Rat / Pest repellant Treatment</div>
          <div className="spa_item">Car Interior Spa</div>
        </div>
        <br />
        <br />
        <h3>Inspection</h3>
        <br />
        <div className="inspection_service">Car Inspection</div>
      </div>
      <br /> <br />
      <h2>Clutch and Fitments</h2>
      <br />
      <div className="clutch">
        <div className="clutch_item">clutch bearing replacement</div>
        <div className="clutch_item">clutch overhaul</div>
        <div className="clutch_item">clutch set replacement</div>
        <div className="clutch_item">flywheel turning</div>
        <div className="clutch_item">flywheel replacement</div>
        <div className="clutch_item">clutch and transmission trubles</div>
      </div>
      <br /> <br />
      <h2>Suspension and Fitments</h2>
      <br />
      <div>
        <br />
        <br />
        <h3>Suspension</h3>
        <br />
        <div className="suspension">
          <div className="suspension_item">
            Front Shock Absorber Replacement
          </div>
          <div className="suspension_item">Rear Shock Absorber Replacement</div>
          <div className="suspension_item">
            Suspension Lower Arm Replacement
          </div>
          <div className="suspension_item">Link Rod Replacement</div>
        </div>
        <br /> <br />
        <div className="suspension">
          <div className="suspension_item">Tie Rod Replacement</div>
          <div className="suspension_item">Complete Suspension Inspection</div>
          <div className="suspension_item">Front Shocker Mount Replacement</div>
          <div className="suspension_item">Front Axle Repair</div>
        </div>
        <br />
        <br />
        <h3>Fitments</h3>
        <br />
        <div className="suspension">
          <div className="suspension_item">Silencer Repair</div>
          <div className="suspension_item">Gear Box Mounting Replacement</div>
          <div className="suspension_item">Engine Mounting Replacement</div>
          <div className="suspension_item">Fuel Pump Replacement</div>
        </div>
        <br /> <br />
        <div className="suspension">
          <div className="suspension_item">Water Pump Replacement</div>
          <div className="suspension_item">ECM Repair</div>
          <div className="suspension_item">Dickey Shocker Replacement</div>
          <div className="suspension_item">Starter Motor Repair</div>
        </div>
        <br /> <br />
        <div className="suspension">
          <div className="suspension_item">Horn Replacement</div>
          <div className="suspension_item">Door Latch Replacement</div>
          <div className="suspension_item">Power Window Repair</div>
        </div>
        <br />
        <br />
        <h3>Custom Issues</h3>
        <br />
        <div className="service_package">
          <div className="service_package_item">
            Noises with Car Suspension & Steering
          </div>
          <div className="service_package_item">Faulty Electricals</div>
        </div>
        <br />
        <br />
        <h3>Steering</h3>
        <br />
        <div className="service_package">
          <div className="service_package_item">EPS Module Repair</div>
          <div className="service_package_item">Steering Rack Repair</div>
        </div>
      </div>
      <br />
      <br />
      <h2>Batteries</h2>
      <br />
      <div className="custom_service">
        <div className="custom_service_item">Alternator Repair</div>
        <div className="custom_service_item">Alternator Replacement</div>
        <div className="custom_service_item">Amaron Battery</div>
        <div className="custom_service_item">Exide Battery</div>
      </div>
      <br /> <br />
      <h2>Detailing services</h2>
      <br />
      <div className="brake_maintenance">
        <div className="brake_maintanence_item">
          3M Anti Rust underbody Coating
        </div>
        <div className="brake_maintanence_item">3M Car Rubbing & polishing</div>
        <div className="brake_maintanence_item">Meguiar's Ceramic Coating</div>
        <div className="brake_maintanence_item">3M Ceramic Coating</div>
      </div>
      <br />
      <br />
      <br />
      <div className="brake_maintenance">
        <div className="brake_maintanence_item">3M Teflon Coating</div>
        <div className="brake_maintanence_item">Meguiar's Teflon Coating</div>
        <div className="brake_maintanence_item">PPF</div>
        <div className="brake_maintanence_item">Silencer Coating</div>
      </div>
      <br /> <br />
      <h2>Denting and Painting</h2>
      <br />
      <div>
        <br />
        <br />
        <h3>Front Side</h3>
        <br />
        <div className="service_package">
          <div className="service_package_item">front bumper</div>
          <div className="service_package_item">Bonnet paint</div>
        </div>
        <br />
        <br />
        <h3>Rear Side</h3>
        <br />
        <div className="service_package">
          <div className="service_package_item">Boot paint</div>
          <div className="service_package_item">Rear Bumper Paint</div>
        </div>
        <br />
        <br />
        <h3>Whole Body</h3>
        <br />
        <div className="service_package">
          <div className="service_package_item">full body Dent paint</div>
          <div className="service_package_item">Alloy Paint</div>
        </div>
        <br />
        <br />
        <h3>left Side</h3>
        <br />
        <div className="suspension">
          <div className="home_delivery_item">Left Fender Paint</div>
          <div className="home_delivery_item">Left Front Door Paint</div>
          <div className="home_delivery_item">Left Rear Door Paint</div>
          <div className="home_delivery_item">Left Quarter Panel Paint</div>
          <div className="home_delivery_item">Left Running Board Paint</div>
        </div>
        <br />
        <br />
        <h3>Right Side</h3>
        <br />
        <div className="suspension">
          <div className="home_delivery_item">Right Fender Paint</div>
          <div className="home_delivery_item">Right Front Door Paint</div>
          <div className="home_delivery_item">Right Rear Door Paint</div>
          <div className="home_delivery_item">Right Quarter Panel Paint</div>
          <div className="home_delivery_item">Right Running Board Paint</div>
        </div>
      </div>
      <br /> <br />
      <h2>Windshied & Lights</h2>
      <br />
      <div>
        <br />
        <br />
        <h3>Windsheild</h3>
        <br />
        <div className="tyre_included">
          <div className="tyre_included_item">Front glass replacement</div>
          <div className="tyre_included_item">Rear windshield replacement</div>
          <div className="tyre_included_item">Door Glass replacement</div>
        </div>
        <br />
        <br />
        <h3>Lights</h3>
        <br />
        <div className="tyre_included">
          <div className="tyre_included_item">Front Headlight</div>
          <div className="tyre_included_item">Rear Taillight</div>
          <div className="tyre_included_item">Fog Light</div>
        </div>
      </div>
      <br />
      <br />
      <h2>Road side assistance</h2>
      <br />
      <div className="inspection_service">RSA</div>
      <br /> <br />
      <h2>Accessories</h2>
      <br />
      <div>
        <br />
        <br />
        <h3>At shop Installation</h3>
        <br />
        <div className="suspension">
          <div className="suspension_item">Seat Covers</div>
          <div className="suspension_item">Android Screen</div>
          <div className="suspension_item">Speaker and Bass Tube</div>
          <div className="suspension_item">Cameras</div>
        </div>
        <br /> <br />
        <div className="suspension">
          <div className="suspension_item">Floor Mats</div>
          <div className="suspension_item">Tyre Inflators</div>
          <div className="suspension_item">Air Purifiers & Freshments</div>
          <div className="suspension_item">Alloy Wheels</div>
        </div>
        <br />
        <br />
        <h3>At Home Delivery</h3>
        <br />
        <div className="suspension">
          <div className="home_delivery_item">Screens & Speakers</div>
          <div className="home_delivery_item">Car Care & Purifiers</div>
          <div className="home_delivery_item">Horns & Protectives</div>
          <div className="home_delivery_item">Lights & Chargers</div>
          <div className="home_delivery_item">Roadside Assistance</div>
        </div>
      </div>
      <br /> <br />
      <h2>Insurance Claims</h2>
      <br />
      <div>
        <div className="sunroof_service">know your policy</div>
        <br />
        <br />
        <h3>Accidental Repairs</h3>
        <br />
        <div className="spa">
          <div className="spa_item">
            Accidental Denting & Painting (Insurance)
          </div>
          <div className="spa_item">Car Flood Damage (Insurance)</div>
          <div className="spa_item">Fire Damage Assistance (Insurance)</div>
          <div className="spa_item">Windshield Replacement (Insurance)</div>
        </div>
        <br />
        <br />
        <h3>Theft / Lost</h3>
        <br />
        <div className="suspension">
          <div className="home_delivery_item">Key Replacement (Insurance)</div>
          <div className="home_delivery_item">
            Tyres & Wheel Replacement (Insurance)
          </div>
          <div className="home_delivery_item">
            Battery Replacement (Insurance)
          </div>
          <div className="home_delivery_item">Car Theft Claim (Insurance)</div>
          <div className="home_delivery_item">ECM Replacement (Insurance)</div>
        </div>
        <br />
        <br />
        <h3>Inspection</h3>
        <br />
        <div className="tyre_included">
          <div className="tyre_included_item">
            Doorstep Accidental Inspection
          </div>
          <div className="tyre_included_item">Towing (Insurance)</div>
          <div className="tyre_included_item">Insurance Claim Inspection</div>
        </div>
      </div>
    </div>
  );
};

export default Service;
