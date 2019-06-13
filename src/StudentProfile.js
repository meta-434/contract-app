import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import Grid from '@material-ui/core/Grid';
import { flexbox } from '@material-ui/system';
import firebase from "./firebase.js";
import AppHeaderBar from "./AppHeaderBar.js"

// material UI setup
const classes = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        // justifyContent: 'flex-end',
    },
    input: {
        display: 'none',
    },
    root: {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: theme.palette.background.paper,
        // justifyContent: 'center',
    },
}));

export default class StudentProfile extends React.Component {
    state = {
        userObject: {
            display: false // decides whether or not we call displayLog or not
        },
    }
componentDidMount=()=>{
    // if the login info is correct, retrieve user data and pass it to Profile page

        const currUid = this.props.location.state.userUID; // pass in the logged in user's uid
        console.log("inside componentDidMount in Profile")
        console.log(currUid);

        const userRef = firebase.database().ref("users/student"); // access all users
        userRef.on('value', (snapshot) => {
        let users = snapshot.val();
        for(let user in users){
            if( currUid == users[user].uid){    // check for a user with a matching uid
                const userObject= {             // if found, create a new user object that will be used to display data
                    name: users[user].name,
                    github: users[user].github,
                    linkedIn: users[user].linkedIn,
                    uid : users[user].uid,
                    email_address : users[user].email_address,
                }
                console.log(userObject.email_address);
                this.setState({userObject: userObject, display: true}) // mark display as true
                break;

            }
        }
    })
}

 render(){
        return (
            <div>
            <AppHeaderBar/>
                <Grid>
                    <Grid item xs={12} justify="flex-end">
                        {/* Button only Available if logged in */}
                        <Button variant="contained" className={classes.button}>
                            Edit Profile
                        </Button>
                    </Grid>
            
                    {/* Dummy Data for now ...  */}
                    <h1 style={{textAlign: 'center'}}>{this.state.userObject.name}</h1>

                    {/* Material UI list divider */}
                    <List component="nav" className={classes.root}>
                        <ListItem button>
                            <ListItemText> Email: {this.state.userObject.email_address}</ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText> GitHub: {this.state.userObject.github}</ListItemText>
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <ListItemText> LinkedIn: {this.state.userObject.linkedIn}</ListItemText>
                        </ListItem>
                        </List>

        {/* Dummy Data for now ...  */}
        <h1 style={{ textAlign: "center" }}>Student Name</h1>

        {/* Material UI list divider */}
        <List component="nav" className={classes.root}>
          <ListItem button>
            <ListItemText primary="Email:" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Phone:" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="GitHub:" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="LinkedIn:" />
          </ListItem>
        </List>

        {/* Contracts list only Available if user is logged in */}
        {/* Ideally this will be material-UI talbe */}
        <h1 style={{ textAlign: "center" }}>Current Contracts</h1>
      </Grid>
    </div>
  );
}
}
