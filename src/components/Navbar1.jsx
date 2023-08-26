/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Navbar1 = () => {
  return (
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
            <button className='nav1btn btn btn-primary'>
              <BsPersonCircle /> Sign In
            </button>
          </Nav.Item>
          <Nav.Item>
            <button className='nav1btn btn btn-success'>
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
  );
};

export default Navbar1;

