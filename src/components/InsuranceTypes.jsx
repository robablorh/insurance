import { Container,Row,Col} from "react-bootstrap"
import ThreeMonths from "./ThreeMonths"
import Modaaaal from "./Modaaaal"

const InsuranceTypes = () => {
  return (
    <div>I

   <Container>
         <Row className='row1'><h3>Isurance Covers</h3></Row>
          <Row className='row5'>
            <Col><button>3 months</button></Col>
            <Col><button>6 months</button></Col>
            <Col><button>1 year</button></Col>
          </Row>

          <ThreeMonths/>
   </Container>
    
   <Modaaaal/>


      

    </div>
  )
}

export default InsuranceTypes