import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import firebase from './firebase.js';
export default class CreateContract extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      details: "",
      bidCloseDate: "",
      contractStartDate: "",
      contractEndDate: "",
    }
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  
  handleClick = () => {
    
    this.sendToDatabase();

    //this.resetForm();
  }


  sendToDatabase = async() => {
    //const date = (new Date()).toDateString();
    var data = {
      title: this.state.title,
      details: this.state.details,
      bidCloseDate: this.state.bidCloseDate,
      contractStartDate: this.state.contractStartDate,
      contractEndDate: this.state.contractEndDate,
    }
    const username = "Cm8Bc5MCK0Z1DITfDiHcbQU4wIk1" //firebase.auth().currentUser.uid; //delete test company
    firebase.database().ref('users/company/'+username).push(data);
    this.resetForm();
    console.log("Sent to data base")
  }

  
  resetForm() {
    this.setState({
      title: "",
      details: "",
      bidCloseDate: "",
      contractStartDate: "",
      contractEndDate: "",
    });

  }

  render() {
    return(

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            onChange={this.handleChange('title')}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Details"
            onChange={this.handleChange('details')}
            margin="normal"
            variant="outlined"
            multiline
            rows="4"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Bid Close Date"
            onChange={this.handleChange('bidCloseDate')}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Contract Start Date"
            onChange={this.handleChange('contractStartDate')}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Contract End Date"
            onChange={this.handleChange('contractEndDate')}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={this.handleClick}>
            <Box ml={-1} mb={-1} mr={1}><Icon>save</Icon></Box>
            submit
          </Button>
        </Grid>
        {this.state.title}
          
      </Grid>
        
    );
  }
}

