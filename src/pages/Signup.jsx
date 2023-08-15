import { Container, Row , Col } from "react-bootstrap"

const Signup = () => {
  return (
    <div>
        <form>
         <Container  >
            <Row className="sur1">
                <Col> <input  type="text" className="insu"    placeholder="First Name" /> </Col>
                <Col> <input  type="text"  className="insu"   placeholder="Surname" /></Col>
                <Col> <input  type="text"  className="insu"    placeholder=" Other Names" /> </Col>
               

            </Row>
            <Row  className="suform">
                <Col> <input  type="text"  className="insu"    placeholder="Gender" /> </Col>
                <Col> <input  type="email"  className="insu"    placeholder="Email" /></Col>
               
               

            </Row>
            <Row className="sur1"> 
                <Col> <input  type="text"  className="insu"    placeholder="mobile number(1)" /> </Col>
                <Col> <input  type="text"  className="insu"    placeholder="mobile number(2)" /></Col>
                <Col> <input  type="text"   className="insu"   placeholder="Telephone/Fax" /> </Col>
               

            </Row>
            <Row className="suform">
                <Col> <input  type="text"   className="insu"   placeholder="Residential Adress" /> </Col>
                <Col> <input  type="text" className="insu"     placeholder="Postal Adress" /></Col>
              
               

            </Row>
            <button className="subtn">REGISTER</button>
            
         </Container>



        </form>
      
       






    </div>
  )
}

export default Signup