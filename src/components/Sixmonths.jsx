import { Button, Container,Row} from "react-bootstrap"

const Sixmonths = () => {
  return (
    <div className="w-100">
      <Container>
        <Row style={{ backgroundColor: "#C2D2D8", borderBottom: "3px solid gray" }}>
          <h4 className="text-danger">Comprehensive Insurance</h4>
          <p>Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end"> GhS 600</h6></p>
        </Row>
        <Row style={{ backgroundColor: "#C2D2D8", borderBottom: "3px solid gray" }}>
          <h4 className="text-danger">Third-Party Insurance</h4>
          <p>Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end"> GhS 200</h6></p>
        </Row>
        <Row style={{ backgroundColor: "#C2D2D8", borderBottom: "3px solid gray" }}>
          <h4 className="text-danger">Third-Party Fire and Theft Insurance</h4>
          <p>Coverts death, bodily injury, damage to other persons property, fire, theft, windscreen and accidental damage to your car
            <h6 className="mt-1 text-danger text-end"> GhS 400</h6></p>
        </Row>
        <div className="d-flex justify-content-end mt-4" style={{ width: "100%" }}>
          <Button className="py-3 px-4" variant="primary" type="submit">
            Continue
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Sixmonths