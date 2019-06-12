import React from "react";
import "./App.css";
import CompanyProfile from "./CompanyProfile.js";
// import StudentProfile from './StudentProfile';
import StudentBid from './StudentBid';
import StudentContracts from './StudentContracts';
import StudentCard from "./StudentCard.js";
import Home from "./Home.js";
import Login from "./Login";
import NewUser from "./NewUser";
import StudentProfile from "./StudentProfile";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/NewUser" component={NewUser} />
        <Route exact path="/StudentBid" component={StudentBid} />
        
        <Route exact path="/StudentProfile" component={StudentProfile} />
      </Router> 
      {/* <Home /> */}
    </div>
  );
}

export default App;
