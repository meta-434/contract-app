import React from "react";
import "antd/dist/antd.css";
import "./login.css";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { Form, Input, Button, Select } from 'antd';
import { makeStyles, TextField, Button, Paper, Card } from "@material-ui/core/";
import firebase from "./firebase.js";
import AppHeaderBar from "./AppHeaderBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  }
}));

function handleUser(type) {
  return type;
}
function handleClose(event, reason) {
  if (reason === "clickaway") {
    return;
  }
}

export default class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      linkedIn: "",
      github: "",
      type: "",
      student_clicked: false,
      company_clicked: false
    };
  }

  classes = () => {
    const classes = useStyles();
    return classes;
  };

  createAccount = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.username, this.state.password)
      .then(data => {
        const currentUser = firebase.auth().currentUser;
        currentUser.updateProfile({
          displayName: this.state.type
        });
        console.log(currentUser);
        const userRef = firebase.database().ref("/users/" + this.state.type);
        if (this.state.type == "student") {
          const new_student = {
            uid: data.user.uid,
            name: this.state.name,
            contracts_applied: [],
            linkedIn: this.state.linkedIn,
            github: this.state.github
          };
          userRef.push(new_student);
        } else {
          const new_company = {
            uid: data.user.uid,
            name: this.state.name,
            contracts_posted: []
          };
          userRef.push(new_company);
        }
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  createAccount = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.username, this.state.password)
      .then(data => {
        const currentUser = firebase.auth().currentUser;
        currentUser.updateProfile({
          displayName: this.state.type
        });
        console.log(currentUser);
        const userRef = firebase.database().ref("/users/" + this.state.type);
        if (this.state.type == "student") {
          const new_student = {
            uid: data.user.uid,
            name: this.state.name,
            contracts_applied: [],
            linkedIn: this.state.linkedIn,
            github: this.state.github
          };
          userRef.push(new_student);
        } else {
          const new_company = {
            uid: data.user.uid,
            name: this.state.name,
            contracts_posted: []
          };
          userRef.push(new_company);
        }
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  studentOutput = () => {
    return (
      <div className="newUser">
        <h4>New Student</h4>
        <TextField
          placeholder="Name"
          onChange={e => this.changeName(e.target.value)}
        />
        <br />
        <TextField
          placeholder="Username (Email)"
          onChange={e => this.changeUsername(e.target.value)}
        />
        <br />
        <TextField
          placeholder="Password"
          type="password"
          onChange={e => this.changePassword(e.target.value)}
        />
        <br />
        <TextField
          placeholder="Github url"
          onChange={e => this.changeGithub(e.target.value)}
        />
        <br />
        <TextField
          placeholder="LinkedIn url"
          onChange={e => this.changeLinkedIn(e.target.value)}
        />
        <br />

        <Button
          component="button"
          type="submit"
          color="primary"
          variant="outlined"
          onClick={this.createAccount}
        >
          <Link to="/" style={{ color: "#0077B5" }}>
            Submit
          </Link>
        </Button>
      </div>
    );
  };

  handleCompanyType = () => {
    this.setState({
      type: handleUser("company"),
      company_clicked: true,
      student_clicked: false
    });
  };

  companyOutput = () => {
    return (
      <div className="newUser">
        <h4>New Company</h4>
        <TextField
          placeholder="Company Name"
          onChange={e => this.changeName(e.target.value)}
        />
        <br />
        <TextField
          placeholder="Username (Email)"
          onChange={e => this.changeUsername(e.target.value)}
        />
        <br />
        <TextField
          placeholder="Password"
          type="password"
          onChange={e => this.changePassword(e.target.value)}
        />
        <br />

        <Button
          component="button"
          type="submit"
          color="primary"
          variant="outlined"
          onClick={this.createAccount}
        >
          <Link to="/" style={{ color: "#0077B5" }}>
            Submit
          </Link>
        </Button>
      </div>
    );
  };

  render() {
    console.log();
    return (
      <div>
        <div className="header" />
        <div className="new-user-page">
          <div className="company-name2">
            Rev<b className="tech">Tech</b>
          </div>
          <Card style={{ width: 400 }}>
            <div className="newUser">
              <div className="signup">Sign Up</div>
              <div className="userPlacement">
                <h4>What kind of account do you want to create?</h4>
                <div>
                  <Button
                    component="button"
                    type="submit"
                    color="primary"
                    variant="outlined"
                    onClick={this.handleStudentType}
                    style={{ color: "#0077B5" }}
                  >
                    Student
                  </Button>
                  <Button
                    component="button"
                    type="submit"
                    color="primary"
                    variant="outlined"
                    onClick={this.handleCompanyType}
                    style={{ color: "#0077B5" }}
                  >
                    Company
                  </Button>
                </div>
              </div>
              <div>
                {this.state.student_clicked ? this.studentOutput() : null}
              </div>
              <div>
                {this.state.company_clicked ? this.companyOutput() : null}
              </div>
            </div>
          </Card>
          <div className="back">
            <Container maxWidth="sm">
              <Container item>
                Already on RevTech?{" "}
                <Link to="/" style={{ color: "#0077B5" }}>
                  Sign in
                </Link>
              </Container>
            </Container>
          </div>
        </div>
      </div>
    );
  }
  
  changeName = input => {
    this.setState({
      name: input
    });
  };
  changeUsername = input => {
    this.setState({
      username: input
    });
  };
  changePassword = input => {
    this.setState({
      password: input
    });
  };
  changeGithub = input => {
    this.setState({
      github: input
    });
  };
  changeLinkedIn = input => {
    this.setState({
      linkedIn: input
    });
  };
  handleStudentType = () => {
    this.setState({
      type: handleUser("student"),
      student_clicked: true,
      company_clicked: false
    });
  };
}
