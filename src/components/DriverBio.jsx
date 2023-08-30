import { Container, Row, Col, Form, Button } from "react-bootstrap";

const DriverBio = () => {
  return (
    <div className="">
      <Container className="flex justify-content-center align-items-center mt-5" style={{ width: "55.6%" }}>
        <div className="btn-group w-100" role="group" aria-label="Button group with 4 buttons">
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#007bff", padding: "1.5rem" }}>Vehicle</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0069d9", padding: "1.5rem" }}>Insurer</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0062cc", padding: "1.5rem" }}>Cover</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#005cbf", padding: "1.5rem" }}>Payment</button>
        </div>
        <Row className="row1">
          <h3 style={{ textAlign:"center", marginTop:"2rem", marginBottom:"2rem" }}>Bio Data</h3>
        </Row>
        <Row className="row5 ms-1" style={{ width: "99%"}}>
          <h2 className="text-white">Insurer Details</h2>
        </Row>
        <Form className="ps-3" style={{ width: "98%" }}>
          <Form.Group as={Row} controlId="formFirstName" style={{ backgroundColor: "#C2D2D8"}}>
            <Form.Label column sm={3} className="mt-2">
              First Name:
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="text" placeholder="Enter first name" style={{ width: "90%", marginBottom: "1rem", marginLeft: "1rem", marginTop: "1rem" }} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formLastName" style={{ backgroundColor: "#C2D2D8" }}>
            <Form.Label column sm={3}>
              Last Name:
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="text" placeholder="Enter last name" style={{ width: "90%", marginBottom: "1rem" ,marginLeft: "1rem"}} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formEmail" style={{ backgroundColor: "#C2D2D8" }}>
            <Form.Label column sm={3}>
              Email Address:
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="email" placeholder="Enter email" style={{ width: "90%", marginBottom: "1rem", marginLeft: "1rem" }} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHomeAddress" style={{ backgroundColor: "#C2D2D8" }}>
            <Form.Label column sm={3}>
              Home Address:
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="text" placeholder="Enter home address" style={{ width: "90%", marginBottom: "1rem", marginLeft: "1rem" }} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formContact" style={{ backgroundColor: "#C2D2D8" }}>
            <Form.Label column sm={3}>
              Contact:
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="text" placeholder="Enter contact number" style={{ width: "90%", marginBottom: "1rem", marginLeft: "1rem" }} />
            </Col> 
          </Form.Group>
          

        </Form>
      </Container>
      <div className="d-flex justify-content-end mt-4" style={{ width: "76.9%" }}>
        <Button className="py-3 px-4" variant="primary" type="submit">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default DriverBio;
