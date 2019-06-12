import React from "react";
import "./App.css";
import CompanyProfile from "./CompanyProfile.js";
// import StudentProfile from './StudentProfile';
// import StudentBid from './StudentBid';
// import StudentContracts from './StudentContracts';
// import StudentCard from "./StudentCard.js";
// import Home from "./Home.js";
import Login from "./Login";
import NewUser from "./NewUser";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TestTable from './TestTable';
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/NewUser" component={NewUser} />
        <Route exact path="/CompanyProfile" component={CompanyProfile} />
        <Route exact path="/Test" component={TestTable} />
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
