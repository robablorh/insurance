 
import{Container, Row , Col,Button} from 'react-bootstrap'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaPhoneAlt} from 'react-icons/fa'
import {FaMobileAlt} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import Form from 'react-bootstrap/Form'
import Navbar1 from "./Navbar1"


const Contact = () => {
  return (
    <div>

   

        <Navbar1/>
       
               
                

        <h2 className=' ' >CONTACT US</h2>

        <Container className='controw'>
            <Row> 
                <Col>

               <p><FaMapMarkerAlt/>Location: Airport Residential Area</p>
               <p><FaPhoneAlt/>Telephone : 0302456734</p>
               <p><FaMobileAlt/>Mobile : 025746297</p>
               <p><FaEnvelope/>Email : info@freshgroceries</p>


             <h4>Opening time </h4>
             <p>Weekdays : 8am-7pm</p>
             <p> Weekends : 8am-8pm</p>




                </Col>
                <Col >
                 <h3>leave your comments / Complaints here  </h3>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary">Send</Button>{' '}
                </Form>
                
                
                
                
                </Col>
            </Row>
        

           
        </Container>
     





    </div>
  )
}

export default Contact