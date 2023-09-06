/* eslint-disable no-unused-vars */
import { Container,Row} from "react-bootstrap"
import ThreeMonths from "./ThreeMonths"
import { useNavigate } from "react-router-dom"
import Sixmonths from "./Sixmonths"
import Oneyear from "./Oneyear"
import { useState } from "react"
import Dashboard from "../pages/DashBoard"
import Navbar2 from "../components/Navbar2";
const InsuranceTypes = () => {
  // const navigate = useNavigate()
  const [activeButton, setActiveButton] = useState("threeMonths");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };


  return (
    <>
   <Navbar2/> 
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
            <button onClick={() => handleButtonClick("threeMonths")} type="button" className={`btn btn-primary ${activeButton === "threeMonths" ? "active" : ""}`} style={{ backgroundColor: activeButton === "threeMonths" ? "#007bff" : "#0069d9" }}>3 Month</button>
            <button onClick={() => handleButtonClick("sixMonths")} type="button" className={`btn btn-primary ${activeButton === "sixMonths" ? "active" : ""}`} style={{ backgroundColor: activeButton === "sixMonths" ? "#007bff" : "#0069d9" }}>6 Months</button>
            <button onClick={() => handleButtonClick("oneYear")} type="button" className={`btn btn-primary ${activeButton === "oneYear" ? "active" : ""}`} style={{ backgroundColor: activeButton === "oneYear" ? "#007bff" : "#0062cc" }}>1 Year</button>
          </div>
        </Row>

</Container>

      <Container className="w-100">
        <Row>
          {activeButton === "threeMonths" && <ThreeMonths />}
          {activeButton === "sixMonths" && <Sixmonths />}
          {activeButton === "oneYear" && <Oneyear />}
        </Row>
      </Container> 
    </div>
    </>
  )
}

export default InsuranceTypes