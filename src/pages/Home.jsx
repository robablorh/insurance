import car from "../images/car.jpeg"
import caro2 from "../images/caro2.jpeg"
import caro4 from "../images/caro4.jpeg"
import caro5 from "../images/caro5.jpeg"
import Carousel from 'react-bootstrap/Carousel';
import Navbar1 from "../components/Navbar1";

const Home = () => {
  return (
    <>
      <Navbar1/>
      <div>

        <Carousel>
          <Carousel.Item interval={1000}>
            <img

              src={car}
              height="750"
              width="100%"
              style={{ filter: 'brightness(60%)' }}

            />
            
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img

              src={caro2}
              height="750"
              width="100%"
              style={{ filter: 'brightness(60%)' }}

            />
           
          </Carousel.Item>
          <Carousel.Item>

            <img

              src={caro4}
              height="750"
              width="100%"
              style={{ filter: 'brightness(60%)' }}
            />
            
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={caro5}
              height="750"
              width="100%"
              style={{ filter: 'brightness(60%)' }}
            />
            
          </Carousel.Item>
        </Carousel>    
      </div>
    </>
  )
}

export default Home