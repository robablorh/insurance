import { Container, Row, Col, Card } from "react-bootstrap";
import car from "../images/car.jpeg"
import caro2 from "../images/caro2.jpeg"
import caro4 from "../images/caro4.jpeg"
import caro5 from "../images/caro5.jpeg"
import Carousel from 'react-bootstrap/Carousel';
import ent from '../images/enterprise.png'
import phoe from '../images/phoenix.png'
import pri from '../images/Priority.png'
import pru from '../images/prudential.jpeg'
import star from '../images/star.jpeg'
import alli from '../images/alli.jpeg'
import { Link } from 'react-router-dom'
import ins from '../images/ins.png'
import third from '../images/car3.png'
import theft from '../images/theft.jpeg'
import Navbar1 from "../components/Navbar1"
import Navbar2 from "../components/Navbar2"


const Home = () => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div>

        <Carousel>
          <Carousel.Item interval={1000}>
            <img

              src={car}
              height="600"
              width="100%"
              style={{ filter: 'brightness(60%)' }}

            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img

              src={caro2}
              height="600"
              width="100%"
              style={{ filter: 'brightness(60%)' }}

            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>

            <img

              src={caro4}
              height="600"
              width="100%"
              style={{ filter: 'brightness(60%)' }}


            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img


              src={caro5}
              height="600"
              width="100%"
              style={{ filter: 'brightness(60%)' }}

            />
            <Carousel.Caption>
              <h3>Forth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        <h1 className="h1head">Insurance Companies</h1>


        <Container>

          <Row>

            <Col className="card1">
              <Link>

                <Card style={{ width: '18rem', height: '300px' }}>
                  <Card.Img variant="top" src={alli} />

                </Card>

              </Link>

            </Col>



            <Col className="card2">
              <Link>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={star} />

                </Card>

              </Link>

            </Col>




            <Col className="card3">
              <Link>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={pri} />

                </Card>

              </Link>

            </Col>

          </Row>
          <Row>
            <Col className='card4'>
              <Link>

                <Card style={{ width: '18rem', }}>
                  <Card.Img variant="top" src={pru} />

                </Card>

              </Link>
            </Col>




            <Col className="card5">
              <Link>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={phoe} />

                </Card>

              </Link>


            </Col>
            <Col className="card6">

              <Link>

                <Card style={{ width: '18rem', height: '300px' }}>
                  <Card.Img variant="top" src={ent} />

                </Card>

              </Link>
            </Col>

          </Row>

        </Container>


        <h1 className="h2head">INSURANCE COVER AVAILABLE</h1>
        <Container className="foot">


          <Row>

            <Col>
              <img
                src={ins}
                height="300"
                width="300"

              />
              <h3>Comprehensive</h3>

            </Col>
            <Col>

              <img
                src={third}
                height="300"
                width="300"

              />
              <h3>Third-Party</h3>


            </Col>
            <Col>
              <img
                src={theft}
                height="200"
                width="300"

              />
              <h3 className="tparty">Third Party Fire and Theft </h3>




            </Col>
          </Row>



        </Container>

      </div>
    </>
  )
}

export default Home