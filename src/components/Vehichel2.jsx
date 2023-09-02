import {Col, Container , Row, } from 'react-bootstrap'

import {useNavigate} from "react-router-dom"




const Vehichel2 = () => {

const navigate = useNavigate();

const navigatecarconfirmation =()=>{
  navigate('/carconfirmation');

}

  return (
    <div className="w-50 m-auto pt-5 mt-5">
      <Container className='flex justify-content-center align-items-center mt-3'>
        <div className="btn-group w-100" role="group" aria-label="Button group with 4 buttons">
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#007bff", padding: "1.5rem" }}>Vehicle</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0069d9", padding: "1.5rem" }}>Insurer</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0062cc", padding: "1.5rem" }}>Cover</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#005cbf", padding: "1.5rem" }}>Payment</button>
        </div>
        <Row className='row1'><h3 className="text-center">Find the car</h3></Row>
        <Row className='row2'><p className="text-center">Enter your chasis number and let our car search do the work for you.<br />
          if you dont know it click on No  to enter your details manually.</p></Row>
        <Row className='row5 mx-2 pe-0' style={{ width: "96.6%" }}>
          <h2 className="text-white">Find Car</h2></Row>
        <Container className='ms-2'>
          <Row className="v2row3">
            <Col md={4}>
              <label className='mt-3' >Make</label>
            </Col>
            <Col md={8}>
              <input type="text" name="make" className="form-control mt-3" />
            </Col>
          </Row>
          <Row className="v2row3">
            <Col md={4}>
              <label className='mt-3'>Model</label>
            </Col>
            <Col md={8}>
              <input type="text" name="model" className="form-control mt-3" />
            </Col>
          </Row>
          <Row className="v2row3">
            <Col md={4}>
              <label className='mt-3'>Fuel type</label>
            </Col>
            <Col md={8}>
              <select name="fuelType" className="form-control mt-3">
                <option value="" disabled selected hidden style={{color: "green"}}>Select Fuel Type</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
              </select>
            </Col>
          </Row>
          <Row className="v2row3">
            <Col md={4}>
              <label className='mt-3'>Year of Manufacture</label>
            </Col>
            <Col md={8}>
              <select name="yearOfManufacture" className="form-control mt-3">
                <option value="" disabled selected hidden>Select Year of Manufacture</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </Col>
          </Row>
          <Row className="">
            <Col md={{ span: 8, offset: 4 }}>
              <input onClick={navigatecarconfirmation} type="submit" value="Show Results" className="btn btn-primary py-3 px-4" style={{marginLeft: "17.6rem", marginTop: "1.2rem"}}/>
            </Col>
          </Row>
        </Container>
</Container>


</div>
  )
}

export default Vehichel2