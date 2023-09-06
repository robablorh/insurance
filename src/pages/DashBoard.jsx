/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';

import Vehichel1 from '../components/Vehichel1';
import Vehichel2 from '../components/Vehichel2';
import Carconfirmation from '../components/Carconfirmation';

import DriverBio from '../components/DriverBio';
import Navbar2 from "../components/Navbar2";
import { useNavigate } from 'react-router-dom';


const DashBoard = () => {

 const navigate = useNavigate();


  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showVehichel2, setShowVehichel2] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);


  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };



  const handleButtonClick = () => {
    navigate("/vehichel1")
    console.log("button clicked")
  };



  return (
    <div className="dashboard">
      <Navbar2/>
     
      {/* Main content */}
      <div className="Main" style={{ backgroundColor: "#ededed", minHeight: "100vh", width:"100%" }}>
        <Container fluid className="">
          <Row>
            
            <Col md={10} className={`content ${sidebarOpen ? '' : 'closed'}`}  >
             
              <div className="flex align-items-center justify-content-center ms-6">
                <Button onClick={handleButtonClick}>Click to start</Button>
              </div>
             
             

            </Col>
            <Vehichel1/>
          </Row>
        </Container>
      </div>
      </div>
 
  );
};

export default DashBoard;
