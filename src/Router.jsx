/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Autoinsurance from "./pages/Autoinsurance";
import Quote from "./pages/Quote";
import Insurancecovers from "./pages/Insurancecovers";
import Vehichel1 from "./components/Vehichel1";
import Vehichel2 from "./components/Vehichel2";
import Carconfirmation from "./components/Carconfirmation";
import InsuranceTypes from "./components/InsuranceTypes";
import DriverBio from "./components/DriverBio";
import Companies from "./components/Companies";
import DashBoard from "./pages/DashBoard";
import DashBoardRouter from "./pages/DashBoardRouter";
import React from "react";
import Carconfirmation1 from "./components/Carconfirmation1";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import History from "./components/History";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/autoinsurance" element={<Autoinsurance />} />
        <Route path="/insurancecovers" element={<Insurancecovers />} />
        <Route path="/dashboard" element={<DashBoardRouter />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/vehichel1" element={<Vehichel1 />} />
        <Route path="/vehichel2" element={<Vehichel2 />} />
        <Route path="/carconfirmation" element={<Carconfirmation />} />
        <Route path="/carconfirmation1" element={<Carconfirmation1 />} />
        <Route path="/insurancetypes" element={<InsuranceTypes />} />
        <Route path="/driverbio" element={<DriverBio />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact/>} />  
        <Route path="/history" element={<History/>}/>

      </Routes>
    </div>
  );
};

export default Router;
