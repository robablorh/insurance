import { Container,Row} from "react-bootstrap"
import ThreeMonths from "./ThreeMonths"
// import Modaaaal from "./Modaaaal"

const InsuranceTypes = () => {
  return (
    <div className="w-50 m-auto pt-5 mt-5">
      <div className="btn-group w-100" role="group" aria-label="Button group with 4 buttons">
        <button type="button" className="btn btn-primary" style={{ backgroundColor: "#007bff", padding: "1.5rem" }}>Vehicle</button>
        <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0069d9", padding: "1.5rem" }}>Insurer</button>
        <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0062cc", padding: "1.5rem" }}>Cover</button>
        <button type="button" className="btn btn-primary" style={{ backgroundColor: "#005cbf", padding: "1.5rem" }}>Payment</button>
      </div>
      <Row className="row1">
        <h3 className="text-center mt-3">Insurance Covers</h3>
      </Row>
<Container className="w-100 d-flex justify-content-center align-items-center mt-3">
  
        <Row className="w-100">
          <div className="btn-group w-100 px-0" role="group" aria-label="Button group with 3 buttons">
            <button type="button" className="btn btn-primary btn-block" style={{ backgroundColor: "#007bff" }}>3 Month</button>
            <button type="button" className="btn btn-primary btn-block" style={{ backgroundColor: "#0069d9" }}>6 Months</button>
            <button type="button" className="btn btn-primary btn-block" style={{ backgroundColor: "#0062cc" }}>1 Year</button>
          </div>
        </Row>

</Container>

      <Container className="w-100">
        <Row>
          <ThreeMonths />
        </Row>
      </Container> 
   {/* <Modaaaal/> */}
    </div>
  )
}

export default InsuranceTypes