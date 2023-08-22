import { Container,Row,Col} from "react-bootstrap"


const DriverBio = () => {
  return (
    <div>

      <Container>
      <Row className='row1'><h3>Bio Data</h3></Row>
          <Row className='row5'><h2>Find Car</h2></Row>
          <Row>
            <Col> First Name:</Col>
            <Col><input type="text" name="firstname"/></Col>
          </Row>

          <Row>
            <Col> Last Name:</Col>
            <Col><input type="text" name="lastname"/></Col>
          </Row>

          <Row>
            <Col> Email Address:</Col>
            <Col><input type="email" name="eaddress"/></Col>
          </Row>

          <Row>
            <Col> Home Address :</Col>
            <Col><input type="text" name="hadress"/></Col>
          </Row>
          <Row>
            <Col> Contact:</Col>
            <Col><input type="text" name="contact"/></Col>
          </Row>

           <button>Continue</button>




      </Container>


    </div>
  )
}

export default DriverBio