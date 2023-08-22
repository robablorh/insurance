 import{Route , Routes} from "react-router-dom" 
 import Home from "./pages/Home"
 import Signin from "./pages/Signin"
 import Signup from "./pages/Signup"

 import Companies from "./pages/Companies"
 import Autoinsurance from "./pages/Autoinsurance"
import Quote from "./pages/Quote"




 
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






       </Routes>





     </div>
   )
 }
 
 export default Router