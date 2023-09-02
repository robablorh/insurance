 import{Route , Routes} from "react-router-dom" 
 import Home from "./pages/Home"
 import Signin from "./pages/Signin"
 import Signup from "./pages/Signup"

 import Companies from "./components/Companies"
 import Autoinsurance from "./pages/Autoinsurance"
import Quote from "./pages/Quote"
import Vehichel2 from "./components/Vehichel2"
import Vehichel1 from "./components/Vehichel1"
import CreatePolicy from "./components/CreatePolicy"
import Carconfirmation from "./components/Carconfirmation"
import DashBoard from "./pages/DashBoard"
import DriverBio from  "./components/DriverBio"
import InsuranceTypes from "./components/InsuranceTypes"
import ThreeMonths from "./components/ThreeMonths"
import Sixmonths from "./components/Sixmonths"
import Oneyear from "./components/Oneyear"
import Insurancecovers from "./pages/Insurancecovers"





 
 const Router = () => {
   return (
     <div>
       <Routes>

        <Route path='/'   element={<Home/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/quote' element={<Quote/>}/>
        <Route path='/companies' element={<Companies/>} />
        <Route path='/autoinsurance' element={<Autoinsurance/>} />
        <Route path='/vehichel1' element={<Vehichel1/>} />
        <Route path='/vehichel2' element={<Vehichel2/>}/>
        <Route path='/createpolicy' element={<CreatePolicy/>}/>
        <Route path='/companies' element={<Companies/>} />
        <Route path='/carconfirmation' element={<Carconfirmation/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/driverbio' element={<DriverBio/>}/>
        <Route path='/insurancetypes' element={<InsuranceTypes/>}/>
        <Route path='/threemonths' element={<ThreeMonths/>}/>
        <Route path='/sixmonths' element={<Sixmonths/>}/>
        <Route path='/oneyear' element={<Oneyear/>}/>
        <Route path='/insurancecovers' element={<Insurancecovers/>}/>
        <Route path='/autoinsurance' element={<Autoinsurance/>}/>
      







       </Routes>





     </div>
   )
 }
 
 export default Router