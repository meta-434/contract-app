// Login
import React from 'react';
// import './login.css';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import {CloseIcon} from '@material-ui/icons/Close';
//import { Form, Icon, Input, Button, Alert, message } from 'antd';
import {Alert} from 'antd';
// import NewUser from "./NewUser.js";
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Profile from './Profile.js';
import firebase from "./firebase.js";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

const classes = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const setErrorMessage = (error) => {
    return (
        error
    )
}

const onClose = (event) => {
  console.log("I was closed")
}

class LogIn extends React.Component{

    state = {
        username: "",
        password: "",
        userData: [],
        loginMessage : '',
        loginError: false,
        passwordExists: false,
        //logInClicked: false,
    }

    // changes the stored username in state based on user input
    changeUsername = (input) => {
        this.setState({
            username: input
        })
        
    }

    // changes the stored password in state based on user input
    changePassword = (input) => {
        this.setState({
            password: input
        })
    }


    errorMessage =() =>{
        console.log('gets here')

        this.setState({
            loginError: true
        })
    }

  displayMessage =() =>{
    console.log('gets here')
    this.setState({
        passwordExists: true,
    })
}
handlePassword = () => {
  var auth = firebase.auth();
  var emailAddress = this.state.username;
  auth.sendPasswordResetEmail(emailAddress).then(function() {
    console.log('email sent');
  }).then(this.displayMessage)
  .catch(function(error) {
    console.log('no email');
  }).then(this.displayMessage)
}
  

    // if they enter info and login... 
    handleLogIn = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
        .then(data =>{
            console.log("data from sign in")
            console.log(data)
            const currentUser = firebase.auth().currentUser;
            console.log(currentUser);
            this.checkSignin(currentUser);
        }
        )
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            console.log("User is not signed in")
            setErrorMessage('Invalid username/password.');
            // ...
          }).then(this.errorMessage);
    }

    // check if their login info is correct
    checkSignin = (currentUser) => {
          firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log("user is signed in")
                console.log(user.uid);
                //let uid=currentUser[user].uid;
                //console.log(uid);
              //let data = this.getData(currentUser);
              if(user.displayName == "student"){
                this.props.history.push({pathname: '/StudentProfile', state: {userUID: user.uid}});
                console.log(user.uid)
              }
              else{
                this.props.history.push({pathname: '/CompanyProfile', state: {userUID: user.uid}});
                console.log(user.uid)
              }
              
            } else {
              // No user is signed in.
              console.log("Invalid Username or Password");

            }
          });
    }
    
    render(){
        return(
          <div>
          <div className='header'></div>
            <div className="login">
                <div className='company-name'>Rev<b className='tech'>Tech</b></div>
                <div className='greeting'>Welcome Back</div>
                <div>Sign in to stay updated on new opportunities</div>
                <div  className="login-form">
                        <Textfield
                            variant="outlined" margin="normal" required fullWidth 
                            id="email" label="Username(email)" 
                            onChange={(e)=>this.changeUsername(e.target.value)}
                        />

                        <Textfield
                            variant="outlined" margin="normal" required fullWidth type="password"
                            id="password" label="Password" 
                            onChange={(e)=>this.changePassword(e.target.value)}
                        />
                        <Button style={{backgroundColor:"#0077B5"}}type="submit" fullWidth variant="contained" color="primary"
                        onClick={this.handleLogIn} className={classes.submit} >
                            Log in
                        </Button>
                        {this.state.loginError ? <Alert message="Invalid username or password, try again" type="error" /> : <div></div>}
                        <Container maxWidth="sm">
                            <Container item>
                                <Link to="/" style={{color:"#0077B5"}} onClick={this.handlePassword}>Forgot Password?</Link>
                                {this.state.passwordExists ? <Alert message="Check your email to reset password." type="info" closable onClose={onClose}/> : <div></div>}
                            </Container>
                            <Container item>
                              Don't have an account? <Link to="/NewUser" style={{color:"#0077B5"}}>Join now</Link>
                            </Container>
                        </Container>
                        </div>          
            </div>
            </div>
        )
    }

}

export default LogIn;

/*
<div>Don't Have an Account? Create one now!</div>
                        <Button type="secondary" >
                            <Link to='/NewUser'>Register</Link>
                        </Button>
*/