/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Nav, Navbar} from "react-bootstrap";
import signinpng from "../images/signin.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {useCookies} from "react-cookie"
import axios from "axios"
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../images/newlogo.png';
import Footer from '../components/Footer'

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const cookies = useCookies([])
  

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
   
  const handleSubmit = async (e) => {
    e.preventDefault()
     try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        loginDetails,
        { withCredentials: true }
      );

      
      const data = response.data
      if (data.success) {
        dispatch(addUser(data.user));
        navigate("/vehichel1");
      } else{
        toast.error(data.message)
      }
     } catch (error) {
     
      console.error(error)
     }
  }


  return (
   <div>
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <div className="d-flex align-items-center">
            <img
              alt=""
              src={logo}
              width="100"
              height="70"
              className="d-inline-block align-top"
            />
            <span className="fw-bolder text-primary ms-1">INSURANCE</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto flex-wrap">
              <Nav.Item className="text-center"> {/* Center-align the first item */}
                <Nav.Link>
                  <Link className="n2links" to='/'>Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-center"> {/* Center-align the second item */}
                <Nav.Link className="n22links">
                  <Link to='/autoinsurance'>Insurance Companies</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-center"> {/* Center-align the third item */}
                <Nav.Link className="n22links">
                  <Link to='/insurancecovers'>Insurance Covers</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>



    <div style={{ backgroundColor: "#f2eefb", height: "100vh" }} className="d-flex justify-content-center rounded shadow p-4 mx-auto">
      <Container className="w-50 h-75 my-auto"
        style={{
          backgroundColor: "white", // Replace with your desired background color
          boxShadow: "5px 5px 10px 10px rgba(0,0,0,0.5)",
          borderRadius: "2rem",
          padding: "2rem", // Add padding to your div content
        }}>
        <Row>
          <Col
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="sign">
              <h2 className="sinh" style={{ color: "rgb(250, 125, 15)"}}>Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label silab">
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
                  <label htmlFor="password" className="form-label silab">
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

                <ToastContainer position="top-center" autoClose={3000} />

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input rad"
                    id="remember-me"
                  />
                  <label htmlFor="remember-me" className="form-check-label silab">
                    Remember Me
                  </label>
                  <Link className="forg" to="/forgot">
                    Forgot Password?
                  </Link>
                </div>

                {/* <button type="submit" className="btn btn-primary sibtn">
                  Login
                </button> */}

                <input className="sibtn text-white" type="submit" value="login" />
                <p className="sinp">
                  You do not have an account? <Link to="/signup">Sign-up</Link>
                </p>
              </form>
            </div>
          </Col>
          {/* <Col
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
          </Col> */}
        </Row>
      </Container>
    </div>
    <Footer/>
    </div>
  );
};

export default Signin;
