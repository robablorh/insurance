/* eslint-disable no-unused-vars */
import React from 'react'
import Dashboard from './DashBoard'
import Vehichel1 from '../components/Vehichel1'
import Vehichel2 from '../components/Vehichel2'
import Carconfirmation from '../components/Carconfirmation'
import DriverBio from '../components/DriverBio'
import { Route, Router, Routes } from 'react-router-dom'
import Companies from '../components/Companies'
import InsuranceTypes from '../components/InsuranceTypes'
import DashBoard from './DashBoard'

const DashBoardRouter = () => {
  return (
    <div>
          <Routes>
              
                  <Route path="/dashboard" element={<DashBoard />} />
                  <Route path="/vehichel1" element={<Vehichel1 />} />
                  <Route path="/vehichel2" element={<Vehichel2 />} />
                  <Route path="/carconfirmation" element={<Carconfirmation />} />
                  <Route path='/insurancetypes' element={<InsuranceTypes />} />
                  <Route path="/driverbio" element={<DriverBio />} />
                  <Route path='/companies' element={<Companies />} />
                  
            
          </Routes>
    </div>
  )
}

export default DashBoardRouter