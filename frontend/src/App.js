import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage"
import ItemDetails from "./pages/ItemDetails"

import LoginPenjual from './pages/auth/login/LoginPenjual';
<<<<<<< HEAD
import RegisterPenjual from "./pages/auth/register/RegisterPenjual"
import LandingApi from './api/LandingApi';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/details" component={ItemDetails}></Route>
        <Route path="/login" component={LoginPenjual}></Route>
        <Route path="/register" component={RegisterPenjual}></Route>
        <Route path="/api" component={LandingApi}></Route>
      </Router>

=======
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
>>>>>>> 58141ea052387b6a47ec9876f6603aaf780f6c82
    </div>
  );

} 
export default App;
