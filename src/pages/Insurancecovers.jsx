
import { Container, Row, Col } from "react-bootstrap";
import ins from '../images/ins.png'
import third from '../images/car3.png'
import theft from '../images/theft.jpeg'
import Navbar1 from "../components/Navbar1";


const Insurancecovers = () => {
  return (
    <div>
         <Navbar1/>

<h1 className="h2head">INSURANCE COVER AVAILABLE</h1>
        <Container className="foot">


          <Row>

            <Col>
              <img
                src={ins}
                height="300"
                width="300"

              />
              <h3>Comprehensive</h3>

            </Col>
            <Col>

              <img
                src={third}
                height="300"
                width="300"

              />
              <h3>Third-Party</h3>


            </Col>
            <Col>
              <img
                src={theft}
                height="200"
                width="300"

              />
              <h3 className="tparty">Third Party Fire and Theft </h3>




            </Col>
          </Row>



        </Container>




    </div>
  )
}

export default Insurancecovers