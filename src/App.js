import React from "react";
import "./App.css";
import CompanyProfile from "./CompanyProfile.js";
// import StudentProfile from './StudentProfile';
// import StudentBid from './StudentBid';
// import StudentContracts from './StudentContracts';
import StudentCard from "./StudentCard.js";
import Home from "./Home.js";
import NewUser from "./NewUser";
import Login from "./Login";
import TestTable from "./TestTable";

import { BrowserRouter as Router, Route, Path, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <TestTable />
      {/* <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/Newuser" component={NewUser} />
        <Route exact path="/Login" component={Login} />
      </Router> */}
      {/* <Home /> */}
      {/*<CompanyProfile/>*/}
      {/* <StudentContracts /> */}
      <Login />
    </div>
  );
}

export default App;
