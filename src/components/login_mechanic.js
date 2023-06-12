/* 


import React from 'react'
import "../styles/login.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const login_mechanic = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className='first_container'>
        <h1 className='heading1'>HM</h1>
        <h4 className='heading2'>For Unstoppable Journey</h4>


        <h1 className='heading3'>Stuck at travelling?yes,  you are at right place to seek help!</h1>

        <Button variant="primary" className='back_role_btn'>Back to role selection</Button>

      </div>
      <div className='page'>
        <div className='container'>
          <h2>Welcome Back!</h2>
          <h2>Log in to your account</h2>
          <br />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mechanic ID/Phone Number/Email</Form.Label>
              <Form.Control type="email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <div className='flexing'>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Link to="/passwordreset">Forgot password?</Link>
            </div>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
            
        
            

            <div className='form_text'>
              <p>Don't have an account?</p>
              <Link to="/registermechanic">Register</Link>

            </div>
            
            <div className='form_text2'>
              <p>Or Login with</p>
            </div>
            <br/>
            


            <Button variant="outline-primary" className='social_media_btn'>Login Via Facebook</Button>
            <br/>
            <br/>
            
            <Button variant="outline-primary" className='social_media_btn'>Login Via Google</Button>



          </Form>

        </div>

      </div>
    </div>
  )
}

export default login_mechanic

/*
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const LoginMechanic = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text-center">
            <h1>HM</h1>
            <h4>For Unstoppable Journey</h4>
            <h1>Stuck at travelling? Yes, you are at the right place to seek help!</h1>
            <Button variant="primary">Back to role selection</Button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-center">
            <h2>Welcome Back!</h2>
            <h2>Log in to your account</h2>
            <br />

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Mechanic ID/Phone Number/Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Link to="/passwordreset">Forgot password?</Link>
              </div>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br />
              <br />

              <div>
                <p>Don't have an account?</p>
                <Link to="/registermechanic">Register</Link>
              </div>

              <div>
                <p>Or Login with</p>
              </div>
              <br />

              <Button variant="outline-primary">Login Via Facebook</Button>
              <br />
              <br />

              <Button variant="outline-primary">Login Via Google</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMechanic;
*/
/*
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const LoginMechanic = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text-center">
            <h1>HM</h1>
            <h4>For Unstoppable Journey</h4>
            <h1>Stuck at travelling? Yes, you are at the right place to seek help!</h1>
            <Button variant="primary">Back to role selection</Button>
          </div>
        </div>
        <div className="col-md-6">
          <Card className="p-4">
            <div className="text-center">
              <h2>Welcome Back!</h2>
              <h2>Log in to your account</h2>
            </div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Mechanic ID/Phone Number/Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Link to="/passwordreset">Forgot password?</Link>
              </div>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br />
              <br />

              <div>
                <p>Don't have an account?</p>
                <Link to="/registermechanic">Register</Link>
              </div>

              <div>
                <p>Or Login with</p>
              </div>
              <br />

              <Button variant="outline-primary">Login Via Facebook</Button>
              <br />
              <br />

              <Button variant="outline-primary">Login Via Google</Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginMechanic;

*/

 