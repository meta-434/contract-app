import React from "react";
import "./App.css";
import CompanyProfile from "./CompanyProfile.js";
// import StudentProfile from './StudentProfile';
// import StudentBid from './StudentBid';
// import StudentContracts from './StudentContracts';
import StudentCard from "./StudentCard.js";
import Home from "./Home.js";
import StudentContracts from "./StudentContracts.js";
import AppHeaderBar from "./AppHeaderBar";
import Login from "./Login";
function App() {
  return (
    <div>
      <AppHeaderBar />
      {/* <Home /> */}
      {/*<CompanyProfile/>*/}
      {/* <StudentContracts /> */}
      <Login />
    </div>
  );
}

export default App;
