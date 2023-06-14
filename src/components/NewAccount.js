import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import OTPInput from 'react-otp-input';


const NewAccount = () => {

  const [otp, setOtp] = useState('');

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const isOtpFilled = otp.length === 6;

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

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Send OTP
            </button>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-2">
              <OTPInput
                value={otp}
                onChange={handleOtpChange}
                numInputs={6}
                renderSeparator={<span className="mx-2">-</span>}
                renderInput={(props) => <input {...props} />}
                shouldAutoFocus={true}
              />

            </div>
          </div>

          <button className={`submit bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full ${isOtpFilled ? '' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!isOtpFilled}>
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

export default NewAccount;