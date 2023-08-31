import { Container, Row , Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import car3 from '../images/car3.png'
import { useNavigate } from "react-router-dom"

const Signup = () => {

  const navigate = useNavigate()
   
  const navigateDashboard = () => {
   
   navigate('/dashboard');
 };
  return (
    
    <div>
    <Container>
      <Row>
        <Col className="sign">
            <h2 className="sinh">Sign Up</h2>
            <p>Sign-up below to get started</p>

            <form className="siform">  
                <label className="silab"  >Name:</label><br/>
                <input className='silinp'  type="text" name="name"/><br/>

                <label className="silab"  >Email</label><br/>
                <input className='silinp'  type="email" name="email"/><br/>

                <label className="silab"  >Password</label><br/>
                <input className='silinp'   type="password" name="password"/><br/>

                <label className="silab"  >Confirm Password</label><br/>
                <input className='silinp'   type="password" name="password"/><br/>

                <input  className='rad' type="radio" name='remeberme '/>
                <label className="rem">Remember Me</label><br/>

                <input onClick={navigateDashboard} className="sibtn" type="submit" value="Sign Up"/>
                <p className="sinp"> Already have an account? <Link to='/login'>login</Link></p>
              </form>
            
        
        
        
        </Col>
        <Col>
        <img
                src={car3}
                height="700"
                width="600"
              
              
              
              />
        
        </Col>
      </Row>
    </Container>

  </div>

  )
}

export default Signup