import logo from "../images/logo.png"

import {Container, Row , Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
  <Container>

  <img
    
    src={logo}
    height='70'
    width='300'
   
   /><hr/>
   

    <Row>
      <Col>
       <p> inssurance hub is a privately owned A-Rated Insurance Company incorporated in
         August 1984 and licensed to carry out corporate </p>
      </Col>
      <Col>
      
        <ul>
          <li>Claims</li>
          <li>Personal Insurance</li>
          <li>Customer service</li>
        </ul>
      
      </Col>
      <Col>
         <ul>
          <li>About Us</li>
          <li>Board of directors</li>
          <li>Contact us</li>
          
         </ul>
        </Col>
      <Col>
        <p>+233 2784564</p>
        <p>+233 4528764</p>
        <p>+233 25586689</p>
      


      </Col>





    
   

      <Col>

        <form>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="email"/>
            <input type="textarea" placeholder="write your message here"/>
        </form>
        <button>Submit</button>

        </Col>
        </Row>
        </Container>

    </div>
  )
}

export default Footer