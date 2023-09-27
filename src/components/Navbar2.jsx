/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FiMenu} from 'react-icons/fi';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Link}  from 'react-router-dom'

function TextLinkExample() {
    const [show, setShow] = useState(false);
    const [, , removeCookie] = useCookies(["token"]);
    
    const navigate = useNavigate()

    const logout = () => {
         removeCookie("token");
         navigate("/login");
    }
    const user = useSelector((store) => store.user.user);
    console.log(user)
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <Navbar className="bg-primary" style={{ boxShadow: "0 4px 5px rgba(0, 0, 0, 0.4)" }}>
        <Container>
          <Navbar.Brand href="#home">
            <Button style={{backgroundColor: 'black'}} onClick={handleShow}>
              <FiMenu />
            </Button>

            <Offcanvas show={show} onHide={handleClose} style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', border: 'none', width: '250px' }}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-primary pt-2'>Dashboard</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ marginTop: '15px' }}>
                <ul className='offcanvaslinks' style={{ listStyleType: 'none', padding: 0 }} >
                 
                  <li style={{ marginBottom: '10px' }}><Link className='offcanlink ' to='/vehichel1' style={{ textDecoration: 'none', color: '#333' }}>NEW INSURANCE </Link></li>
                  <li style={{ marginBottom: '10px' }}><Link className='offcanlink ' to='/history' style={{ textDecoration: 'none', color: '#333' }}>History</Link></li>
                 
                  
                  <li style={{ marginBottom: '10px' }}>
                    <button className='logoutbtn' onClick={logout} style={{ backgroundColor: 'transparent', border: 'none', color: '#333', cursor: 'pointer', padding: 0 }}>Logout</button>
                  </li> 
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <p className='text-white'>Signed in as:<span className='user text-white' style={{ textTransform: 'uppercase' }}> {user[0].name}</span> </p> 
              
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default TextLinkExample;