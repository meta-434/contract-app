// Login
import React from 'react';
import 'antd/dist/antd.css';
// import './login.css';
import { Form, Icon, Input, Button, Alert, message } from 'antd';
import NewUser from "./NewUser.js";
//import Profile from './Profile.js';
import firebase from "./firebase.js";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'


const setErrorMessage = (error) => {
    return (
        error
    )
}

const info = () => {
    message.info('This is a normal message');
    
};
class LogIn extends React.Component{

    state = {
        username: "",
        password: "",
        userData: [],
        loginMessage : '',
        loginError: false,
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
            <div className="login">
                <h1>RevTech App</h1>
                <Form  className="login-form">
                        {this.state.loginError ? <Alert message="Invalid username or password, try again" type="error" /> : <div></div>}
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            onChange={(e)=>this.changeUsername(e.target.value)}
                        />

                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            onChange={(e)=>this.changePassword(e.target.value)}
                        />

                        <Button type="primary" onClick={this.handleLogIn} className="login-form-button">
                            Log in
                            {/* <Link to='/Profile'>Log In</Link> */}
                        </Button>

                        <div>Don't Have an Account? Create one now!</div>
                        <Button type="secondary" >
                            <Link to='/NewUser'>Register</Link>
                        </Button>

                </Form>
               
            </div>
        )
    }

}

export default LogIn;
