import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';





const Navbar2 = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="300"
              height="70"
              className="d-inline-block align-top"
            />{' '}
           
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  ><Link className="n2links" to='/'>Home</Link></Nav.Link>
            <Nav.Link className="n2links" ><Link to='/about'>About Us</Link></Nav.Link>
            <Nav.Link className="n2links" ><Link to='/companies'>Insurance Companies</Link></Nav.Link>
            <Nav.Link className="n2links" ><Link to='/autoinsurance'>Auto-Insurance News</Link></Nav.Link>
            <Nav.Link className="n2links" ><Link to='/qoute'>Get a Quote</Link></Nav.Link>
    
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>






    </div>
  )
}

export default Navbar2



