
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage"

import LoginPenjual from './pages/auth/login/LoginPenjual';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
        <Route path="/login" component={LoginPenjual}></Route>
      </Router>
    </div>
  );
}

export default App;
