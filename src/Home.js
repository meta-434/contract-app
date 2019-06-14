import React, { Component } from "react";
import AppHeaderBar from "./AppHeaderBar";
import { Container, Typography, Card, Button, Grid } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import Reply from "@material-ui/icons/Reply";
import Tooltip from "@material-ui/core/Tooltip";
import firebase from "./firebase.js";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: null,
      submission: null,
      responses: null
    };
  }

  // send to DB
  handleSubmissionClick = event => {
    console.log("submission is: ", this.state.input);
    const ref = firebase.database().ref("challenges/1/responses");
    const submission = {
      entry: this.state.input,
      timestamp: new Date().toLocaleString()
    };
    ref.push(submission);
    this.getSubmissions();
  };

  handleSubmissionInput = event => {
    this.setState({ input: event.target.value });
  };

  // getSubmissions = () => {
  //   const respRef = firebase.database().ref("challenges/1/");
  //   respRef.once("value", snapshot => {
  //     this.setState({ responses: snapshot.toJSON() });
  //     console.log("state: ", this.state.responses)
  //   });
  // };

  componentDidMount = () => {
    const respRef = firebase.database().ref("challenges/1/");
    respRef.once("value", snapshot => {
      this.setState({ responses: snapshot.toJSON() });
      console.log("state: ", this.state.responses);
    });
  };

  displaySubmissions = () => {
    console.log(this.state.responses.responses);
    let e = this.state.responses.responses;
    // FIX THIS -> DOESN'T FETCH CORRECT DATA
    // e.map(i => {
    //   console.log(i);
    // });

    for (let i = 0; i < Object.keys(e).length; i++) {
      console.log(e[i]);
    }
  };

  render() {
    return (
      <div>
        <AppHeaderBar />

        <Container maxWidth="md">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh"
              //specify font maybe?
            }}
          >
            <h3>Daily Challenge Feed</h3>
          </div>
          <Card>
            <ExpansionPanel xs={12}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  {this.state.responses !== null
                    ? this.state.responses.title
                    : null}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid
                  container
                  spacing={1.5}
                  justify="flex-end"
                  alignItems="flex-end"
                >
                  <Grid item xs={12}>
                    <Typography>
                      {this.state.responses !== null
                        ? this.state.responses.info
                        : null}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor="outlined-button-file">
                      <TextField
                        required
                        id="outlined-helperText"
                        label="My Solution"
                        defaultValue="https://www/github.com/user/repo..."
                        helperText="Github links only"
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        onChange={this.handleSubmissionInput}
                      />
                    </label>
                  </Grid>
                  <Grid item xs={3}>
                    <Tooltip title="Submit Github Repo">
                      <Button
                        variant="contained"
                        color="default"
                        onClick={this.handleSubmissionClick}
                      >
                        Reply
                        <Reply />
                      </Button>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      {this.state.responses !== null
                        ? this.displaySubmissions()
                        : null}
                    </Typography>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Card>
          <p>{"\n"}</p>
          {/* this is the end of a single task item. copy paste between comments to duplicate*/}
        </Container>
      </div>
    );
  }
}

export default Home;
