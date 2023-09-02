
import { Container, Row, Col } from 'react-bootstrap'
import code from '../images/code.png'

const Certificate = () => {
  return (
    <div>
        
     <Container className=''>
     
        <Row className="flex justify-content-center align-items-center mt-5  cert" style={{ width: "60.6%" }}>
            <h3 className='sticker'>Name of Insurance Company</h3>
            <p className='sticker'>National Insurance Commision</p>
            <Col className='certi'>
                <p>Car No : GR 234-19</p>
                <p>Make: BMW</p>
                <p>Color: Navy Blue</p>
                <p>Inception Date: 1st September 2023</p>
                <p>Expiry Date : 1st September 2024</p>
                <p>Sticker number : WRT 45387527</p>

            
            
            
            </Col>
            <Col className='barcode'>
              <img
              src={code}
              height="200"
              width="200"
              
              
              />
            
            </Col>
        </Row>
     </Container>

    </div>
  )
}

export default Certificate