import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import { useState } from "react";
import generateYearOptions from "./year";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetails } from "../redux/userSlice";
import { chassisNumberGenerator } from "../chassis/chassisGenertor";

import axios from "axios";

const Vehichel2 = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);

  const years = generateYearOptions();

  const [carInfo, setCarInfo] = useState({
    carRegNo: "",
    make: "",
    color: "",
    model: "",
    fuelType: "",
    yearOfManufacture: "",
    email: user[0].email,
    chassisNo: chassisNumberGenerator(),
  });

  const [mail] = useState(user[0].email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarInfo((prev) => ({
      ...prev,
      [name]: value.toUpperCase(),
    }));
  };

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/car/createCar",
        carInfo
      );
      const data = response.data;
      const cartDetRes = await axios.post(
        "http://localhost:3000/api/car/getIndividualCars",
        { email: mail }
      );
      const carData = cartDetRes.data.data;
      if (data.success) {
        navigate("/carconfirmation");
        for (let i of carData) {
          dispatch(getCarDetails(i));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="w-50 m-auto pt-1 mt-1">
        <Container className="flex justify-content-center align-items-center mt-3">
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
          <Row className="row5 mx-2 pe-0" style={{ width: "96.6%" }}>
            <h2 className="text-white">Find Car</h2>
          </Row>
          <Container className="ms-2">
            <Row className="v2row3">
              <Col md={4}>
                <label className="mt-3">Car Registration No</label>
              </Col>
              <Col md={8}>
                <input
                  type="text"
                  name="carRegNo"
                  value={carInfo.carRegNo}
                  onChange={handleChange}
                  className="form-control mt-3"
                />
              </Col>
            </Row>
            <Row className="v2row3">
              <Col md={4}>
                <label className="mt-3">Make</label>
              </Col>
              <Col md={8}>
                <input
                  type="text"
                  name="make"
                  value={carInfo.make}
                  onChange={handleChange}
                  className="form-control mt-3"
                />
              </Col>
            </Row>
            <Row className="v2row3">
              <Col md={4}>
                <label className="mt-3">Color</label>
              </Col>
              <Col md={8}>
                <input
                  type="text"
                  name="color"
                  value={carInfo.color}
                  onChange={handleChange}
                  className="form-control mt-3"
                />
              </Col>
            </Row>
            <Row className="v2row3">
              <Col md={4}>
                <label className="mt-3">Model</label>
              </Col>
              <Col md={8}>
                <input
                  type="text"
                  name="model"
                  value={carInfo.model}
                  onChange={handleChange}
                  className="form-control mt-3"
                />
              </Col>
            </Row>
            <Row className="v2row3">
              <Col md={4}>
                <label className="mt-3">Fuel type</label>
              </Col>
              <Col md={8}>
                <select
                  name="fuelType"
                  value={carInfo.fuelType}
                  onChange={handleChange}
                  className="form-control mt-3"
                >
                  <option value="" disabled>
                    select an option
                  </option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                </select>
              </Col>
            </Row>
            <Row className="v2row3">
              <Col md={4}>
                <label className="mt-3">Year of Manufacture</label>
              </Col>
              <Col md={8}>
                <select
                  name="yearOfManufacture"
                  value={carInfo.yearOfManufacture}
                  onChange={handleChange}
                  className="form-control mt-3"
                >
                  <option value="" disabled hidden>
                    Select Year of Manufacture
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            <Row>
              <Col
                md={{ span: 8, offset: 4 }}
                className="d-flex justify-content-end"
              >
                <input
                  onClick={handleClick}
                  type="submit"
                  value="Show Results"
                  className="btn btn-primary py-3 px-4"
                  style={{ marginTop: "1.2rem" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default Vehichel2;
