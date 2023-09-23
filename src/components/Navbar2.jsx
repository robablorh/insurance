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
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Button variant="primary" onClick={handleShow}>
              <FiMenu />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Dashboard</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul className='offcanvaslinks' >
                 
                  <li><Link className='offcanlink' to='/vehichel1'>NEW INSURANCE </Link></li>
                  <li><Link className='offcanlink'  to='/history'>History</Link></li>
                 
                  
                  <li>
                    <button   className='logoutbtn' onClick={logout}>Logout</button>
                  </li> 
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
             <p>Signed in as:<span className='user'> {user[0].name}</span> </p> 
              
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default TextLinkExample;