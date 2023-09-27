
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
              <p>Comprehensive insurance covers damage to your car from animals, 
                falling trees, natural disasters, theft, and vandalism.
                 It does not cover damage to other vehicles or people.
                  Raising your deductibles for comprehensive insurance could help to lower your premiums.</p>

            </Col>
            <Col>

              <img
                src={third}
                height="300"
                width="300"

              />
              <h3>Third-Party</h3>
              <p>Third-party offers coverage against claims of damages and losses incurred 
                by a driver who is not the insured, the principal, and is therefore not covered 
                under the insurance policy. The driver who caused the damages is the third party.

              </p>


            </Col>
            <Col>
              <img
                src={theft}
                height="200"
                width="300"

              />
              <h3 className="tparty">Third Party Fire and Theft </h3>
              <p>Third-party, fire and theft insurance is the mid-level of cover you can get for your car. 
                It gives you more cover than basic third-party insurance, 
                but not as much as a comprehensive policy. Crucially, 
                it won’t pay out if your own car is damaged in an accident.

               </p>




            </Col>
          </Row>



        </Container>




    </div>
  )
}

export default Insurancecovers