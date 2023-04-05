import React from "react";
import "../styles/signup_user.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

const signup_user = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="first_container">
        <h1 className="heading1">HM</h1>
        <h4 className="heading2">For Unstoppable Journey</h4>
        <h1 className="heading3">
          Stuck at travelling?yes, you are at right place to seek help!
        </h1>
        <Button variant="primary" id="signup_role_btn">
          Back to role selection
        </Button>{" "}
      </div>
      <div className="page">
        <div className="container">
          <h2>Welcome Back!</h2>
          <h2>Sign Up to access</h2>
          <br />

          <Form>
            <Row>
              <Col>
                <Form.Label>First name</Form.Label>
                <Form.Control />
              </Col>
              <Col>
                <Form.Label>Last name</Form.Label>
                <Form.Control />
              </Col>
            </Row>
            <Form.Label>Phone number</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <div className="flexing">
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I agree with terms and conditions"
                />
              </Form.Group>
              {/* <a href='11'>Forgot password?</a> */}
            </div>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br />
            <br />

            <div className="form_text2">
              <p>Or Signup with</p>
            </div>
            <br />

            <Button variant="outline-primary" className="social_media_btn">
              Login Via Facebook
            </Button>
            <br />
            <br />

            <Button variant="outline-primary" className="social_media_btn">
              Login Via Google
            </Button>
            <br />
            <br />

            <div className="form_text">
              <p>Already have an account?</p>
              <Link to="/loginuser">Log in</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default signup_user;
