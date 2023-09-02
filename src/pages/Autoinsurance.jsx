import ent from '../images/enterprise.png'
import phoe from '../images/phoenix.png'
import pri from '../images/Priority.png'
import pru from '../images/prudential.jpeg'
import star from '../images/star.jpeg'
import alli from '../images/alli.jpeg'
import Navbar1 from "../components/Navbar1";


import { Container, Row, Col, Card } from "react-bootstrap";

const Autoinsurance = () => {


  return (
    <div>
       <Navbar1/>

<h1 className="h1head">Insurance Companies</h1>


<Container>

  <Row>

    <Col className="card1">
  

        <Card style={{ width: '18rem', height: '300px' }}>
          <Card.Img variant="top" src={alli} />

        </Card>

    

    </Col>



    <Col className="card2">
     

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={star} />

        </Card>

    

    </Col>




    <Col className="card3">
 

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pri} />

        </Card>

  

    </Col>

  </Row>
  <Row>
    <Col className='card4'>
      

        <Card style={{ width: '18rem', }}>
          <Card.Img variant="top" src={pru} />

        </Card>

      
    </Col>




    <Col className="card5">
    

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={phoe} />

        </Card>

    


    </Col>
    <Col className="card6">

   

        <Card style={{ width: '18rem', height: '300px' }}>
          <Card.Img variant="top" src={ent} />

        </Card>

      
    </Col>

  </Row>

</Container>





    </div>
  )
}

export default Autoinsurance