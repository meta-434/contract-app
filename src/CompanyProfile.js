import React from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateContract from "./CreateContract.js";
import Icon from "@material-ui/core/Icon";
import firebase from "./firebase.js";
import DisplayContracts from "./DisplayContracts.js"

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

export default class CompanyProfile extends React.Component {


  render() {
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <Router>
          <Button
            component={AdapterLink}
            to="/CreateContract"
            variant="contained"
            color="primary"
          >
            <Icon>add</Icon>
            Add New Contract
          </Button>
          <Route path="/CreateContract" component={CreateContract} />
          <h1>Current Contracts</h1>
        </Router>
        <DisplayContracts/>
      </div>
    );
  }
}
