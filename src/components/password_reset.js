import React from 'react'
import "../styles/password_reset.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


const password_reset = () => {
    return (
        <div className='password_reset'>
            <div className='first_container'>
                <h1 className='heading1'>HM</h1>
                <h4 className='heading2'>For Unstoppable Journey</h4>



            </div>
            <br />
            <div id='forgot_password'>
                <h2>Forgot password ? </h2>
                <br/>
                <p>Don't worry we can help you out!</p>
                <p>just input that information in the fields below and click on the button. This will send you a new email that link you to the password change website.</p>
                
                
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Enter your E-mail</b></Form.Label>
                        <Form.Control type="email" id="forgot_input"/>

                    </Form.Group>

 





                
                        <p className='small_text'>Use mobile number</p>
                        

                    
                    
                    <Button variant="primary" type="submit" id='password_reset_btn'>
                        Request password Change
                    </Button>
        
                </Form>



            </div>
        </div>
    )
}

export default password_reset