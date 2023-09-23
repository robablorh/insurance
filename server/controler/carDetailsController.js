/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const carDetailModel = require("../model/carDetailModel");
const userModel = require("../model/userSignup");
const carValueModel = require("../model/carValueModel");
const driverBioModel = require("../model/driverbio");

//create new car details
const createCarDetails = async (req, res) => {
  try {
    const { carRegNo, make, color, model, fuelType, yearOfManufacture, email, chassisNo } =
      req.body;

    if (
      !carRegNo ||
      !make ||
      !color ||
      !model ||
      !fuelType ||
      !yearOfManufacture ||
      !email ||
      !chassisNo
    ) {
      return res.send({
        message: "all fields are required",
        succes: false,
      });
    }

    const carData = await carDetailModel(req.body);
    carData.save();
    res.send({
      message: "data added successfully",
      success: true,
      data: carData,
    });
  } catch (error) {
    console.error(error);
    return res.send({
      message: "Failed create Data",
      success: false,
    });
  }
};

//get all carDetails
const getAllCarDetails = async (req, res) => {
  try {
    const carDetails = await carDetailModel.find({});
    res.send({
      message: "All car details retrieved successfully",
      success: true,
      data: carDetails,
    });
  } catch (error) {
    res.send({
      message: "Failed to retrieve all car details ",
      success: false,
    });
    console.error(error);
  }
};

//get users car

const getUsersCar = async (req, res) => {
  try {
    const { email } = req.body;
    //console.log(email);
    const checkUser = await userModel.findOne({ email });
    if (!checkUser) {
      return res.send({
        message: "wrong user email",
        success: false,
      });
    }

    const getParticularCarDetails = await carDetailModel.find({ email });
    return res.send({
      message: "user particular car details successfully retrieved",
      success: true,
      data: getParticularCarDetails,
    });
  } catch (error) {
    console.error(error);
    return res.send({
      message: "Failed to retrieve user car details ",
      success: false,
    });
  }
};

//delete car

const deleteCar = async (req, res) => {
  const { id } = req.body;
  try {
    const deleteCar = await carDetailModel.findOneAndDelete({ _id: id });
    if (!deleteCar) {
      return res.send({
        message: `${id} cannot be found`,
        success: false,
      });
    }
    return res.send({
      message: `${id} deleted successfully`,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.send({
      message: "Failed to delete car ",
      success: false,
    });
  }
};

//car value

const carValue = async (req, res) => {
  try {
    const { amount, currency, insurancetype, duration, company, calcAmount,  email } = req.body;
    if (!amount || !currency || !insurancetype || !duration || !company || !calcAmount || !email) {
      return res.send({
        message: "all fields are required",
        success: false,
      });
    }
    const CarValueData = await carValueModel(req.body);
    CarValueData.save();
    //console.log(CarValueData)
    return res.send({
      message: "car value registered successfull ",
      success: true,
      data: CarValueData,
    });
  } catch (error) {
    console.error(error);
    return res.send({
      message: "Failed to register car value ",
      success: false,
    });
  }
};

// get all car value details 
const getAllCarValueDetails = async (req, res) => {
  try{
    const getAllCarValueData = await carValueModel.find({})
    return res.send({
      message: "Failed to retrive all value details",
      success: false,
      data: getAllCarValueData
    })
    
  } catch (error) {
    console.error(error)
    return res.send({
      message: "Failed to retrive all value details",
      success: false
    })
  }
}

// get car value details for one particular  user
const getUserCarValueData = async (req, res) => {
   try {
     const {email} = req.params
    const userCarValDet = await carValueModel.find({email})
    return res.send({
      message: "User payment data retrieved successfully ",
      success: true,
      data: userCarValDet,
    });
   } catch (error) {
    console.error(error);
    return res.send({
      message: "Failed to retrieve user car value details ",
      success: false,
    });
   }
}

//delete car value details

const deletCarValueDet = async (req, res) => {
  const { id } = req.body;
  try {
    const delCarValdet = await carValueModel.findOneAndDelete({_id: id})
    if(!delCarValdet){
      return res.send({
        message: "this data does not exist ",
        success: false,
        
      });
    }

    return res.send({
      message: `car ${id} value detail deleted successfully`,
      success: true,
      data: delCarValdet,
    });
    
  } catch (error) {
    console.error(error);
    return res.send({
      message: "Failed to delete user car value details ",
      success: false,
    });
  }
}

//driver bio details

const driverBio = async (req, res) => {
  try {
    const { fname, lname, insurerEmail, homeAddress, contact, email } =
      req.body;

    if (
      !fname ||
      !lname ||
      !insurerEmail ||
      !homeAddress ||
      !contact ||
      !email
    ) {
      return res.send({
        message: "all feilds required",
        success: false,
      });
    }
    const driverBioData = await driverBioModel(req.body);
    driverBioData.save();
    return res.send({
      message: " driverBio data recieved",
      success: true,
      data: driverBioData,
    });
  } catch (error) {
    console.error(error);
    return res.send({
      message: "failed to create driverbio details",
      success: false,
    });
  }
};

const getChassisNo = async (req, res) => {
  
  const { chassisNumber } = req.params;
  if (!chassisNumber) {
    return res.send({
      message: "field cannot be empty",
      success: false,
    });
  }
  
  try {
     const getChassisNo = await carDetailModel.findOne({ chassisNo: chassisNumber });
     if(!getChassisNo){
      return res.send({
        message: "Chassis number does not exist",
        success: false,
      });
     }
     return res.send({
       message: "chassis number found",
       success: true,
       data: getChassisNo
     });
  } catch (error) {
    console.error(error);
    return res.send({
      message: "failed to retrieve chassis number",
      success: false,
    });
  }
}

//history function
const history = async (req, res) => {
  try {
    const carDetMod = await carDetailModel.find()
    const carValMod = await carValueModel.find()

    const chassisNo = carDetMod.map(item => item.chassisNo)
    const carReg = carDetMod.map(item => item.carRegNo)

    const data = {
      chassisNo,
      carReg
      // company,
      // suminsured,
      // premium

    }

    return res.send({
      message: "report generated successfully",
      success: true,
      data
    })
    
  } catch (error) {
    Console.error(error)
    res.send({
      message: "Faile to generate report",
      success: false
    })
  }
}

module.exports = {
  createCarDetails,
  getAllCarDetails,
  getUsersCar,
  deleteCar,
  carValue,
  getUserCarValueData,
  getAllCarValueDetails,
  driverBio,
  deletCarValueDet,
  getChassisNo,
  history
};
