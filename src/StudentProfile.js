import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import Grid from "@material-ui/core/Grid";
import { flexbox } from "@material-ui/system";
import firebase from "./firebase.js";
import AppHeaderBar from "./AppHeaderBar.js";
import StudentCard from "./StudentCard";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core";


// material UI setup
const classes = makeStyles({
  card: {
    maxWidth: "md",
    textAlign: 'center',
  },
  media: {
    height: 200,
    width: 200,
    borderRadius:100,
    marginLeft: 'auto', // used to center image on card
    marginRight:'auto',
    textAlign:'center',
  },
});

export default class StudentProfile extends React.Component {
  state = {
    userObject: {
      display: false // decides whether or not we call displayLog or not
    }
  };
  componentDidMount = () => {
    // if the login info is correct, retrieve user data and pass it to Profile page

    const currUid = this.props.location.state.userUID; // pass in the logged in user's uid
    console.log("inside componentDidMount in Profile");
    console.log(currUid);

    const userRef = firebase.database().ref("users/student"); // access all users
    userRef.on("value", snapshot => {
      let users = snapshot.val();
      for (let user in users) {
        if (currUid == users[user].uid) {
          // check for a user with a matching uid
          const userObject = {
            // if found, create a new user object that will be used to display data
            name: users[user].name,
            github: users[user].github,
            linkedIn: users[user].linkedIn,
            uid: users[user].uid,
            email_address: users[user].email_address
          };
          console.log(userObject.email_address);
          this.setState({ userObject: userObject, display: true }); // mark display as true
          break;
        }
      }
    });
  };

  render() {
    return (
      <div>
        <AppHeaderBar />

          {/* <h1 style={{ textAlign: "center" }}>{this.state.userObject.name}</h1> */}

          {/* Material UI list divider */}
          <Container maxWidth="md">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.placecage.com/200/300"
                title="Contemplative Reptile"
              />
              <CardContent  
                style={{ textAlign: 'center' }}
              >
                <Typography gutterBottom variant="h2" component="h2">
                  {this.state.userObject.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Computer Science Major at UVA <br/>  
                  Github: {this.state.userObject.github} <br/>
                  LinkedIn: {this.state.userObject.linkedIn}
                </Typography> <br/> 
                <Typography gutterBottom variant="h2" component="h4">
                  Current Contracts:
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Container>
      
      </div>
    );
  }
}
