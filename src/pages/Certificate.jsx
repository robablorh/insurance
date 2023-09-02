
import { Container, Row, Col } from 'react-bootstrap'
import code from '../images/code.png'

const Certificate = () => {
  return (
    <div>
        
     <Container className=''>
        <Row className="flex justify-content-center align-items-center mt-5  cert" style={{ width: "60.6%" }}>
            <Col>
                <p>Car No : GR 234-19</p>
                <p>Make: BMW</p>
                <p>Color: Navy Blue</p>
                <p>Inception Date: 1st September 2023</p>
                <p>Expiry Date : 1st September 2024</p>
                <p>Sticker number : WRT 45387527</p>

            
            
            
            </Col>
            <Col>
              <img
              src={code}
              height="220"
              width="250"
              
              
              />
            
            </Col>
        </Row>
     </Container>

    </div>
  )
}

export default Certificate