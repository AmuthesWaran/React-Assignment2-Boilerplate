import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const Header = () => {
  
  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()
    const LoginStatus =  user.isLoggedIn
    const PageToRender = user.component

    console.log(LoginStatus);
    console.log(PageToRender);

    const logout = () => {
      dispatch(logout(
        false,
        '/unauthorised'
        ))
    }


  return (

    <div>

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">News Feed</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >

              <Nav.Item className="ms-5" ><Link to='/'>Home</Link></Nav.Item>

              <Nav.Item className="ms-5" ><Link to= '/dashboard' >Dashboard</Link></Nav.Item>
              
              {/* {isSignUp && (
                    <TextField margin="normal" varient='outlined' placeholder='First Name' type={"text"}/> )} */}

              
          {LoginStatus && (
              <Nav.Item className="ms-5" ><Link to= '/savednews' >Saved News</Link></Nav.Item> 
          )}
          
          { !LoginStatus && (
              <Nav.Item className="ms-5" ><Link to= {PageToRender} >Saved News</Link></Nav.Item> 
          
          )}

      {!LoginStatus && (
              <Nav.Item className="ms-5" ><Link to='/login'>Login</Link></Nav.Item>

              )}
      {LoginStatus && (       
              <Nav.Item className="ms-5" ><Link to='/dashboard' onClick={logout} >Logout</Link></Nav.Item>
              
              )}
              <Nav.Item className="ms-5" ><Link to='/signup'>Sign Up</Link></Nav.Item>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header