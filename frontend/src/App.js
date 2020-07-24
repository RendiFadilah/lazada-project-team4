<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";
import Cart from "./pages/Cart";

import LoginPembeli from "./pages/auth/login/LoginPembeli";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/login-pembeli" component={LoginPembeli}></Route>
        <Route path="/cart" component={Cart}></Route>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD




=======
>>>>>>> d84bc7e95729f9f13346a709136ff23ab1d41d7a
>>>>>>> 36a5521acd5d0e7813125329cd3a85319534efc5
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage"
import ItemDetails from "./pages/ItemDetails"

import LoginPenjual from './pages/auth/login/LoginPenjual';
import RegisterPenjual from "./pages/auth/register/RegisterPenjual"
import LandingApi from './api/LandingApi';


function App() {
  return (
<<<<<<< HEAD
    <div>
     
=======
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/details" component={ItemDetails}></Route>
        <Route path="/login" component={LoginPenjual}></Route>
        <Route path="/register-penjual" component={RegisterPenjual}></Route>
        <Route path="/api" component={LandingApi}></Route>
>>>>>>> 75ce392eaf7daeb9a6594557f0339d5b84687a64
      </Router>

>>>>>>> 36a5521acd5d0e7813125329cd3a85319534efc5
    </div>
  );
<<<<<<< HEAD
}
=======

} 
export default App;
>>>>>>> 75ce392eaf7daeb9a6594557f0339d5b84687a64
