/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Router from './Router'; 




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

