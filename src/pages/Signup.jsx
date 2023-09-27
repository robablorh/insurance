/* eslint-disable no-unused-vars */
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import car3 from "../images/car3.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { addUser } from "../redux/userSlice";
import { useDispatch, /*useSelector*/ } from "react-redux";
import logo from '../images/newlogo.png';
import Footer from '../components/Footer'

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const user = useSelector(store => store.user.user)
  //console.log(user)

  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("")
  const [passwordError, setPasswordError] = useState("")

  //const {name, email, password, confirmedPassword} = signUpDetails
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/user/signup",signUpDetails);
      //console.log(response);
      const data = response.data;
      
      if(data.success){
        dispatch(addUser(data.data.name));
        navigate("/vehichel1");
      }
    } catch (error) {
      if(error.response.status === 401){
        setErrorMessage(error.response.data.message)
      }else if(error.response.status === 406){
        setPasswordError(error.response.data.message);
      }
      console.log(error);
    }
    setSignUpDetails({
      ...signUpDetails,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  };

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
      <Container className="w-50  my-auto"
        style={{
          backgroundColor: "white", // Replace with your desired background color
          boxShadow: "5px 5px 10px 10px rgba(0,0,0,0.5)",
          borderRadius: "2rem",
          padding: "2rem", // Add padding to your div content
        }}>
        <Row>
          <Col className="sign">
            <h2 className="sinh" style={{ color: "rgb(250, 125, 15)" }}>Sign Up</h2>
            <p className="text-center" style={{ color: "rgb(250, 125, 15)"}}>Sign-up below to get started</p>

            <form className="siform" onSubmit={handleSubmit}>
              <label className="silab">Name:</label>
              <input
                className="silinp"
                type="text"
                name="name"
                value={signUpDetails.name}
                onChange={handleChange}
              />

              <label className="silab">Email</label>
            
              <input
                className="silinp"
                type="email"
                name="email"
                value={signUpDetails.email}
                onChange={handleChange}
              />
              {errorMessage && <div>{errorMessage}</div>}
          

              <label className="silab">Password</label>
            
              <input
                className="silinp"
                type="text"
                name="password"
                value={signUpDetails.password}
                onChange={handleChange}
              />
            

              <label className="silab">Confirm Password</label>
           
              <input
                className="silinp"
                type="text"
                name="confirmPassword"
                value={signUpDetails.confirmPassword}
                onChange={handleChange}
              />
              {passwordError && <span>{passwordError}</span>}
            

              <input className="rad" type="radio" name="remeberme " />
              <label className="silab">Remember Me</label>
             

              <input className="sibtn text-white" type="submit" value="Sign Up" />
              <p className="sinp">
                {" "}
                Already have an account? <Link to="/login">login</Link>
              </p>
            </form>
          </Col>
          {/* <Col>
            <img src={car3} height="700" width="600" />
          </Col> */}
        </Row>
      </Container>
      </div>
      <Footer/>
    </div>
  );
};

export default Signup;
