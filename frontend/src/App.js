<<<<<<< HEAD
import React from 'react';
import LoginPembeli from './pages/auth/login/LoginPembeli'
=======
>>>>>>> e64cecdb1a8fac8ad182acc445a9b238009ede6b

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage"

import LoginPenjual from './pages/auth/login/LoginPenjual';
import LandingApi from './api/LandingApi';


function App() {
  return (
<<<<<<< HEAD
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
      <LoginPembeli />
=======
    <div className="App">
      <Router>
        <Route exatch path="/" component={LandingPage}></Route>
        <Route path="/login" component={LoginPenjual}></Route>
        <Route path="/api" component={LandingApi}></Route>
      </Router>
>>>>>>> e64cecdb1a8fac8ad182acc445a9b238009ede6b
    </div>
  );

}
export default App;
