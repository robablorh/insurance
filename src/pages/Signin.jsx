import {Container , Row ,Col} from "react-bootstrap"
import ins from "../images/ins.png"
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"

const Signin = () => {

 const navigate = useNavigate()
   
 const navigateDashboard = () => {
  
  navigate('/dashboard');
};



  return (
    <div>
      <Container className="cont">
        <Row>
          <Col className="sign">
              <h2 className="sinh">Login</h2>

              <form>
                <label className="silab">Name:</label><br/>
                <input className='silinp'type="text" name="name"/><br/>

                <label className="silab">Email</label><br/>
                <input className='silinp'type="email" name="email"/><br/>

                <label className="silab">Password</label><br/>
                <input className='silinp'  type="password" name="password"/><br/>

                <label className="silab">Confirm Password</label><br/>
                <input className='silinp'  type="password" name="password"/><br/>

                <input  className='rad'type="radio" name='remeberme '/>
                <label className="rem">Remember Me</label> 
                <Link className="forg" to='/forgot'>forgot password?</Link><br/>

                <input  onClick={navigateDashboard}  className="sibtn" type="submit" value="login"/>
                <p className="sinp">You do not have an account? <Link to='/signup'>Sign-up</Link></p>
              </form>

              
          
          
          
          </Col>
          <Col>
              <img
                src={ins}
                height="700"
                width="600"
              
              
              
              />
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Signin