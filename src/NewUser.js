import React from 'react';
import 'antd/dist/antd.css';
import './login.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//import { Form, Input, Button, Select } from 'antd';
import {makeStyles, TextField, Button, Paper, Card} from '@material-ui/core/';
import firebase from "./firebase.js";


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }));

function handleUser(type){
    return type;
}
function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
}


export default class NewAccount extends React.Component {
    constructor(props){
        super(props);
    this.state = {
        name: "",
        username: "",
        password: "",
        linkedIn : '',
        github : '',
        type : '',
        student_clicked : false,
        company_clicked : false,
    }
}

    classes = () => {
        const classes = useStyles();
        return(classes);
    }

    createAccount = () => { 
        firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
        .then(data => {
            const currentUser = firebase.auth().currentUser;
            currentUser.updateProfile({
                displayName : this.state.type
            });
            console.log(currentUser);
            const userRef = firebase.database().ref("/users/" + this.state.type); 
            if(this.state.type == "student"){
                const new_student = {
                    uid : data.user.uid,
                    name : this.state.name,
                    contracts_applied : [],
                    linkedIn : this.state.linkedIn,
                    github : this.state.github,
            }
            userRef.push(new_student);
        }
            else{
                const new_company = {
                    uid : data.user.uid,
                    name : this.state.name,
                    contracts_posted : [],
            }
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
        return(
        <div className='newUser'>
        <TextField
                placeholder="Name"
                onChange={(e)=>this.changeName(e.target.value)}
            />
            <br></br>
            <TextField
                placeholder="Username (Email)"
                onChange={(e)=>this.changeUsername(e.target.value)}
            />
            <br></br>
            <TextField
                placeholder="Password"
                type="password"
                onChange={(e)=>this.changePassword(e.target.value)}
            />
            <br></br>
            <TextField
                placeholder="Github url"
                onChange={(e)=>this.changeGithub(e.target.value)}
            />
            <br></br>
            <TextField
                placeholder="LinkedIn url"
                onChange={(e)=>this.changeLinkedIn(e.target.value)}
            />
            <br></br>
            
            <Button 
                component="button"
                type="submit"
                color="primary"
                variant = "outlined"
                onClick={this.createAccount}> 
                <Link to='/'>Submit</Link>
            </Button>
            </div>
        )
    }
    handleCompanyType = () => {
        this.setState({
            type : handleUser("company"),
            company_clicked : true,
            student_clicked : false,
        })
    }
    companyOutput = () => {
        return(
        <div className='newUser'>
        <TextField
                placeholder="Company Name"
                onChange={(e)=>this.changeName(e.target.value)}
            />
            <br></br>
            <TextField
                placeholder="Username (Email)"
                onChange={(e)=>this.changeUsername(e.target.value)}
            />
            <br></br>
            <TextField
                placeholder="Password"
                type="password"
                onChange={(e)=>this.changePassword(e.target.value)}
            />
            <br></br>
            
            <Button 
                component="button"
                type="submit"
                color="primary"
                variant = "outlined"
                onClick={this.createAccount}> 
                <Link to='/'>Submit</Link>
            </Button>
            </div>
        )
    }

render(){
    console.log()
    return(
        <div className="new-user-page">
        <Card minWidth='400'>
        <div className="newUser">
        <h3>Please Enter Your Information:</h3>
        <div className="userPlacement">
            Choose an Account Type
            <br></br>
            <div>
            <Button 
                component="button"
                type="submit"
                color="primary"
                variant = "outlined"
                onClick={this.handleStudentType}> 
                Student
            </Button>
            <Button 
                component="button"
                type="submit"
                color="primary"
                variant = "outlined"
                onClick={this.handleCompanyType}> 
                Company
            </Button>
            </div>
        </div>
        <div>{this.state.student_clicked ? this.studentOutput() : null}</div>
        <div>{this.state.company_clicked ? this.companyOutput() : null}</div>
        </div>
        </Card>
        </div>
        
    )
}
changeName = (input) => {
    this.setState({
        name: input
    })
}
changeUsername = (input) => {
    this.setState({
        username: input
    })
}
changePassword = (input) => {
    this.setState({
        password: input
    })
}
changeGithub = (input) => {
    this.setState({
        github: input
    })
}
changeLinkedIn = (input) => {
    this.setState({
        linkedIn: input
    })
}
handleStudentType = () => {
    this.setState({
        type : handleUser("student"), 
        student_clicked : true,
        company_clicked : false,
    })
}
}
