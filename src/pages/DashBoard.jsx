/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';
import Carconfirmation from '../components/Carconfirmation';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard">
      <Navbar bg="success" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-none d-md-block" onClick={handleSidebarToggle} style={{ color: 'red', marginLeft: '14rem' }}>
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto user-section">
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Main content */}
      <div className="Main">
        <Container fluid className="d-flex justify-content-center">
          <Row>
            <Col md={3} className={`sidebar ${sidebarOpen ? 'open' : 'closed'} vh-100`} style={{ backgroundColor: 'black', width: '200px'}}>
              <div className="close-icon" onClick={handleSidebarToggle} style={{ color: 'red', marginLeft: '10rem' }}>
                <FaTimes />
              </div>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Col>
            <Col md={9} className={`content ${sidebarOpen ? '' : 'closed'}`} >
              <div className="d-flex align-items-center justify-content-center ms-6">
                <Carconfirmation />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
