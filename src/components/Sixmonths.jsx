/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Container,Row} from "react-bootstrap"
import Companies from "./Companies";

// eslint-disable-next-line no-unused-vars
const Sixmonths = ({ insuranceType, duration }) => {
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
    if (duration === 'Six Months') {
      switch (insuranceType) {
        case 'Comprehensive Insurance':
          return 1000;
        case 'Third-Party Insurance':
          return 600;
        case 'Third-Party Fire and Theft Insurance':
          return 800;
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
        <Row style={{ backgroundColor: "#C2D2D8", borderBottom: "3px solid gray", cursor: 'pointer' }} onClick={() => handleRowClick('Comprehensive Insurance')}>
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
         <Companies insuranceType={selectedInsuranceType} duration="Six Months" insuranceAmount={insuranceAmount} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Sixmonths