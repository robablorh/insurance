/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard">
      <Navbar bg="light" expand="lg">
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

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''} vh-100`} style={{ backgroundColor: 'grey', width: '200px' }}>
        {/* Close icon */}
        {sidebarOpen && (
          <div className="close-icon" onClick={handleSidebarToggle} style={{ color: 'red', marginLeft: '11rem' }}>
            <FaTimes />
          </div>
        )}

        {/* Sidebar content */}
      </div>

      {/* Main content */}
      <div className={`content ${sidebarOpen ? 'shifted' : ''}`}>
        <Container fluid>
          <Row>
            <Col>
              {/* Other dashboard content */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
