import React from "react";
import "../styles/newaccount.css";
import { Link } from 'react-router-dom'

const newaccount = () => {
 
return (  
<>
  <div className="flex items-center justify-center h-screen">
  <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
    <h2 className="text-2xl font-bold text-center mb-4">Registration Form</h2>
    <form className="space-y-4">
      <div className="flex space-x-4">
        <div className="w-1/2">
          <input
            required
            placeholder="Enter First Name"
            type="text"
          />
        </div>
        <div className="w-1/2">
          <input
            required
            placeholder="Enter Last Name"
            type="text"
          />
        </div>
      </div>
      
      <div className="space-y-2">
      
        <input
          required
          placeholder="Enter Phone Number"
          type="text"
        />
     
        <input
          required
          placeholder="Enter OTP"
          type="text"
        />
     
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
</>

  );
};

export default newaccount;
