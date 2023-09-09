/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Container,Row} from "react-bootstrap"
import Companies from "./Companies";
import { useState } from "react";

const Oneyear = ({ insuranceType, duration }) => {

  const [showCompaniesModal, setShowCompaniesModal] = useState(false);
  const [selectedInsuranceType, setSelectedInsuranceType] = useState('');
  const [insuranceAmount, setInsuranceAmount] = useState(0);

  const handleRowClick = (selectedInsuranceType) => {
    setSelectedInsuranceType(selectedInsuranceType);
    const amount = calculateAmount(selectedInsuranceType, 'Six Months');
    setInsuranceAmount(amount);
    setShowCompaniesModal(true);
  };

  const calculateAmount = (insuranceType, duration) => {
    if (duration === 'One Year') {
      switch (insuranceType) {
        case 'Comprehensive Insurance':
          return 2000;
        case 'Third-Party Insurance':
          return 1500;
        case 'Third-Party Fire and Theft Insurance':
          return 1300;
        default:
          return 0;
      }
    } else {
      return 0;
    }
  };
  return (
    <div className="w-100">
      <Container>
        <Row style={{
          backgroundColor: "#C2D2D8", borderBottom: "3px solid gray", cursor: 'pointer',transition: 'transform 0.3s ease', }} 
          onClick={() => handleRowClick('Comprehensive Insurance')} onMouseEnter={(e) => {e.currentTarget.style.transform = 'scale(1.05)'; }} 
          onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)';}}>
          <h4 className="text-danger">Comprehensive Insurance</h4>
          <div>Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end"> GhS {insuranceAmount}</h6></div>
        </Row>
        <Row style={{ backgroundColor: "#C2D2D8", borderBottom: "3px solid gray", cursor: 'pointer' }} onClick={() => handleRowClick('Third-Party Insurance')}>
          <h4 className="text-danger">Third-Party Insurance</h4>
          <div>Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end"> GhS {insuranceAmount}</h6></div>
        </Row>
        <Row style={{ backgroundColor: "#C2D2D8", borderBottom: "3px solid gray", cursor: 'pointer' }} onClick={() => handleRowClick('Third-Party Fire and Theft Insurance')}>
          <h4 className="text-danger">Third-Party Fire and Theft Insurance</h4>
          <div>Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end"> GhS {insuranceAmount}</h6></div>
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
            <Companies insuranceType={selectedInsuranceType} duration="One Year" insuranceAmount={insuranceAmount} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Oneyear