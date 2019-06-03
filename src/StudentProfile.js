import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// material UI setup
const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    root: {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: theme.palette.background.paper,
    },
  }));

function StudentProfile(props) {
    const classes = useStyles();
  
        return (
            <div>
                {/* Button only Available if logged in */}
                <Button variant="contained" className={classes.button}>
                    Edit Profile
                </Button>

                {/* Dummy Data for now ...  */}
                <h1>Student Name</h1>

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
                <h1>Current Contracts</h1>
            </div>
        )     
}

export default StudentProfile
