/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from 'react-bootstrap';
import AboutImage from "../images/About image.jpg";
import "../App.css";

const About = () => {
  return (
    <div className='mt-3 pt-3'>
      <h1 className='text-primary text-center'>ABOUT US</h1>
      <Container className='mt-3 pt-3' >
        <Row className="">
          <Col md={6}>
            <div className='image-container'>
              <img src={AboutImage} alt="car insurance app" className="img-fluid"
                style={{
                  
                }}

              />
            </div>
          </Col>
          <Col md={6}>
            <p>Welcome to our car insurance app! Our app is designed to make it easy for you to get car insurance on the go, without having to visit the offices of insurance companies.</p>
            <h5 className='text-primary'>Here are some of the features of our app:</h5>
            <ul style={{ listStyleType: "circle" }}>
              <li><span className='fw-bold'>Easy and fast insurance quotes:</span> You can get a quote for car insurance in just a few minutes, without having to fill out long forms or visit an office.</li>
              <li><span className='fw-bold'>Paperless claims:</span>You can submit claims through the app, without having to fill out paperwork or visit an office.</li>
              <li><span className='fw-bold'>Mobile ID cards:</span> You can access your auto insurance ID card from the app, so you don't have to search for it in your glove compartment.</li>
              <li><span className='fw-bold'>Customizable coverage:</span> You can customize your coverage to fit your needs and budget.</li>
            </ul>
            <p>We have taken inspiration from the best car insurance apps out there, such as Geico, State Farm, and Farmers, to create an exceptional app that covers all the bases for going paperless and making claims. Our app is user-friendly and easy to use, with a range of tools that allow you to manage your policy, file claims, and pay your bill. We are committed to providing you with the best car insurance experience possible. If you have any questions or concerns, please don't hesitate to contact us. Thank you for choosing our car insurance app!</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About


// Photo by < a href = "https://unsplash.com/@whykei?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" > why kei</ > on < a href = "https://unsplash.com/photos/8e2gal_GIE8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" > Unsplash</ >
