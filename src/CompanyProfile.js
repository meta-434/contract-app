import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateContract from "./CreateContract.js";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Icon from "@material-ui/core/Icon";
import firebase from "./firebase.js";
import DisplayContracts from "./DisplayContracts.js"
const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

export default class CompanyProfile extends React.Component {
  state = {
    info: []
  };

  getData() {
    var info = [];
    firebase
      .database()
      .ref("/users/company/")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(child => {
		  info.push(child.val().name);
        });
      });
    this.setState({
      info: info
    });
    return info;
  }

  componentDidMount() {
    this.setState({
      info: this.getData()
    });
  }

  updateState() {
    this.setState({
      info: this.getData()
    });
  }

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

          {console.log(this.state.info)}
          <DisplayContracts/>
          {/* <List alignItems="flex-start">
            <ListItem>
              <ListItemText primary={"Contract Title:"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Contract Detail"} />
            </ListItem>
          </List> */}
        </Router>
      </div>
    );
  }
}

/*{getData().map(data => {
									{<ListItem>
                  <ListItemText
                    primary={data}
                  />
                </ListItem>}

								})}*/
