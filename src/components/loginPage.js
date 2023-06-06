import React from 'react'
import '../styles/signup_user.css'
import { Link } from 'react-router-dom'
const loginPage = () => {
  
  return (
    <>
  <div className="flex items-center justify-center h-screen">
  <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
    <h2 className="text-2xl font-bold text-center mb-4">Login Form</h2>
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
      <div className="google-login flex justify-center mt-4">
      <button aria-label="Log in with Google" className="icon bg-white rounded-full p-2 mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-5 h-5 fill-current text-gray-800"
        >
          <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
        </svg>
      </button>
      </div>
      <p className="text-center text-sm">
        Do have an account? <Link to="/Newaccount">Sign Up</Link>
      </p>
    </form>
  </div>
</div>
</>
  )
}

export default loginPage