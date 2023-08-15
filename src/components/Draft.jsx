import Table from 'react-bootstrap/Table';

const Draft = () => {
  return (
    <div  className='draft'>
       
       <h2>Insurance Policy Certificate</h2>

       <Table striped bordered hover size="sm">
     
      <tbody>
        <tr className='tabdraft'>
          <td>Certificate Holder:</td>
          <td>Name Insured and Address</td>
         </tr>
      </tbody>
    </Table>


    <h2>Evidence of Insurance</h2>
    
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Types of Insurance</th>
          <th>Insurer(s)</th>
          <th>Policy Number</th>
          <th>Commencement Date</th>
          <th>Expiry Date</th>
          <th>limit of Liability</th>
          <th>Deductible</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          
        </tr>
      </tbody>
    </Table>
     

    <Table striped bordered hover size="sm">
     
     <tbody>
       <tr className='tabdraft1'>
         <td>Name and full cordinates of Insurer:</td>
         <td>Signature ...................................</td>
        </tr>
     </tbody>
   </Table>




    </div>
  )
}

export default Draft