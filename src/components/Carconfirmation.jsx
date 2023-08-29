import { Container,Row,Col} from "react-bootstrap"


const Carconfirmation = () => {
  return (
    <div>
         <Container>

         <Row className='row1'><h1 className="text-center text-danger">Toyota Corolla</h1></Row>
         <Row className='row2'><p className="text-center">Is this your car?</p></Row>
         <Row className='row5'>
                  <Row>
                      <Col xs={8}>
                          <h4 className="text-white py-3">Toyota Corolla</h4>
                      </Col>
                      <Col xs={4} className="text-end">
                          <button className="cbtn border-none px-4 py-2 m-3 text-danger" style={{ backgroundColor: 'white', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.9)' }}>Not Yours</button>
                      </Col>
                  </Row>
            </Row>
            <Row className="rowC4">
                  <Col xs={6} className="p-4">Make</Col>
                  <Col xs={6} className="p-4 pe-5 text-end">Toyota</Col>
            </Row>
            <Row className="rowC4">
                  <Col xs={6} className="p-4">model</Col>
                  <Col xs={6} className="p-4 pe-5 text-end">Corolla</Col>
            </Row>
            <Row className="rowC4">
                  <Col xs={6} className="p-4">Fuel type</Col>
                  <Col xs={6} className="p-4 pe-5 text-end">Petrol</Col>
            </Row>
            <Row className="rowC4">
                  <Col xs={6} className="p-4">year of Manufacture</Col>
                  <Col xs={6} className="p-4 pe-5 text-end">2012</Col>
            </Row>

         </Container>
         <br />
         <br />

         <Container>   
            <Row className='row5'>
                  <h4 className=" text-white py-3">Purchase Information and Value </h4>
            </Row>
            <Row className="rowC4">
                  <Col xs={6} className="p-4">Have you purchased this car?</Col>
                  <Col xs={6} className="p-4 text-end">Toyota</Col>
            </Row>
            <Row className="rowC4">
                  <Col xs={6} className="p-4">model</Col>
                  <Col xs={6} className="p-4 d-flex justify-content-end">
                      <button className="btn btn-success me-3 ps-5 pe-5 text-center">Yes</button>
                      <button className="btn btn-danger ps-5 pe-5 text-center">No</button>
                </Col>
            </Row>
            <Row className="rowC4">
                  <Col className="p-4">When did you buy it?</Col>
                  <Col className="p-4">
                      <input type="date" name="date" className="form-control" />
                </Col>
            </Row>
              <Row className="rowC4">
                  <Col className="p-4">Value of the car</Col>
                  <Col className="p-4 d-flex align-items-center">
                      <select name="currency" id="currency" className="form-select me-2">
                          <option value="dollar">Dollars</option>
                          <option value="Euro">Euro</option>
                          <option value="British Pounds">British Pounds</option>
                          <option value="ghana Cedis">Ghana Cedis</option>
                      </select>
                      <input type="text" name='value' className="form-control" />
                  </Col>
              </Row>
              <Row>
                  <Col xs={6}></Col>
                  <Col xs={6} className="d-flex justify-content-end">
                      <button className="btn btn-success py-3 px-5 my-3">Continue</button>
                  </Col>
              </Row>
        </Container>
    </div>
  )
}

export default Carconfirmation