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
      </Router>
    </div>
  );
}
