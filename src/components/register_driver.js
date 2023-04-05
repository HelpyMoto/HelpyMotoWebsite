import React from 'react'
import "../styles/register_mechanic.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';



const register_driver = () => {
    return (
        <div className='register_mechanic'>
            <div className='register_first'>

                <h1 className='register_head1'>HM</h1>
                <h4 className='register_head2'>For Unstoppable Journey</h4>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Button variant="primary" className='register_first_btn'>Primary</Button>
            </div>
            <div className='register_second'>
                <div className='register_mechanic_card'>
                    <br />
                    <Link to="/loginmechanic" style={{ marginLeft: "75%" }}>Already member ?</Link>
                    <br />
                    <br />


                    <div className='register_mechanic_flex1'>
                        <h1>GET STARTED</h1>
                        <br />
                        <br />
                        <br />
                        <br />

                        <p>We need you to help us with some basic information for your account creation. Here are our <a href='terms'>terms and conditions</a>. Please read them carefully. We are GDRP compilant</p>

                    </div>
                    <br />
                    <div className='register_mechanic_flex2'>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label><b>First name</b></Form.Label>
                                    <Form.Control />
                                </Col>
                                <Col>
                                    <Form.Label><b>Last name</b></Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <Form.Label><b>License number</b></Form.Label>
                                    <Form.Control />
                                </Col>
                                <Col>
                                    <Form.Label><b>E-mail</b></Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <Form.Label><b>Phone number</b></Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                                        <Form.Control
                                            
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <Form.Label><b>Years of experience</b></Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <Form.Label><b>Password</b></Form.Label>
                                    <Form.Control />
                                </Col>
                                <Col>
                                    <Form.Label><b>Confirm Password</b></Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>
                            <br />
                            <br />

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="I agree with terms and conditions" />
                                        
                                    </Form.Group>
                                </Col>
                            
                                <Col>
                                    <Button variant="primary" type="submit" className='register_second_btn'>
                                        Register
                                    </Button>
                                </Col>
                            </Row>

                        </Form>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default register_driver