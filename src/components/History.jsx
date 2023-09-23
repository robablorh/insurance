import {useSelector} from 'react-redux' 
import { stickerNumber } from "../chassis/chassisGenertor";
import Navbar2 from "../components/Navbar2";


const History = () => {

const carDetails = useSelector((store) => store.user.carDetails);

const carValueDetail= useSelector((store) => store.user.carValueDetail);
 






  return (

    <div>

<Navbar2 />

<table className="table">
  <thead>
    <tr>
   
      <th scope="col">CHASIS NUMBER</th>
      <th scope="col">CAR NO</th>
      <th scope="col">MODEL</th>
      <th scope="col">MAKE</th>
      <th scope="col">INSURANCE COMPANY</th>
      <th scope="col">SUM INSURED</th>
      <th scope="col">PREMIUM</th>
      <th scope="col">STICKER NO.</th>
      <th scope="col">INCEPTION DATE</th>
      <th scope="col">EXPIRY DATE</th>

    </tr>
  </thead>
  <tbody>
  
   
    {carDetails==[]?(<tr><td>null</td></tr>):carDetails.map((item,index)=>{
       
        return(<tr>
            <td>{item.chassisNo}</td>
        <td>{item.carRegNo}</td>
        <td>{item.model}</td>
        <td>{item.make}</td>
        <td>{carValueDetail[index].company}</td>
        <td>{carValueDetail[index].amount}</td>
        <td>{(carValueDetail[index].calcAmount).toFixed(2)}</td>
        <td>{stickerNumber()}</td>
        <td>{item.createdAt}</td>
        <td>{item.createdAt}</td>
        </tr>)
     
    })}
     
      {/* <td>{carDetails[carDetails.length - 1].chassisNo}</td>
      <td>{carDetails[carDetails.length - 1].carRegNo}</td>
      <td>{carDetails[carDetails.length - 1].model}</td>
      <td>{carDetails[carDetails.length - 1].make}</td>
      <td>{carValueDetail[carValueDetail.length - 1].company}</td>
      <td>{carValueDetail[carValueDetail.length - 1].amount}</td>
      <td>{(carValueDetail[carValueDetail.length - 1].calcAmount).toFixed(2)}</td>
      <td>{stickerNumber()}</td>
      <td>{carDetails[carDetails.length - 1].createdAt}</td>
      <td>{carDetails[carDetails.length - 1].createdAt}</td> */}
  
   
  </tbody>
</table>

    </div>
  )
}

export default History