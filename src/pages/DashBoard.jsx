/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';

import Vehichel1 from '../components/Vehichel1';
import Vehichel2 from '../components/Vehichel2';
import Carconfirmation from '../components/Carconfirmation';
import { Link, Outlet, useLocation } from 'react-router-dom';
import DriverBio from '../components/DriverBio';


const DashBoard = () => {

 
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showVehichel2, setShowVehichel2] = useState(false);
  const [showCarConfirmation, setShowCarConfirmation] = useState(true);
  const [showDriverBio, setShowDriverBio] =useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);


  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNoClick = () => {
    setShowVehichel2(true);
    console.log("show it")
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    console.log("button clicked")
  };

  const navigatecarconfirmation = () => {
    setShowCarConfirmation(true);
  };


  return (
    <div className="dashboard">
      <Navbar bg="success" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-none d-md-block" onClick={handleSidebarToggle} style={{ color: 'white', marginLeft: '14rem' }}>
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto user-section text-white">
            <NavDropdown className='text-white'
              title={<span style={{ color: 'white' }}>User</span>}
              id="basic-nav-dropdown">
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Main content */}
      <div className="Main" style={{ backgroundColor: "#ededed", minHeight: "100vh", width:"100%" }}>
        <Container fluid className="">
          <Row>
            <Col md={2} className={`sidebar ${sidebarOpen ? 'open' : 'closed'} vh-100`} style={{ backgroundColor: '#0B6623', width: '250px'}}>
              <div className="close-icon" onClick={handleSidebarToggle} style={{ color: 'white', marginLeft: '13rem', marginTop:"1rem"}}>
                <FaTimes />
              </div>
              <Nav defaultActiveKey="/home" className="flex-column mt-5">
                <Nav.Link className='text-white' href="/home">Home</Nav.Link>
                <Nav.Link className='text-white' href="/about">About</Nav.Link>
                <Nav.Link className='text-white' href="/contact">Contact</Nav.Link>
              </Nav>
            </Col>
            <Col md={10} className={`content ${sidebarOpen ? '' : 'closed'}`}  >
              {!buttonClicked ? (
              <div className="flex align-items-center justify-content-center ms-6">
                <Button onClick={handleButtonClick}>Click to start</Button>
              </div>
              ) : (
              <Container className=''>
                    <div>
                      {showVehichel2 ? <Vehichel2 /> : <Vehichel1 handleNoClick={handleNoClick} />}

                    </div>       
            </Container>
              )}

              <Container>
                {showCarConfirmation === <Carconfirmation navigatecarconfirmation ={navigatecarconfirmation} />}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DashBoard;
