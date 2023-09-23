/* eslint-disable no-unused-vars */
import { Container,Row,Col,Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Navbar2 from "../components/Navbar2";
import { useSelector } from "react-redux"
import { PaystackButton } from "react-paystack";



const InsuranceTypes = () => {

  const carValueDetail = useSelector((store) => store.user.carValueDetail);
  console.log(  carValueDetail)
  const driverBio = useSelector((store) => store.user.driverBio);
  //console.log(driverBio[driverBio.length - 1]);

  const paymentDet = carValueDetail[carValueDetail.length - 1];
   const navigate = useNavigate();

  const handleclick =() => {
    
  }

  const publicKey = "pk_test_d423971de624b1b46e7372bebfcb33b19e41e9fa";

  const componentProps = {
    email: paymentDet.email,
    amount: parseInt(paymentDet.calcAmount * 100),
    currency: "GHS",
    metadata: {
      name: driverBio.fname,
      phone: driverBio.contact,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      //alert("Payment done successfully")
      navigate("/certificate");
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="w-50 m-auto pt-5 mt-5">
        <div
          className="btn-group w-100"
          role="group"
          aria-label="Button group with 4 buttons"
        >
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: "#007bff", padding: "1.5rem" }}
          >
            Vehicle
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: "#0069d9", padding: "1.5rem" }}
          >
            Insurer
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: "#0062cc", padding: "1.5rem" }}
          >
            Cover
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: "#005cbf", padding: "1.5rem" }}
          >
            Payment
          </button>
        </div>{" "}
        <br />
        <br />
        <Row className="row1">
          <h3
            style={{
              textAlign: "center",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            Insurance Details Confirmation
          </h3>
        </Row>
        <Container className="confirm">
          <Row className="row5">
            <h4 className="text-white py-2">INSURANCE DETAILS</h4>
          </Row>

          <Row className="rowC4">
            <Col className="p-4">
              <h3 className="confirmp">INSURANCE TYPE</h3>{" "}
            </Col>
            <Col className="p-4 d-flex align-items-center">
              <h3 className="confirmp">
                {carValueDetail[carValueDetail.length - 1].insurancetype}
              </h3>
            </Col>
          </Row>

          <Row className="rowC4">
            <Col className="p-4">
              <h3 className="confirmp">DURATION</h3>
            </Col>
            <Col className="p-4 d-flex align-items-center">
              <h3 className="confirmp">
                {carValueDetail[carValueDetail.length - 1].duration}
                </h3> {" "}
            </Col>
          </Row>

          <Row className="rowC4">
            <Col className="p-4">
              <h3 className="confirmp"> INSURANCE COMPANY</h3>
            </Col>
            <Col className="p-4 d-flex align-items-center">
              <h3 className="confirmp">
                {carValueDetail[carValueDetail.length - 1].company}
              </h3>{" "}
            </Col>
          </Row>

          <Row className="rowC4">
            <Col className="p-4">
              <h3 className="confirmp">VALUE OF THE CAR</h3>
            </Col>
            <Col className="p-4 d-flex align-items-center">
              <h3 className="confirmp">
                {carValueDetail[carValueDetail.length - 1].amount}
              </h3>
            </Col>
          </Row>

          <Row className="rowC4">
            <Col className="p-4">
              <h3 className="confirmp">PREMIUM</h3>
            </Col>
            <Col className="p-4 d-flex align-items-center">
              <h3 className="confirmp">
                {(carValueDetail[carValueDetail.length - 1].calcAmount).toFixed(2)}
              </h3>{" "}
            </Col>
          </Row>
        </Container>
        <div className="d-flex justify-content-end mt-4">
          <PaystackButton className="paybtn" {...componentProps} />
        </div>
      </div>
    </>
  );
}

export default InsuranceTypes