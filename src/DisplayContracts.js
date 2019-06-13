import React, { Component } from "react";
//import firebase connection info
import firebase from "./firebase";
//material-ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from '@material-ui/core/CircularProgress';


class SimpleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  // cnx() {
  //   const db = firebase.database().ref("users");
  //   db.on("value", this.gotData, this.errData);
  // }

  createData(issuer, title, details, bid_close, con_start, con_end) {
    return { issuer, title, details, bid_close, con_start, con_end };
  }

  cnx = () => {
    const db = firebase.database().ref("users/company");
    db.once("value", snapshot => {
      this.setState({ dbValue: snapshot.toJSON() });
    });
  };

  gotData() {
    console.log("connection established!");
  }

  errData(err) {
    alert("error fetching data");
    console.log(err);
  }

  getCompanyName() {
    
  }
  parseData() {
    let c = this.state.dbValue;
    let contractObjects = [];
    

    console.log("c= ", c);
    Object.keys(c).map(item => {
      if (c[item].contracts !== undefined) {
        contractObjects.push(c[item].contracts);
      } else {
        contractObjects.push("");
      }
    });

    for (let i = 0; i < Object.keys(contractObjects).length; i++) {
      console.log("gets to outer loops");
      if (contractObjects[i] !== "") {
        Object.keys(contractObjects[i]).map(k => {
          console.log("gets to push");
          
          if(contractObjects[i][k][0] === "HackCville") {
            this.state.rows.push(
              this.createData(
                contractObjects[i][k][0],
                contractObjects[i][k][1],
                contractObjects[i][k][2],
                contractObjects[i][k][3],
                contractObjects[i][k][4],
                contractObjects[i][k][5]
              )
            );
          }
        });
      }
    }
  }

  makeTable() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Contract&nbsp;Issuer</TableCell>
              <TableCell align="right">Contract&nbsp;Name</TableCell>
              <TableCell align="right">Details</TableCell>
              <TableCell align="right">Bid&nbsp;Close&nbsp;Date</TableCell>
              <TableCell align="right">Contract&nbsp;Start&nbsp;Date</TableCell>
              <TableCell align="right">Contract&nbsp;End&nbsp;Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.issuer}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.details}</TableCell>
                <TableCell align="right">{row.bid_close}</TableCell>
                <TableCell align="right">{row.con_start}</TableCell>
                <TableCell align="right">{row.con_end}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }

  render() {
    if (this.state.dbValue == undefined) {
      this.cnx();
    } else {
      this.parseData();
    }

    return (
      <div>
        {this.state.dbValue === undefined && this.state.rows !== [] ? (
          <h2>Loading...<CircularProgress/></h2>
        ) : (
          this.makeTable()
        )}
      </div>
    );
  }
}

export default SimpleTable;