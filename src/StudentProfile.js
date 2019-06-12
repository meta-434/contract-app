import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Grid from '@material-ui/core/Grid';
import { flexbox } from '@material-ui/system';

import firebase from "./firebase.js";
import { getDefaultWatermarks } from 'istanbul-lib-report';

// material UI setup
const classes = makeStyles(theme => ({
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

class StudentProfile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            github: '', 
            linkedin: '',
            student: [],
        }
    }

    componentDidMount() {
        //Get the current userID
        var userId = firebase.auth().currentUser.uid;
        var studentRef = firebase.database().ref('/users/' + '/student' + userId);
        studentRef.on('value', snapshot => {
            let students = snapshot.val();
            console.log(students);
            let newState = [];
            for (let student in students) {
                newState.push({
                    name: students[student].name, 
                    github: students[student].github,
                    linkedin: students[student].linkedIn,
                });
            } 
            this.setState({
                student: newState
            });  
        });
        console.log("here is the UID", userId)
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Grid>
                    <Grid item xs={12} justify="flex-end">
                        {/* Button only Available if logged in */}
                        <Button variant="contained" className={classes.button}>
                            Edit Profile
                        </Button>
                    </Grid>
            
                    {/* Dummy Data for now ...  */}
                    <h1 style={{textAlign: 'center'}}>Student Name</h1>

                    {/* Material UI list divider */}
                    <List component="nav" className={classes.root}>
                        <ListItem button>
                            <ListItemText primary="Email:" />
                        </ListItem>
                        <Divider />
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
                    <h1 style={{textAlign: 'center'}}>Current Contracts</h1>
                </Grid>

               
            </div>
        )
    }         
}

export default StudentProfile
