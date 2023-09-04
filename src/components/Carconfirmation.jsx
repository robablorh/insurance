/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Container,Row,Col} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import Dashboard from "../pages/DashBoard";



const Carconfirmation = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [showValueInput, setShowValueInput] = useState(false);

    const handleYesClick = () => {
        setShowDetails(true);
        setShowValueInput(false); 
    };

    // Show the value input when "No" is clicked
    const handleNoClick = () => {
        setShowDetails(false);
        setShowValueInput(true); 
    };

    const navigate = useNavigate();

   
      const navigatevehichel2 =() =>{
         
        navigate('/vehichel2');
      }

      const navigatedriverBio =() =>{
        navigate("/driverbio")
      }

  return(
    <>
    <div className="w-50 m-auto">
         <Container className="" >

         <div className="btn-group w-100 mt-0" role="group" aria-label="Button group with 4 buttons">
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#007bff", padding: "1.5rem" }}>Vehicle</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0069d9", padding: "1.5rem" }}>Insurer</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0062cc", padding: "1.5rem" }}>Cover</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#005cbf", padding: "1.5rem" }}>Payment</button>
        </div>

         <Row className='row1'><h1 className="text-center text-danger">Toyota Corolla</h1></Row>
         <Row className='row2'><p className="text-center">Is this your car?</p></Row>
         
            <Row className='row5'>
                    <Row>
                        <Col xs={8}>
                            <h4 className="text-white py-2">Toyota Corolla</h4>
                        </Col>
                        <Col xs={4} className="text-end">
                            <button   onClick={navigatevehichel2 } className="cbbtn border-none px-4 py-2 m-0 text-danger box" style={{ backgroundColor: 'white', border: 'none', borderRadius:"0.5rem" }}>Not Yours</button>
                        </Col>
                    </Row>
                </Row>
               
                <Row className="rowC4">
                    <Col xs={6} className="p-4">Registration number</Col>
                    <Col xs={6} className="p-4 pe-5 text-end">Gt 2567 - 23 </Col>
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
                  <Col xs={6} className="p-4 d-flex justify-content-end">
                      <button onClick={handleYesClick} className="btn btn-success me-3 ps-5 pe-5 text-center box">Yes</button>
                      <button onClick={handleNoClick} className="btn btn-danger ps-5 pe-5 text-center box">No</button>
                </Col>
                 
            </Row>
            
              {showDetails && (
                <>
            <Row className="rowC4">
                  <Col xs={6} className="p-4">model</Col>
                  <Col xs={6} className="p-4 text-end">Toyota</Col>
                  
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
                  </>
              )}
              {showValueInput && (
                      <>
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
                  </>
              )}

                          <Row>
                              <Col xs={6}></Col>
                              <Col xs={6} className="d-flex justify-content-end">
                                  <button onClick={navigatedriverBio} className="btn btn-success py-3 px-5 my-3">Continue</button>
                              </Col>
                          </Row>
                      
              
        </Container>
    </div>
      </>
  )
}

export default Carconfirmation