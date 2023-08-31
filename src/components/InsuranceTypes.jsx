import { Container,Row} from "react-bootstrap"
import ThreeMonths from "./ThreeMonths"


const InsuranceTypes = () => {
  return (
    <div>I

   <Container>
       <div className="btn-group w-100" role="group" aria-label="Button group with 4 buttons">
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#007bff", padding: "1.5rem" }}>Vehicle</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0069d9", padding: "1.5rem" }}>Insurer</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0062cc", padding: "1.5rem" }}>Cover</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#005cbf", padding: "1.5rem" }}>Payment</button>
        </div>
         <Row className='row1'><h3>Insurance Covers</h3></Row>
          <Row className="flex justify-content-center align-items-center mt-5" style={{ width: "55.6%" }} >
          <div className="btn-group w-100" role="group" aria-label="Button group with 4 buttons">
              <button type="button" className="btn btn-primary" style={{ backgroundColor: "rgb(101, 52, 206)", padding: "1.5rem" }}>3months</button>
              <button type="button" className="btn btn-primary" style={{ backgroundColor: "rgb(81, 37, 177)", padding: "1.5rem" }}>6months</button>
              <button type="button" className="btn btn-primary" style={{ backgroundColor: "rgb(53, 20, 125)", padding: "1.5rem" }}>1year</button>
          
           </div>

      
          </Row>
          

          <ThreeMonths/>
   </Container>
    
  


      

    </div>
  )
}

export default InsuranceTypes