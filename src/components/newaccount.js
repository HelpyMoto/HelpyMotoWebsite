import React from "react";
import "../styles/newaccount.css";
import { Link } from 'react-router-dom'
const newaccount = () => {
  return (
    <div className="containerup">
      <form className="formup" action='#!' method='post'>
        <p className="titleup">Registeration Form </p>
        {/* <p className="messageup">Signup now and get full access to our app. </p> */}
        <div className="flex">
          <label>
            <input
              required=""
              placeholder="Firstname"
              type="text"
              className="input"
            />
          </label>
          <label>
            <input
              required=""
              placeholder="Lastname"
              type="text"
              className="input"
            />
          </label>
        </div>
        <label>
          <input
            required=""
            placeholder="mobile No"
            type="text"
            className="input"
          />
        </label>
        <label>
          <input
            required=""
            placeholder="Email"
            type="email"
            className="input"
          />
        </label>
        <label>
          <input
            required=""
            placeholder="Password"
            type="password"
            className="input"
          />
        </label>
        <label>
          <input
            required=""
            placeholder="Confirm password"
            type="password"
            className="input"
          />
        </label>
        <button className="submitup">Submit</button>
        <p className="signin">
          Already have an acount ? <Link to="/LoginPage">Signin</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default newaccount;
