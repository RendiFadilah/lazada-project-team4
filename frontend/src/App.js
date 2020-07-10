import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage"

import LoginPenjual from './pages/auth/login/LoginPenjual';
<<<<<<< HEAD
import LoginPembeli from './pages/auth/login/LoginPembeli'
=======
import LandingApi from './api/LandingApi';


>>>>>>> 062e04d5aa4bd36f31ed7f7ef7f75b59b4e5e923
function App() {
  return (


    <div className="App">
      <Router>
<<<<<<< HEAD
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/login-pembeli" component={LoginPembeli}></Route>
=======
        <Route exatch path="/" component={LandingPage}></Route>
        <Route path="/login" component={LoginPenjual}></Route>
        <Route path="/api" component={LandingApi}></Route>
>>>>>>> 062e04d5aa4bd36f31ed7f7ef7f75b59b4e5e923
      </Router>
    </div>
  );

}
export default App;
