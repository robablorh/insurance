import { useState } from "react";
import { Button, Container,Row} from "react-bootstrap"
import Companies from "./Companies";

const Sixmonths = () => {
  const [showCompaniesModal, setShowCompaniesModal] = useState(false);

  const handleRowClick = () => {
    setShowCompaniesModal(true);
  };

  return (
    <div className="w-100">
      <Container>
        <Row style={{ backgroundColor: "#C2D2D8", borderBottom: "3px solid gray", cursor: 'pointer' }} onClick={handleRowClick}>
          <h4 className="text-danger">Comprehensive Insurance</h4>
          <div>Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end"> GhS 1000</h6></div>
        </Row>
        <Row style={{ backgroundColor: "#C2D2D8", borderBottom: "3px solid gray", cursor: 'pointer' }} onClick={handleRowClick}>
          <h4 className="text-danger">Third-Party Insurance</h4>
          <div>Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end"> GhS 700</h6></div>
        </Row>
        <Row style={{ backgroundColor: "#C2D2D8", borderBottom: "3px solid gray", cursor: 'pointer' }} onClick={handleRowClick}>
          <h4 className="text-danger">Third-Party Fire and Theft Insurance</h4>
          <div>Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end"> GhS 550</h6></div>
        </Row>
        <div className="d-flex justify-content-end mt-4" style={{ width: "100%" }}>
          <Button className="py-3 px-4" variant="primary" type="submit">
            Continue
          </Button>
        </div>
      </Container>
      {/* Conditionally rendering Companies component as a modal */}
      {showCompaniesModal && (
        <div className="companies-modal">
          <div className="companies-modal-content">
            <Companies />
          </div>
        </div>
      )}
    </div>
  )
}

export default Sixmonths