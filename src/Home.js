import React, { Component } from "react";
import AppHeaderBar from "./AppHeaderBar";
import { Container, Typography, Card, Button, Grid } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <AppHeaderBar />

        <Container maxWidth="md">
          <div>
            <h3>Task Board</h3>
          </div>
          <Card>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Sample Task 1</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>The task description can be short, or-</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Card>
          <p>{"\n"}</p>
          <Card>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Sample Task 2</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography>
                      It can be very long. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Suspendisse malesuada lacus
                      ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Suspendisse malesuada lacus
                      ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <label htmlFor="outlined-button-file">
                      <Button
                        variant="contained"
                        color="default"
                      >
                        Reply
                        <CloudUploadIcon />
                      </Button>
                    </label>

                    <label htmlFor="outlined-button-file">
                      <Button
                        variant="contained"
                        color="default"
                      >
                        Upload
                        <CloudUploadIcon />
                      </Button>
                    </label>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Card>
          <p>{"\n"}</p>
          <Card>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Sample Task 3</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography>
                      It can be very long. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Suspendisse malesuada lacus
                      ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Suspendisse malesuada lacus
                      ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <label htmlFor="outlined-button-file">
                      <Button
                        variant="contained"
                        color="default"
                      >
                        Reply
                        <CloudUploadIcon />
                      </Button>
                    </label>
                    
                    <label htmlFor="outlined-button-file">
                      <Button
                        variant="contained"
                        color="default"
                      >
                        Upload
                        <CloudUploadIcon />
                      </Button>
                    </label>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Home;
