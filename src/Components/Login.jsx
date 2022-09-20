
import React, { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { login } from '../features/UserSliceRoute'
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [isLoggedIn, SetIsLoggedIn] = useState([false])
    const [PagetoRender, setPagetoRender] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const usernametyped = (e) => {setUsername(e.target.value)}
    const passwordtyped = (e) => {setPassword(e.target.value)}
    const navigate = useNavigate();
    
    // console.log(usernametyped);
    // console.log(passwordtyped);

    let submitted = (event) =>{
      event.preventDefault()
      if ( username === "" || password === "" )
          {
              console.log("awaiting");
          }
    
    else if ( username === "admin" && password === "password" )


                {
                  SetIsLoggedIn(true)
                  setPagetoRender('/savednews')
                
                  

                dispatch(login(
                    {
                      isLoggedIn,
                      PagetoRender
                    }
                  ))

                  navigate("/dashboard")
                }

    else
          {
            console.log("failed");
          }



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