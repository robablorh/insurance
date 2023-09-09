/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FiMenu} from 'react-icons/fi';

function TextLinkExample() {
    const [show, setShow] = useState(false);

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
                            <ul>
                                <li>Profile</li>
                                <li>History</li>
                                <li>Setting</li>
                                <li>Logout</li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>


                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">User</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TextLinkExample;