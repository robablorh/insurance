/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Router from './Router'; // Import your custom Router component
import DashBoard from './pages/DashBoard';
import DashBoardRouter from './pages/DashBoardRouter';
import Carconfirmation from './components/Carconfirmation';
import Vehichel1 from './components/Vehichel1';
import Vehichel2 from './components/Vehichel2';
import Navbar2 from './components/Navbar2';
import Certificate from './components/Certificate';

function App() {
  const [signIn, setSignIn] = useState(false)

  const handleSignIn = () => {
    setSignIn(true);
  }

  return (
    <div>
     <Router/>
     


    </div>
  );
}

export default App;

