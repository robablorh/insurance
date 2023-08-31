import { Container, Row,Col } from "react-bootstrap"
import {useNavigate} from "react-router-dom"

const Vehichel1 = () => {

const navigate = useNavigate();

const navigatecarconfirmation =()=>{
  navigate('/carconfirmation');

}
  const navigatevehichel2 =() =>{
     
    navigate('/vehichel2');
  }



  return (
    <div>
         <Container>
            <div className="btn-group w-100" role="group" aria-label="Button group with 4 buttons">
              <button type="button" className="btn btn-primary" style={{ backgroundColor: "#007bff", padding: "1.5rem" }}>Vehicle</button>
              <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0069d9", padding: "1.5rem" }}>Insurer</button>
              <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0062cc", padding: "1.5rem" }}>Cover</button>
              <button type="button" className="btn btn-primary" style={{ backgroundColor: "#005cbf", padding: "1.5rem" }}>Payment</button>
            </div>
            <div className="wholebox">
              <Row className='row1'><h3>Find your car</h3></Row>
              <Row className='row2'><p>Enter your chasis number and let our car search do the work for you.if you dont know it click on No  to enter your details manually.</p></Row>
              <Row className='row5'><h2> Car Details</h2></Row>
              <Row className='row3'>
                <Col><p className='prow'>Do you know the chasis number of your car?</p></Col>
              <Col> <button onClick={navigatevehichel2 }  className='robtn'>No</button></Col>
              </Row>
              <Row className='row4'>
                <form>
                    <label  className='lach'>Chasis Number :</label>
                    <input  className='labin' type='text' name='chasis'/> <br/>
                  
                </form>
              </Row>

              <button  onClick={navigatecarconfirmation}className='find' >Find car</button> 
              </div>
      
</Container>


    </div>
  )
}

export default Vehichel1