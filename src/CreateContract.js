import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Box from "@material-ui/core/Box";
import firebase from "./firebase.js";
export default class CreateContract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      details: "",
      bidCloseDate: "",
      contractStartDate: "",
      contractEndDate: "",
      alert: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClick = () => {
    this.sendToDatabase();

    this.resetForm();
  };

  sendToDatabase = () => {
    const userid = firebase.auth().currentUser.uid;
    var data = [
      this.state.title,
      this.state.details,
      this.state.bidCloseDate,
      this.state.contractStartDate,
      this.state.contractEndDate
    ];
    firebase
      .database()
      .ref("/users/company/")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(child => {
          if (child.val().uid === userid) {
            const obj = firebase.database().ref("/users/company/" + child.key + "/contracts/")
            const companyName = child.val().name
            data.unshift(companyName)
            console.log(data)
            obj.push(data);
          }
        });
      });
    console.log("Sent to data base");
  };

  resetForm() {
    this.setState({
      title: "",
      details: "",
      bidCloseDate: "",
      contractStartDate: "",
      contractEndDate: "",
      alert: "Done!"
    });
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Contract Form</h1>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Title"
            value={this.state.title}
            onChange={this.handleChange("title")}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Details"
            value={this.state.details}
            onChange={this.handleChange("details")}
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
            value={this.state.bidCloseDate}
            onChange={this.handleChange("bidCloseDate")}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Contract Start Date"
            value={this.state.contractStartDate}
            onChange={this.handleChange("contractStartDate")}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Contract End Date"
            value={this.state.contractEndDate}
            onChange={this.handleChange("contractEndDate")}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            <Box ml={-1} mb={-1} mr={1}>
              <Icon>save</Icon>
            </Box>
            submit
          </Button>
          <h2>{this.state.alert}</h2>
        </Grid>
      </Grid>
    );
  }
}
