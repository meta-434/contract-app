import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import Grid from "@material-ui/core/Grid";
import AppHeaderBar from "./AppHeaderBar";

// material UI setup
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
    // justifyContent: 'flex-end',
  },
  input: {
    display: "none"
  },
  root: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper
    // justifyContent: 'center',
  }
}));

function StudentProfile(props) {
  const classes = useStyles();

  return (
    <div>
      <AppHeaderBar />
      <Grid>
        <Grid item xs={12} justify="flex-end">
          {/* Button only Available if logged in */}
          <Button variant="contained" className={classes.button}>
            Edit Profile
          </Button>
        </Grid>

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

export default StudentProfile;
