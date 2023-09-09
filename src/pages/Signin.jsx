/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";
import signinpng from "../images/signin.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
// import { addUser } from "../redux/userSlice";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
   const {name, value} = e.target
   setLoginDetails((prev) => (
    {
      ...prev,
      [name]: value
    }
   ))
  }
   console.log(loginDetails);
  const handleSubmit = async (e) => {
    e.preventDefault()
     try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        loginDetails,
        //{ withCredentials: true }
      );
      console.log(response);
      const data = response.data
      console.log(data)
      if (data.success) {
        // dispatch(addUser(data.data.name));
        navigate("/vehichel1");
      }
     } catch (error) {
      console.error(error)
     }
  }


  return (
    <div style={{ backgroundColor: "", height: "100vh" }}>
      <Container className="cont">
        <Row>
          <Col
            md={8}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="sign">
              <h2 className="sinh">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={loginDetails.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={loginDetails.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember-me"
                  />
                  <label htmlFor="remember-me" className="form-check-label">
                    Remember Me
                  </label>
                  <Link className="forg" to="/forgot">
                    Forgot Password?
                  </Link>
                </div>

                {/* <button type="submit" className="btn btn-primary sibtn">
                  Login
                </button> */}

                <input className="sibtn" type="submit" value="login" />
                <p className="sinp">
                  You do not have an account? <Link to="/signup">Sign-up</Link>
                </p>
              </form>
            </div>
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={signinpng}
              alt="car insurance app"
              className="img-fluid"
              style={{
                backgroundColor: "blue",
                boxShadow: "10px 10px 10px 0px rgba(0,0,0,0.75)",
                height: "35rem",
                width: "100%",
                marginTop: "5rem",
                borderRadius: "2rem",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signin;
