import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
const SignUp = () => {
  
return (
    <div>
    
    <div className='container-fluid p-5'>
        
        <Row className="mt-3"> 
        <Col lg={4} md={5} sm={12} className="p-3 m-auto shadow-sm rounded-lg">
        <Form className='rounded p-4 p-sm-3 text-bg-light'>
        
        <h1 className="text-primary mb-2 m-3 p-3 text-center rounded">Sign Up</h1>
        {/* className="col-md-5 col-sm-6 col-xl-3 mb-3" */}
          
          
            <Form.Group className='mb-3'>  
            <FloatingLabel className='mb-3' controlId="floatingInput" label="First Name" >
                    <Form.Control type="text" placeholder="First Name" />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingInput" label="Last Name" >
                    <Form.Control type="text" placeholder="Last Name" />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatinginput" label="Email address"  >
                    <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>


            <FloatingLabel className='mb-3' controlId="floatingPassword" label="Password"  >
                    <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingPassword" label="Confirm Password"  >
                    <Form.Control type="password" placeholder="Confirm Password" />
            </FloatingLabel>

          </Form.Group>
            <Button className='mt-2 mb-3' variant='primary' type='submit'>
                Login
            </Button>
    
        </Form>
        </Col>
        </Row>
    </div>
    
    </div>
  )
}

export default SignUp