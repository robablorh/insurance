/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../images/newlogo.png'

const Navbar1 = () => {

  const navigate = useNavigate()

  const navigateSignin = () => {
  
    navigate('/login');
  };

  const navigateSignup = () => {
    navigate('/signup');
  }


  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <p className='pnav'>follow us:</p>
          <Nav.Link href="#home"><FaFacebookF /></Nav.Link>
          <Nav.Link href="#features"><FaInstagram /></Nav.Link>
          <Nav.Link href="#pricing"><FaTwitter /></Nav.Link>
          <Nav.Link href="#pricing"><FaYoutube /></Nav.Link>
        </Nav>

        <Nav className="justify-content-center logins" activeKey="/home">
          <Nav.Item>
            <button  onClick={navigateSignin} className='nav1btn btn btn-primary'>
              <BsPersonCircle /> Sign In
            </button>
          </Nav.Item>
          <Nav.Item>
            <button onClick={navigateSignup} className='nav1btn btn btn-success'>
              <MdPersonAdd /> Sign Up
            </button>
          </Nav.Item>
        </Nav>

        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link ><Link>Contact</Link></Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>

     <div>
     <Navbar expand="lg" className="bg-body-tertiary">
       <Container>
         <Navbar.Brand href="#home">
           <div className="d-flex align-items-center"> {/* Used the d-flex to create a flex container */}
             <img
               alt=""
               src={logo}
               width="100"
               height="70"
               className="d-inline-block align-top"
             />
             <span className="fw-bolder text-primary ms-1">INSURANCE</span> 
           </div>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mx-auto"> 
             <Nav.Link>
               <Link className="n2links" to='/'>Home</Link>
             </Nav.Link>
             <Nav.Link className="n2links">
               <Link to='/companies'>Insurance Companies</Link>
             </Nav.Link>
             <Nav.Link className="n2links">
               <Link to='/autoinsurance'>Auto-Insurance News</Link>
             </Nav.Link>
             <Nav.Link className="n2links">
               <Link to='/quote'>Get a Quote</Link> 
             </Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
   </div>
   </div>
  );
};

export default Navbar1;

