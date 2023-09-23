/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { getCarDetails } from "../redux/userSlice";

const Vehichel1 = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showCarConfirmation, setShowCarConfirmation] = useState(false);

  const [chassisNumber, setChassisNumber] = useState("")
  const [messg, setMessg] = useState("")

  const handleChange = (e) => {
    const {name, value} = e.target
    setChassisNumber(value)
  }

  const handleClick = async () => {
    if(!chassisNumber){
     setMessg("Field required")
    }
    const response = await axios.get(`http://localhost:3000/api/car/getChassisNo/${chassisNumber}`);
    const data = response.data;
    if(data.success){
      dispatch(getCarDetails(data.data))
      navigate("/carconfirmation1");
    }else{
      navigate("/vehichel2");
    }

  }

  

  const navigatevehichel2 = () => {
    navigate("/vehichel2");
    console.log("This one too is working")
  };

  const [showForm, setShowForm] = useState(false);

  const handleYesClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <Navbar2 />
      <div className="w-50 m-auto pt-4 mt-4">
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
        </div>
        <Container className="flex justify-content-center align-items-center mt-3">
          <Row className="row1">
            <h3 className="text-center">Find the car</h3>
          </Row>
          <Row className="row2">
            <p className="text-center">
              Enter your chasis number and let our car search do the work for
              you.
              <br />
              if you dont know it click on No to enter your details manually.
            </p>
          </Row>
          <Row className="row5 ms-2 pe-0" style={{ width: "100%" }}>
            <h2 className="text-white">Find Car</h2>
          </Row>
          <Row className="row3 ms-2" style={{ width: "100%" }}>
            <Col>
              <p className="prow">Do you know the chasis number of your car?</p>
            </Col>
            <Col className="p-4 d-flex justify-content-end">
              <button
                className="btn btn-success me-3 ps-5 pe-5 text-center box"
                onClick={handleYesClick}
              >
                Yes
              </button>
              <button
                onClick={navigatevehichel2}
                className="btn btn-danger ps-5 pe-5 text-center box"
              >
                No
              </button>
            </Col>
          </Row>
          {showForm && (
            <Row className="row4 ms-2" style={{ width: "100%" }}>
              <form className="form-inline">
                <label className="mr-2 mb-3" htmlFor="chasis-number">
                  Chasis Number:
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  id="chasis-number"
                  name="chassisNumber"
                  value={chassisNumber}
                  onChange={handleChange}
                />
                
               { messg && <div className="mesg">{messg}</div>}
              </form>

              <div className="d-flex justify-content-end mt-4">
                <input
                  onClick={handleClick}
                  className="find btn btn-success"
                  type="submit"
                  value="Find Car"
                />
              </div>
            </Row>
          )}
        </Container>
      </div>
    </>
  );
};

export default Vehichel1;
