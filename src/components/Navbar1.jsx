
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { BsPersonCircle} from 'react-icons/bs';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Container } from 'react-bootstrap'

const Navbar1 = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      
      <Nav className="me-auto">
        <p className='pnav'>follow us:</p>
        <Nav.Link href="#home"><FaFacebookF/></Nav.Link>
        <Nav.Link href="#features"><FaInstagram/></Nav.Link>
        <Nav.Link href="#pricing"><FaTwitter/></Nav.Link>
        <Nav.Link href="#pricing"><FaYoutube/></Nav.Link>
      </Nav>

      <Nav className="justify-content-center , logins" activeKey="/home">
        <Nav.Item>
        <button className='nav1btn'><BsPersonCircle/>Sing-in</button>
        </Nav.Item>
        <Nav.Item>
         <button className='nav1btn'><MdPersonAdd/>Sign-Up</button>
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
