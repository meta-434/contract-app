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

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: null,
      submission: null
    };
  }

  // send to DB
  handleSubmissionClick = () => {
    console.log("submission is: ", this.state.input);
  };

  handleSubmissionInput = event => {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
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
              height: "10vh",
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
                <Typography>Sample Task 1</Typography>
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
                      This would be a sample task that is posted by an
                      instuctor.
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