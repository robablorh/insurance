
import { Container ,Row ,Col} from 'react-bootstrap'
import {FaPoundSign} from 'react-icons/fa'
import {TbCurrencyEuro} from 'react-icons/tb'
import {FaDollarSign} from 'react-icons/fa'


const CreatePolicy = () => {
  return (
    <div>

         <form>
            <Container>
                <Row  className="suform">
                    <Col>

                        <input
                              type="text"
                               placeholder='Customer Name'
                               className=' crInput'
                        
                        />
        

                    </Col>
                    <Col>
                    <input
                        
                            type="text"
                            placeholder='Interest Name'
                            className=' crInput'
                        
                        
                        
                        />
        
                    
                    </Col>
                    <Col>
                        

                        <input
                            
                              type="text"
                              placeholder='Vehichle registration Number'
                              className=' crInput'
                            
                            
                            
                            />
            
    
            
    
                        </Col>

                   
              </Row>

              <Row  className="suform">
              <Col>
                    <input
                        
                            type="date"
                            placeholder='Commencement Date'
                            className=' crInput'
                        
                        
                        
                        />
                         <label >Commencement date </label>
        

        

                    </Col>
                    
                    <Col>
                    
                    <input
                        
                           type="date"
                             placeholder='expiration Date'
                             className=' crInput'
                        
                         />

                    <label >Expiry date </label>
                    
                    </Col>
                   
                       


              </Row>
             
              <Row  className="suform">
                    <Col>

                    <select className=' crInput' name="cars" id="cars" form="carform">
                            <option value="rate">Charging Scheme</option>
                            <option value="new">New Ratind(2020 and above)</option>
                            <option value="old">Old Rating(2019 and below)</option>

                           
                            </select>

                       
        
        

                    </Col>
                    <Col>

                    <select className=' crInput' name="cars" id="cars" form="carform">
                            <option value="Policy">Policy Type</option>
                            <option value="bond">Bond Insurance</option>
                            <option value="engineering">Engineering Insurance</option>
                            <option value="fire">Fire Insurance</option>
                            <option value="general">General Accident Insurance</option>
                            <option value="liability">Liability Insurance</option>
                            <option value="marine">Marine Insurance</option>
                            <option value="motor">Motor Insurance</option>
                            </select>
                        
                            
        
                    
                    </Col>
                    <Col>

                    <select className=' crInput' name="cars" id="cars" form="carform" >
                            <option value="Period">Policy Period</option>
                            <option value="1month">1 Month</option>
                            <option value="engineering">2 Months</option>
                            <option value="fire">3 Months</option>
                            <option value="general">4 Months</option>
                            <option value="liability">5 Months</option>
                            <option value="marine">6 Months</option>
                            <option value="motor">1 Year</option>
                            </select>
                     </Col>
              </Row>
              <Row  className="suform">
                <Col>
                <select className=' crInput' name="cars" id="cars" form="carform" >
                            <option value="usage">Vehicle Usage</option>
                            <option value="private">Private</option>
                            <option value="comercial">Comercial</option>
                            
                            </select>
                
                
                </Col>
                <Col>
                
                <select className=' crInput' name="cars" id="cars" form="carform" >
                            <option value="currency">Currency</option>
                            <option value="dollar"><FaDollarSign/> Dollar</option>
                            <option value="euro"><TbCurrencyEuro/>Euro</option>
                            <option value="pounds"><FaPoundSign/>British Pounds</option>
                            <option value="cedi">GHC Ghana Cedi</option>
                           
                            </select>
                
                
                </Col>
                <Col>
                          <select  className=' crInput' name="cars" id="cars" form="carform" >
                            <option value="cover">Prefered Cover </option>
                            <option value="comprehensive"> Comprehensive</option>
                            <option value="third">Third Party</option>
                            <option value="theft">Theft</option>
                           
                           
                            </select>
                </Col>
              </Row>
              <Row  className="suform">
                    <Col>

                        <input
                              type="text"
                               placeholder='Sum Insured'
                               className=' crInput'
                        
                        />
        

                    </Col>

                    <Col>

                        <input
                            type="text"
                            placeholder='Cubic Capacity'
                            className=' crInput'

                        />


                        </Col>

                        <Col>

                        <input
                            type="text"
                            placeholder='Chasis Number'
                            className=' crInput'

                        />


                        </Col>

               </Row>

               <Row className="suform">
               <Col>

                    <input
                        type="text"
                        placeholder='Seat Capacity'
                        className=' crInput'

                    />


                     </Col>


                     <Col>

                    <input
                        type="text"
                        placeholder='Vehichel Model'
                        className=' crInput'

                    />


                     </Col>

                     <Col>

                    <input
                        type="text"
                        placeholder='Seat Capacity'
                        className=' crInput'

                    />


                     </Col>
               </Row>
               <Row className="suform">

                <Col>
                
                <select  className=' crInput' name="cars" id="cars" form="carform" >
                            <option value="body">Body Type </option>
                            <option value="saloon"> Saloon</option>
                            <option value="4x4">4 x 4</option>
                            <option value="Ambulance">Ambulance</option>
                            <option value="4x4">Convertible</option>
                            <option value="4x4">Coupe</option>
                            <option value="4x4">Coupe 3dr</option>
                            <option value="4x4">Golf Cart</option>
                            <option value="4x4">Hardtop 2dr</option>
                           
                           
                            </select>
                
                </Col>

                <Col>
                <select  className=' crInput' name="cars" id="cars" form="carform" >
                            <option value="cover">Vehiche Make </option>
                            <option value="hundai"> Hundai</option>
                            <option value="honda">Honda</option>
                            <option value="toyota">Toyota</option>
                            <option value="mercedes"> Mercedes</option>
                            <option value="bmw">BMW</option>
                            <option value="tesla">Tesla</option>
                            <option value="suzuki"> Suzuki</option>
                            <option value="infinity">Infinity</option>
                            <option value="opel">Opel</option>
                           
                           
                            </select>
                
                
                
                </Col>

                <Col>
                
                <select  className=' crInput' name="cars" id="cars" form="carform" >
                            <option value="cover">Prefered Cover </option>
                            <option value="comprehensive"> Comprehensive</option>
                            <option value="third">Third Party</option>
                            <option value="theft">Theft</option>
                           
                           
                            </select>
                
                
                </Col>


               </Row>
               <button className="subtn">Create Policy</button>


                  
          </Container>


         </form>
       

        
    </div>
  )
}

export default CreatePolicy