<<<<<<< HEAD
import { Button, Container,Row} from "react-bootstrap"
import "../index.css";
=======
import { Container,Row,Col} from "react-bootstrap"
import Companies from "./Companies"
import { useNavigate } from "react-router-dom"
import Modaaaal from "./Modaaaal"

>>>>>>> 149d3ad23b695493d7cae4fabc500292b25f1ef5
const ThreeMonths = () => {
  const navigate = useNavigate()
  

  const navthree= ()=>{
    navigate('/threemonths')
  }

  const navsix= ()=>{
    navigate('/sixmonths')
  }

  const navone= ()=>{
    navigate('/oneyear')
  }

  return (
<<<<<<< HEAD
    <div className="w-100">
        <Container>
        <Row style={{ backgroundColor:"#C2D2D8", borderBottom: "3px solid gray" }}>
                <h4 className="text-danger">Comprehensive Insurance</h4>
                <p>Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end"> GhS 600</h6></p>
              </Row>
        <Row style={{ backgroundColor: "#C2D2D8", borderBottom: "3px solid gray" }}>
          <h4 className="text-danger">Third-Party Insurance</h4>
                <p>Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car
                <h6 className="mt-1 text-danger text-end"> GhS 200</h6></p>
              </Row>
        <Row style={{ backgroundColor: "#C2D2D8", borderBottom: "3px solid gray" }}>
          <h4 className="text-danger">Third-Party Fire and Theft Insurance</h4>
                <p>Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end"> GhS 400</h6></p>
              </Row>
        <div className="d-flex justify-content-end mt-4" style={{ width: "100%" }}>
          <Button className="py-3 px-4" variant="primary" type="submit">
            Continue
          </Button>
        </div>    
=======
    <div>

   <Container>
       <div className="btn-group w-100" role="group" aria-label="Button group with 4 buttons">
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#007bff", padding: "1.5rem" }}>Vehicle</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0069d9", padding: "1.5rem" }}>Insurer</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0062cc", padding: "1.5rem" }}>Cover</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#005cbf", padding: "1.5rem" }}>Payment</button>
        </div>
        </Container>

        <Row className='covers'><h3>Insurance Covers</h3></Row>
        <div className="shifttypes">
        
          <Row className="flex justify-content-center align-items-center mt-5" style={{ width: "60.6%" }} >
          <div className="btn-group w-100" role="group" aria-label="Button group with 4 buttons">
              <button onClick={ navthree} type="button" className="btn btn-primary" style={{ backgroundColor: "rgb(175, 149, 231)", padding: "1.5rem" }}>3months</button>
              <button onClick={ navsix} type="button" className="btn btn-primary" style={{ backgroundColor: "rgb(81, 37, 177)", padding: "1.5rem" }}>6months</button>
              <button onClick={ navone} type="button" className="btn btn-primary" style={{ backgroundColor: "rgb(53, 20, 125)", padding: "1.5rem" }}>1year</button>
          
           </div>

      
          </Row>
          
        

        <Container>
              <Row>
                <h4>Comprehensive Insurance</h4>
              <Col ><p  className="brk">Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car</p></Col><Col> GhS 600</Col>
              </Row>
              <Row>
                <h4>Third-Party Insurance</h4>
              <Col ><p  className="brk">Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car</p></Col> <Col> GhS 200</Col>
              </Row>
              <Row>
                <h4>Third-Party Fire and Theft Insurance</h4>
              <Col ><p  className="brk"> Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car</p></Col><Col> GhS 400</Col>
              </Row>
        
              
>>>>>>> 149d3ad23b695493d7cae4fabc500292b25f1ef5
        </Container>
        </div>
      
        <div className="combtn">
         <Companies/>
        
         </div> 
     </div>
     
  )
}

export default ThreeMonths