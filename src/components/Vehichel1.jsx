import { Container, Row,Col } from "react-bootstrap"

const Vehichel1 = () => {
  return (
    <div>
         <Container>

<Row className='row1'><h3>Find the car</h3></Row>
<Row className='row2'><p>Enter your chasis number and let our car search do the work for you.if you dont know it click on No  to enter your details manually.</p></Row>
<Row className='row5'><h2>Find Car</h2></Row>
<Row className='row3'>
   <Col><p className='prow'>Do you know the chasis number of your car?</p></Col>
   <Col><button className='robtn'>Yes</button><button className='robtn'>No</button></Col>
</Row>
<Row className='row4'>
   <form>
       <label  className='lach'>Chasis Number :</label>
       <input  className='labin' type='text' name='chasis'/> <br/>
       <input  className='find' type='submit' value='Find car'/>
   </form>
</Row>
      
</Container>


    </div>
  )
}

export default Vehichel1