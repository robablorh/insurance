/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import { useSelector, useDispatch } from "react-redux";
import { getCarValue, getCarValueDetail } from "../redux/userSlice";
import axios from "axios";


const Carconfirmation1 = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showValueInput, setShowValueInput] = useState(false);

  const dispatch = useDispatch();
  const carDetails = useSelector((store) => store.user.carDetails);
  console.log(carDetails)
  

  const insuranceValue = useSelector((store) => store.user.carValueDetail);

  const [carValue, setCarValue] = useState({
    amount: "",
    currency: "",
    insurancetype: "",
    duration: "",
    company: "",
    calcAmount: 0,
    email: carDetails[0].email,
  });

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

  const navigatevehichel2 = () => {
    navigate("/vehichel2");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateTotalAmount = () => {
    console.log("i get here")
    if (
      carValue.insurancetype === "comprehensive" &&
      carValue.duration === "threemonths"
    ) {
      const totalInsuranceAmount = carValue.amount * (4 / 100);
      setCarValue((prev) => ({
        ...prev,
        calcAmount: totalInsuranceAmount.toFixed(0),
      }));
    } else if (
      carValue.insurancetype === "comprehensive" &&
      carValue.duration === "sixmonths"
    ) {
      const totalInsuranceAmount = carValue.amount * (8 / 100);
      setCarValue((prev) => ({
        ...prev,
        calcAmount: totalInsuranceAmount,
      }));
    } else if (
      carValue.insurancetype === "comprehensive" &&
      carValue.duration === "oneyear"
    ) {
      const totalInsuranceAmount = carValue.amount * (12 / 100);
      setCarValue((prev) => ({
        ...prev,
        calcAmount: totalInsuranceAmount,
      }));
    } else if (
      carValue.insurancetype === "thirdparty" &&
      carValue.duration === "threemonths"
    ) {
      const totalInsuranceAmount = carValue.amount * (0.5 / 100);
      setCarValue((prev) => ({
        ...prev,
        calcAmount: totalInsuranceAmount,
      }));
    } else if (
      carValue.insurancetype === "thirdparty" &&
      carValue.duration === "sixmonths"
    ) {
      const totalInsuranceAmount = carValue.amount * (0.8 / 100);
      setCarValue((prev) => ({
        ...prev,
        calcAmount: totalInsuranceAmount,
      }));
    } else if (
      carValue.insurancetype === "thirdparty" &&
      carValue.duration === "oneyear"
    ) {
      const totalInsuranceAmount = carValue.amount * (1 / 100);
      setCarValue((prev) => ({
        ...prev,
        calcAmount: totalInsuranceAmount,
      }));
    } else if (
      carValue.insurancetype === "thirdpartyfireandtheft" &&
      carValue.duration === "threemonths"
    ) {
      const totalInsuranceAmount = carValue.amount * (0.7 / 100);
      setCarValue((prev) => ({
        ...prev,
        calcAmount: totalInsuranceAmount,
      }));
    } else if (
      carValue.insurancetype === "thirdpartyfireandtheft" &&
      carValue.duration === "sixmonths"
    ) {
      const totalInsuranceAmount = carValue.amount * (0.9 / 100);
      setCarValue((prev) => ({
        ...prev,
        calcAmount: totalInsuranceAmount,
      }));
    } else if (
      carValue.insurancetype === "thirdpartyfireandtheft" &&
      carValue.duration === "oneyear"
    ) {
      const totalInsuranceAmount = carValue.amount * (1.1 / 100);
      setCarValue((prev) => ({
        ...prev,
        calcAmount: totalInsuranceAmount,
      }));
    }
  };

  const handleClick = async () => {
    console.log("i get here")
    try {
      const response = await axios.post(
        "http://localhost:3000/api/car/carValue",
        carValue
      );
      const data = response.data;
      console.log(data)
      const userCarValueRes = await axios.get(
        `http://localhost:3000/api/car/getCarValueData/${carDetails[0].email}`
      );
      const carValueTxn = userCarValueRes.data.data;
      if (data.success) {
        dispatch(getCarValue(data.data));
        for (let i of carValueTxn) {
          dispatch(getCarValueDetail(i));
        }
        navigate("/driverbio");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="w-50 m-auto">
        <Container className="">
          <div
            className="btn-group w-100 mt-0"
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
          </div>

          <Row className="row1">
            <h1 className="text-center text-danger">Toyota Corolla</h1>
          </Row>
          <Row className="row2">
            <p className="text-center">Is this your car?</p>
          </Row>

          <Row className="row5">
            <Row>
              <Col xs={8}>
                <h4 className="text-white py-2">Toyota Corolla</h4>
              </Col>
              <Col xs={4} className="text-end">
                <button
                  onClick={navigatevehichel2}
                  className="cbbtn border-none px-4 py-2 m-0 text-danger box"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "0.5rem",
                  }}
                >
                  Not Yours
                </button>
              </Col>
            </Row>
          </Row>

          <Row className="rowC4">
            <Col xs={6} className="p-4">
              Registration number
            </Col>
            <Col xs={6} className="p-4 pe-5 text-end">
              {carDetails[carDetails.length - 1].carRegNo}{" "}
            </Col>
          </Row>
          <Row className="rowC4">
            <Col xs={6} className="p-4">
              Make
            </Col>
            <Col xs={6} className="p-4 pe-5 text-end">
              {carDetails[carDetails.length - 1].make}
            </Col>
          </Row>
          <Row className="rowC4">
            <Col xs={6} className="p-4">
              model
            </Col>
            <Col xs={6} className="p-4 pe-5 text-end">
              {carDetails[carDetails.length - 1].model}
            </Col>
          </Row>
          <Row className="rowC4">
            <Col xs={6} className="p-4">
              Fuel type
            </Col>
            <Col xs={6} className="p-4 pe-5 text-end">
              {carDetails[carDetails.length - 1].fuelType}
            </Col>
          </Row>
          <Row className="rowC4">
            <Col xs={6} className="p-4">
              year of Manufacture
            </Col>
            <Col xs={6} className="p-4 pe-5 text-end">
              {carDetails[carDetails.length - 1].yearOfManufacture}
            </Col>
          </Row>
          <br />
          <br />

          <Row className="row5">
            <h4 className="text-white py-2">
              Car Value/Insurance Company/Payment
            </h4>
          </Row>

          <Row className="rowC4">
            <Col className="p-4">Value of the car</Col>
            <Col className="p-4 d-flex align-items-center">
              <select
                name="currency"
                value={carValue.currency}
                onChange={handleChange}
                id="currency"
                className="form-select me-2"
              >
                <option value="" disabled>
                  Select Currecy
                </option>
                <option value="Ghana Cedis">Ghana Cedis</option>
                <option value="dollar">Dollars</option>
                <option value="Euro">Euro</option>
                <option value="British Pounds">British Pounds</option>
              </select>
              <input
                type="text"
                name="amount"
                value={carValue.amount}
                onChange={handleChange}
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="rowC4">
            <Col className="p-4">Insurance Type </Col>
            <Col className="p-4 d-flex align-items-center">
              <select
                name="insurancetype"
                value={carValue.insurancetype}
                onChange={handleChange}
                id="insurancetype"
                className="form-select me-2"
              >
                <option value="" disabled>
                  Select Insurance Cover
                </option>
                <option value="comprehensive">Comprehensive</option>
                <option value="thirdparty">Third Party</option>
                <option value="thirdpartyfireandtheft">
                  Third Party, Fire and Theft
                </option>
              </select>
            </Col>
          </Row>

          <Row className="rowC4">
            <Col className="p-4">Duration</Col>
            <Col className="p-4 d-flex align-items-center">
              <select
                name="duration"
                value={carValue.duration}
                onChange={handleChange}
                id="duration"
                className="form-select me-2"
              >
                <option value="" disabled>
                  Select Duration
                </option>
                <option value="threemonths">Three Months</option>
                <option value="sixmonths">Six Months</option>
                <option value="oneyear">One Year</option>
              </select>
            </Col>
          </Row>

          <Row className="rowC4">
            <Col className="p-4">Choose Insurance Company</Col>
            <Col className="p-4 d-flex align-items-center">
              <select
                name="company"
                value={carValue.company}
                onChange={handleChange}
                id="campany"
                className="form-select me-2"
              >
                <option value="" disabled>
                  Select Company
                </option>
                <option value="phoenixinsurance">Pheonix Insurance</option>
                <option value="priorityinsurance">Priority Insurance</option>
                <option value="sereneinsurance">Serene Insurance</option>
                <option value="starinsurance">Star Insurance</option>
                <option value="prudentialinsurance">
                  Prudential Insurance
                </option>
                <option value="enterpriseinsurance">
                  Enterprise Insurance
                </option>
              </select>
            </Col>
          </Row>
          <br />

          <Row>
            <button className="generate" onClick={generateTotalAmount}>
              Click to View your Premuim
            </button>
            {carValue.calcAmount && (
              <Row className="rowC4">
                <p>{carValue.calcAmount}</p>
              </Row>
            )}
          </Row>

          <br />
          <br />

          <Row>
            <Col xs={6}></Col>
            <Col xs={6} className="d-flex justify-content-end">
              <button
                onClick={handleClick}
                className="btn btn-success py-3 px-5 my-3"
              >
                Continue
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Carconfirmation1;
