import { Container, Row, Col } from "react-bootstrap";
import code from "../images/code.png";
import Navbar2 from "./Navbar2";
import { useSelector } from "react-redux";
import { stickerNumber } from "../chassis/chassisGenertor";
import { useState } from "react";
import axios from "axios";
import { jsPDF } from "jsPDF";
import html2canvas from "html2canvas";
import moment from "moment"

const Certificate = () => {
  const carDetails = useSelector((store) => store.user.carDetails);
  const insCompany = useSelector((store) => store.user.carValueDetail);
  const[isdisabled, setisDisabled]= useState(false);
  const insuranceComp = insCompany[insCompany.length - 1].company;

  const [dataUrl, setDataUrl] = useState()
 
  const stickerDownload = () => {
    const captureScreen = document.querySelector("#certificate");
    //CAPTURE SCREEN
    html2canvas(captureScreen)
      .then((canvas) => {
        const imgData = canvas.toDataURL("img/png");

        // CALCULATE ASPECT RATIO
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const aspectRatio = imgWidth / imgHeight;

        // CALCULATE SCALED DIMENSIONS
        const maxPdfWidth = 210; // Maximum width in mm
        const maxPdfHeight = 297; // Maximum height in mm (A4 height)
        const pdfWidth = Math.min(maxPdfWidth, maxPdfHeight * aspectRatio);
        const pdfHeight = pdfWidth / aspectRatio;

        //CREATING PDF FILE
        const doc = new jsPDF({
          orientation: imgWidth > imgHeight ? "landscape" : "portrait",
          unit: "mm",
          format: [pdfWidth, pdfHeight],
        });

        doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        doc.save(`${Date.now()}.pdf`);
        setDataUrl(doc.output("datauristring"));
        
      })
      .catch((err) => alert(`There was an error getting your sticker ${err}`));
  };

  const startDate = moment(carDetails[carDetails.length - 1].createdAt).format("DD-MM-YYYY");
const endDate = moment(startDate, "DD-MM-YYYY").add(1, "years").format("DD-MM-YYYY");
 
  const emailContent = `
    <h1>Certificate Details</h1>
    <p>Car No: ${carDetails[carDetails.length - 1].carRegNo}</p>
    <p>Make: ${carDetails[carDetails.length - 1].make}</p>
    <p>Color: ${carDetails[carDetails.length - 1].color}</p>
    <p>Inception Date: ${startDate}</p>
    <p>Expiry Date: ${endDate}</p>
    <p>Sticker number: ${stickerNumber()}</p>
    <img src="${code}" height="200" width="200" />
  `;

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/mail/sendmail",
        {
          email: carDetails[carDetails.length - 1].email,
          content: emailContent,
          attachment: dataUrl
        }
      );
    
    const data = response.data
    if(data.success){
      setisDisabled(true)
      stickerDownload()
    }
    } catch (error) {
      setisDisabled(false);
    }
  }

   
  

  return (
    <div>
      <Navbar2 />
      <Container className="" id="certificate">
        <Row
          className="flex justify-content-center align-items-center mt-5  cert"
          style={{ width: "95%" }}
        >
          <h3 className="sticker">{insuranceComp}</h3>
          <p className="sticker1">National Insurance Commision</p>
          <Col md='8'className="certi">
            <div className="certbody"> 
            <p> {carDetails[carDetails.length - 1].carRegNo}</p>
            <p>Make: {carDetails[carDetails.length - 1].make} &nbsp; {carDetails[carDetails.length - 1].model}</p>
            <p>Color: {carDetails[carDetails.length - 1].color}</p>
            <p>Inception Date: {startDate}</p>
            <p>Expiry Date : {endDate}</p>
            <p>Sticker number : {stickerNumber()}</p>
            </div>
          </Col>
          <Col className="barcode">
            <img src={code} height="200" width="200" />
          </Col>

        
        </Row>
       </Container>
      <button  className='downloadbtn' onClick={handleClick} disabled={isdisabled }>Download</button>
    </div>
  );
};

export default Certificate;
