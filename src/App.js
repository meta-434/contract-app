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
        <Route exact path="/NewUser" component={NewUser} />
      </Router>  */}

      {/* <Home /> */}

      <Admin dataProvider={dataProvider} >
        <Resource name="users" list={ListGuesser} />
      </Admin>
      
    </div>
  );
}

export default App;
