import React from "react";
import "./App.css";
import CompanyProfile from "./CompanyProfile.js";
// import StudentProfile from './StudentProfile';
// import StudentBid from './StudentBid';
// import StudentContracts from './StudentContracts';
import StudentCard from "./StudentCard.js";
import Home from "./Home.js";
import Login from "./Login";
import NewUser from "./NewUser";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
<<<<<<< HEAD
     <Home />
=======
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/NewUser" component={NewUser} />
      </Router>
      {/* <Home /> */}
>>>>>>> e4e06b1c3c78ea776797b4e7b3e0d819698a1c68
    </div>
  );
}

export default App;
