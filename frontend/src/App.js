import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage"

import LoginPenjual from './pages/auth/login/LoginPenjual';
import LoginPembeli from './pages/auth/login/LoginPembeli'
import RegisterPembeli from './pages/auth/register/RegisterPenjual'
function App() {
  return (


    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/login-pembeli" component={LoginPembeli}></Route>
        <Route path="/register-penjual" component={RegisterPembeli}></Route>
      </Router>
    </div>
  );

}
export default App;
