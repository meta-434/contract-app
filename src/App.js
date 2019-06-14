import React from "react";
import "./App.css";
import CompanyProfile from "./CompanyProfile.js";
import StudentProfile from "./StudentProfile";
// import StudentBid from './StudentBid';
// import StudentContracts from './StudentContracts';
import StudentCard from "./StudentCard.js";
import Login from "./Login.js";
import NewUser from "./NewUser.js";
import { BrowserRouter as Router, Route, Path, Link } from "react-router-dom";
import CreateContract from "./CreateContract";
import AppHeaderBar from "./AppHeaderBar";
import Home from "./Home.js";
import TestTable from "./TestTable.js";
import Control from "./Control.js"

import { Admin, Resource, ListGuesser } from 'react-admin';
import { FirebaseDataProvider } from 'react-admin-firebase';

const config = {
  apiKey: "AIzaSyDn8cvkD7isdWFDlyXXkprCcAF2-R5nb_w",
  authDomain: "contracts-data.firebaseapp.com",
  databaseURL: "https://contracts-data.firebaseio.com",
  projectId: "contracts-data",
  storageBucket: "contracts-data.appspot.com",
  messagingSenderId: "235487946894",
  appId: "1:235487946894:web:9933b1d6a8a97542"
};

const dataProvider = FirebaseDataProvider(config);

function App() {
  return (
    <div>
      {/* <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/NavBar" component={AppHeaderBar} />
        <Route exact path="/NewUser" component={NewUser} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/StudentProfile" component={StudentProfile} />
        <Route exact path="/Contracts" component={TestTable} />
        <Route exact path="/CompanyProfile" component={CompanyProfile} />
        <Route exact path="/CreateContract" component={CreateContract} />
      </Router> */}
      <Control />
    </div>
  );
}

export default App;
