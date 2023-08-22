import { Container,Row,Col} from "react-bootstrap"


const Carconfirmation = () => {
  return (
    <div>
         <Container>

         <Row className='row1'><h3>Toyota Corolla</h3></Row>
         <Row className='row2'><p>Is this your car?</p></Row>
         <Row className='row5'>
            <h2>Toyota Corolla  <button className="cbtn">Not Yours</button></h2>
           
            
            </Row>
            <Row className="rowC4">
                <Col>Make</Col>
                <Col>Toyota</Col>
            </Row>
            <Row className="rowC4">
                <Col>model</Col>
                <Col>Corolla</Col>
            </Row>
            <Row className="rowC4">
                <Col>Fuel type</Col>
                <Col>Petrol</Col>
            </Row>
            <Row className="rowC4">
                <Col>year of Manufacture</Col>
                <Col>2012</Col>
            </Row>

         </Container>

         <Container>

          
            <Row className='row5'>
            <h2>Purchase Information and Value </h2>
            
            
            </Row>
            <Row className="rowC4">
                <Col>Have you purchased this car?</Col>
                <Col>Toyota</Col>
            </Row>
            <Row className="rowC4">
                <Col>model</Col>
                <Col>
                   <button>Yes</button>
                   <button>No</button>
                </Col>
            </Row>
            <Row className="rowC4">
                <Col>When did you buy it?</Col>
                <Col>
               

                   <input type="date" name="date"/>
                
                </Col>
            </Row>
            <Row className="rowC4">
                <Col>Value of the car</Col>
                <Col>
                <select name="currency" id="currency" >

                    <option value="dollar">Dollars</option>
                    <option value="Euro">Euro</option>
                    <option value="British Pounds">British Pounds</option>
                    <option value="ghana Cedis">Ghana Cedis</option>
              


                 </select><br/>

                 <input type="text" name='value'/>
                
                
                </Col>
            </Row>
       <button>Continue</button>

        </Container>
        


    </div>
  )
}

export default Carconfirmation