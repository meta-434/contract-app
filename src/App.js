import React from "react";
import "./App.css";
import CompanyProfile from "./CompanyProfile.js";
// import StudentProfile from './StudentProfile';
// import StudentBid from './StudentBid';
// import StudentContracts from './StudentContracts';
import StudentCard from './StudentCard.js'
import Login from './Login.js'
import NewUser from './NewUser.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from "./Home.js"

import { BrowserRouter as Router, Route, Path, Link } from "react-router-dom";

function App() {
  return (
    <div>
     <Router>
         <Route exact path="/" component={Login} />
         <Route exact path="/NewUser" component={NewUser} />
      </ Router>

    </div>
  );
}

export default App;
