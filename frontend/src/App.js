
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./assets/scss/style.scss";
import "./assets/scss/style-search.scss";
import LandingPage from "./pages/LandingPage"
<<<<<<< HEAD

import LoginPenjual from './pages/auth/login/LoginPenjual';
=======
import LoginPenjual from "./pages/auth/login/LoginPenjual";
>>>>>>> 9f3b02dbc86943cc01cfe810b4f26bd4ecafafc3

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/login" component={LoginPenjual}></Route>
      </Router>
    </div>
  );
}

export default App;
