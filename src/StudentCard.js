import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import firebase from './firebase.js';

const classes = makeStyles({
    card: {
      maxWidth: 300,
      textAlign: 'center',
    },
    media: {
      height: 200,
      width: 200,
      borderRadius:100,
      marginLeft: 'auto', // used to center image on card
      marginRight:'auto'
    },
});

export default class StudentCard extends React.Component{

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
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.placecage.com/200/300"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.userObject.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Computer Science Major at UVA <br/>  
              Github: {this.state.userObject.github} <br/>
              LinkedIn: {this.state.userObject.linkedIn}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
