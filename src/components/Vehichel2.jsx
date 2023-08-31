import {Container , Row, } from 'react-bootstrap'
import {useNavigate} from "react-router-dom"
import Dash from '../pages/Dash';



const Vehichel2 = () => {

const navigate = useNavigate();

const navigatecarconfirmation =()=>{
  navigate('/carconfirmation');

}

  return (
    <div>
      <Dash/>
     
    <Container>

    <div className="btn-group w-100" role="group" aria-label="Button group with 4 buttons">
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#007bff", padding: "1.5rem" }}>Vehicle</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0069d9", padding: "1.5rem" }}>Insurer</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#0062cc", padding: "1.5rem" }}>Cover</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#005cbf", padding: "1.5rem" }}>Payment</button>
        </div> 
<div className="wholebox">
<Row className='row1'><h3>Find the car</h3></Row>
<Row className='row2'><p>Ennter your car details here.</p></Row>
<Row className='row5'><h2> Car Deatails</h2></Row>
<Row className='v2row3'>
    <form>
    <label className='vehi2'>  Registration  Num</label>
    <input className='vehinp' type='text' name='regnum'/><br/><hr/>
    <label className='vehi2'>Make</label>
    <input className='vehinp' type='text' name='make'/><br/><hr/>
    <label className='vehi2'>Model</label>
    <input className='vehinp' type='text' name='model'/><br/><hr/>
    <label className='vehi2'>Fuel type</label>
    <select className='vehinp' name="cars" id="cars" >
        <option   value="petrol">Petrol</option>
        <option value="diseal">Diseal</option>
      
    </select><br/><hr/>
    <label>Year of Manufacture</label>
    <select  className='vehinpp'  name="cars" id="cars" >

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
       
     </select><br/><hr/>
     </form>
    
    
   
</Row>
<button onClick={ navigatecarconfirmation} className='find' >Show Results</button>
</div>

 
</Container>


</div>
  )
}

export default Vehichel2