import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/newlogo.png'
import { Link } from 'react-router-dom';





const Navbar2 = () => {
  return (
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
  )
}

export default Navbar2



