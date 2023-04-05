import React from "react";
import '../styles/servicing.css'
import Service1 from "../assets/service-1.jpg";
import Service2 from "../assets/service-2.jpg";
import Service3 from "../assets/service-3.jpg";
import Service4 from "../assets/service-4.jpg";



export default function Service() {
  return (
    <>
      <h3 className="text-center test-success my-5">
        Why Service of Helpy Moto?
      </h3>
      <div className="card-deck ml-5 mr-5">
  <div className="card">
    <img src={Service1} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Available anytime, anywhere</h5>
      <p className="card-text">
        We are available 24/7 throughout India. You can hire a mechanic anytime through our app or website after filling in a few details. Everything will be at your fingertips only.
      </p>
    </div>
  </div>

  <div className="card">
    <img src={Service2} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Fair service cost</h5>
      <p className="card-text">
        We offer fair and transparent pricing for our services, so you never have to worry about hidden fees or charges. 
      </p>
    </div>
  </div>

  <div className="card">
    <img src={Service3} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Use quality spare parts</h5>
      <p className="card-text">
        We only use high-quality spare parts for all our repairs and services, ensuring that your vehicle is in good hands. 
      </p>
    </div>
  </div>

  <div className="card">
    <img src={Service4} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Proven safety mechanism</h5>
      <p className="card-text">
        Our team of mechanics are highly trained and experienced, and we follow strict safety procedures to ensure the safety of our customers and their vehicles. 
      </p>
    </div>
  </div>
</div>

      
    </>
  );
}
