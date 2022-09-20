
import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { login, logout } from '../features/UserSliceRoute'
import {useDispatch} from 'react-redux'
const Login = () => {

    const [isLoggedIn, SetIsLoggedIn] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const usernametyped = (e) => {setUsername(e.target.value)}
    const passwordtyped = (e) => {setPassword(e.target.value)}

    // console.log(usernametyped);
    // console.log(passwordtyped);

    if ( username == "" || password == "" )
          {
              console.log("awaiting");
          }
    
    else if ( username == "admin" && password == "password" )
                {
                // dispatch(login(
                //     {
                //       true,
                //       '/savednews'
                //     }
                //   ))
                }

    else
          {
            console.log("failed");
          }

    let submitted = (event) =>{
      event.preventDefault()
  }

 return (
    

    <div className='container-fluid p-5'>
        
    <Row className="mt-3"> 
    <Col lg={5} md={5} sm={12} className="p-3 m-auto shadow-sm rounded-lg">
    <Form className='rounded p-4 p-sm-3 text-bg-light'>
    
    <h1 className="text-primary mb-2 m-3 p-3 text-center rounded">Login</h1>
    {/* className="col-md-5 col-sm-6 col-xl-3 mb-3" */}
      <Form.Group className='mb-3'>  
        <FloatingLabel className='mb-3' controlId="floatingInput" label="Username" >
                <Form.Control type="text" placeholder="@username" onChange={usernametyped} />
        </FloatingLabel>
        
        <FloatingLabel controlId="floatingPassword" label="Password"  >
                <Form.Control type="password" placeholder="Password" onChange={passwordtyped} />
        </FloatingLabel>
      </Form.Group>
        <Button className='mt-2 mb-3' variant='primary' type='submit' onClick={submitted} >
            Login
        </Button>

    </Form>
    </Col>
    </Row>
    </div>
    
  )
}

export default Login