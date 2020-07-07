import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage"

import LoginPenjual from './pages/auth/login/LoginPenjual';
import LoginPembeli from './pages/auth/login/LoginPembeli'
function App() {
  return (


    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/login-pembeli" component={LoginPembeli}></Route>
      </Router>
    </div>
  );
}

export default App;
