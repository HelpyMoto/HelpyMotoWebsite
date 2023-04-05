import React, { useEffect, useRef, useState } from "react";
import "../styles/hire.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Hire = () => {
  const [fields, setFields] = useState(() => ({
    name: "",
    type: "",
    problem: "",
    location: "",
  }));
  const [error, setError] = useState(() => ({}));

  const firstUpdate = useRef(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    // errorValidationHandler();
  }, [fields]);

  const onChangeHandler = (name, value) => {
    if (value) {
      setFields({ ...fields, [name]: value });
    }
  };

  const errorValidationHandler = () => {
    const initialError = { ...error };

    Object.keys(fields).forEach((field) => {
      if (field === "name") {
        if (fields[field].length < 4) {
          initialError[field] = "Name should be 4 characters long";
        } else {
          delete initialError[field];
        }
      }
      else if (field === "type") {
        const typesArr = [
          "suv",
          "micro",
          "hatchback",
          "sedan",
          "wagon",
          "mvp",
          "coupe",
        ];
        let ipVal = fields[field].toLowerCase();
        if (!typesArr.includes(ipVal)) {
          initialError[field] = "Enter valid Vahicle Type";
        } else {
          delete initialError[field];
        }
      }
      else if(field === "problem"){
        if (fields[field].length < 4) {
            initialError[field] = "Enter the valid problem ";
          } else {
            delete initialError[field];
          }
        

      }
      else if (field === "location") {
        if (fields[field].length < 4) {
          initialError[field] = "Please, enter valid location";
        } else {
          delete initialError[field];
        }
      }
    });
    setError({ ...initialError });
    return Object.keys(initialError).length ? error : null;
  };

  const onSubmitHandler = (e) => {
    
    //
    
    e.preventDefault();
    navigate("/mechlist");
  
    if (errorValidationHandler()) {
      console.log(error);
    } else {
      const customer_details = { ...fields };
      console.log(customer_details);
      axios
        .post("/api/users/hire", customer_details)
        .then(() => console.log("this is onsubmit handlker", customer_details))
        .catch((err) => {
          console.error("error detected");
        });
    }
  };

  return (
    <div className="hire">
      <br />
      <br />
      <h1>Customer Details</h1>
      <br />
      <br />
      <div className="hire_container">
        <h4>Please, Write your problem here</h4>
        <br />
        <br />
        <Form method="post" onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Enter Your Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              className="hire_form_control"
              onChange={(e) => onChangeHandler("name", e.target.value)}
            />
            {error?.name ? <p className="error">{error.name}</p> : null}
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              {" "}
              <b>Type of vehicle</b>
            </Form.Label>
            <Form.Control
              type="text"
              className="hire_form_control"
              onChange={(e) => onChangeHandler("type", e.target.value)}
            />
            {error?.type ? <p className="error">{error.type}</p> : null}
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              {" "}
              <b>Specify your vehicle problem</b>
            </Form.Label>
            <Form.Control
              type="text"
              className="hire_form_control"
              onChange={(e) => onChangeHandler("problem", e.target.value)}
            />
            {error?.problem ? <p className="error">{error.problem}</p> : null}
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Enter your Location</b>
            </Form.Label>
            <Form.Control
              type="text"
              className="hire_form_control"
              onChange={(e) => onChangeHandler("location", e.target.value)}
            />
            {error?.location ? <p className="error">{error.location}</p> : null}
          </Form.Group>
          <br />

          <Button variant="primary" type="submit" className="hire_btn">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Hire;
