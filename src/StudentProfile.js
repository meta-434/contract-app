import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// material UI setup
const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));


function StudentProfile(props) {
    const classes = useStyles();
  
        return (
            <div>
                {/* Only Available if logged in */}
                <Button variant="contained" color="primary" className={classes.button}>
                    Edit Profile
                </Button>

                {/* Dummy Data  */}
                <h1>Profile Info</h1>

                <h1>Current Contracts</h1>
            </div>
        )     
    
}

export default StudentProfile
