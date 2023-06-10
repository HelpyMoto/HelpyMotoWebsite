import React from "react";
import "../styles/newaccount.css";
import { Link } from 'react-router-dom'


const newaccount = () => {
 
return (  

  <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
    <h2 className="text-2xl font-bold text-center mb-4">Registration Form</h2>
    <form className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:space-x-3">
        <div className="flex-grow">
          <input
            required
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter First Name"
            type="text"
          />
        </div>
        <div className="flex-grow">
          <input
            required
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter Last Name"
            type="text"
          />
        </div>
      </div>
      
      <div className="space-y-4">
      
        <input
          required
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Enter Phone Number"
          type="text"
        />
     
     <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-2">
          <input
            required
            className="border border-gray-300 rounded-md p-2 flex-grow"
            placeholder="Enter OTP"
            type="text"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Send OTP
          </button>
        </div>
      </div>
      
      <button className="submit bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">
        Submit
      </button>
      <p className="text-center text-sm">
        Already have an account? <Link to="/LoginPage">Sign In</Link>
      </p>
    </form>
  </div>
</div>

  );
};

export default newaccount;
