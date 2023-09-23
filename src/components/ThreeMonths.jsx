/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap"
import Companies from "./Companies";
import { useSelector, useDispatch } from "react-redux";

const Threemonths = ({insuranceType , duration}) => {
   
  const dispatch = useDispatch();
  const carValue = useSelector((store) => store.user.carValue);

  const valueOfCar = parseInt(carValue[0].amount)
  
  const [showCompaniesModal, setShowCompaniesModal] = useState(false);
  const [selectedInsuranceType, setSelectedInsuranceType] = useState('');
  const [insuranceVal, setInsuranceVal] = useState("")
  const [insuranceAmount, setInsuranceAmount] = useState({
    email: carValue[0].email,
    currency: "Ghs",
    duration: "3 months| 90 days",
    calcAmount: "",
  });

  const tpi = 550
  const tpft = 700

  // const handleRowClick = (selectedInsuranceType) => {
  //   setSelectedInsuranceType(selectedInsuranceType);
  //   const amount = calculateAmount(selectedInsuranceType, 'Three Months');
  //   setInsuranceAmount(amount);
  //   setShowCompaniesModal(true);
  // };
 
  const calculateAmount = (insuranceType) => {
    
  };





  return (
    <div className="w-100">
      <Container>
        <Row
          style={{
            backgroundColor: "#C2D2D8",
            borderBottom: "3px solid gray",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          onClick={() => handleRowClick("Comprehensive Insurance")}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <h4 className="text-danger">Comprehensive Insurance</h4>
          <div>
            Coverts death, bodily injury, damage to other persons property,
            fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end">
                     Ghs {valueOfCar * (4 / 100)}
            </h6>
          </div>
        </Row>
        <Row
          style={{
            backgroundColor: "#C2D2D8",
            borderBottom: "3px solid gray",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          onClick={() => handleRowClick("Third-Party Insurance")}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <h4 className="text-danger">Third-Party Insurance</h4>
          <div>
            Coverts death, bodily injury, damage to other persons property,
            fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end">
              Ghs {tpi}
            </h6>
          </div>
        </Row>
        <Row
          style={{
            backgroundColor: "#C2D2D8",
            borderBottom: "3px solid gray",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          onClick={() => handleRowClick("Third-Party Fire and Theft Insurance")}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <h4 className="text-danger">Third-Party Fire and Theft Insurance</h4>
          <div>
            Coverts death, bodily injury, damage to other persons property,
            fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end"> GhS {tpft}</h6>
          </div>
        </Row>
        <div
          className="d-flex justify-content-end mt-4"
          style={{ width: "100%" }}
        >
          <Button className="py-3 px-4" variant="primary" type="submit">
            Continue
          </Button>
        </div>
      </Container>
      {/* Conditionally rendering Companies component as a modal */}
      {showCompaniesModal && (
        <div className="companies-modal">
          <div className="companies-modal-content">
            <Companies
              insuranceType={selectedInsuranceType}
              duration="Three Months"
              insuranceAmount={insuranceAmount.calcAmount}
              insuranceCompany={insuranceCompany}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Threemonths