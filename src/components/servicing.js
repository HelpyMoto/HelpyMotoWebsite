import React from "react";
import '../styles/servicing.css'
import Service1 from "../assets/service-1.jpg";
import Service2 from "../assets/service-2.jpg";
import Service3 from "../assets/service-3.jpg";
import Service4 from "../assets/service-4.jpg";
import { Slide } from 'react-awesome-reveal';


export default function Service() {
  return (
    <>
     <Slide direction="left">
   <h3 className="text-center text-3xl font-bold text-black-600 my-4">
  Why Choose Helpy Moto Services?
  </h3>
  </Slide>
<div className="flex flex-wrap justify-center">
  <div className="w-full mr-3 sm:w-1/2 md:w-1/2 lg:w-1/4">
    <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
      <img src={Service1} className="w-full h-40 object-cover" alt="Service 1" />
      <div className="p-4">
        <h5 className="text-lg font-bold text-gray-900 mb-2">Available Anytime, Anywhere</h5>
        <p className="text-gray-900">
          We are available 24/7 throughout India. Hire a mechanic anytime, anywhere with just a few details. It's all at your fingertips.
        </p>
      </div>
    </div>
  </div>

  <div className="w-full mr-3 sm:w-1/2 md:w-1/2 lg:w-1/4">
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
      <img src={Service2} className="w-full h-40 object-cover" alt="Service 2" />
      <div className="p-4">
        <h5 className="text-lg font-bold text-gray-900 mb-2">Fair Service Cost</h5>
        <p className="text-gray-900">
          We offer fair and transparent pricing for our services. Say goodbye to hidden fees and unexpected charges.
        </p>
      </div>
    </div>
  </div>

  <div className="w-full mr-3 sm:w-1/2 md:w-1/2 lg:w-1/4">
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
      <img src={Service3} className="w-full h-40 object-cover" alt="Service 3" />
      <div className="p-4">
        <h5 className="text-lg font-bold text-gray-900 mb-2">Use Quality Spare Parts</h5>
        <p className="text-gray-900">
          We only use high-quality spare parts for repairs and services, ensuring your vehicle receives the best treatment.
        </p>
      </div>
    </div>
  </div>

  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
      <img src={Service4} className="w-full h-40 object-cover" alt="Service 4" />
      <div className="p-4">
        <h5 className="text-lg font-bold text-gray-900 mb-2">Proven Safety Mechanism</h5>
        <p className="text-gray-900">
          Our highly trained and experienced mechanics follow strict safety procedures, prioritizing your safety and your vehicle's well-being.
        </p>
      </div>
    </div>
  </div>
</div>

      
    </>
  );
}
