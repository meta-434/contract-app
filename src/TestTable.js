import React, { Component, useState } from "react";
//import firebase connection info
import firebase from "./firebase";
//material-ui

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function createData(issuer, bid_close, con_start, con_end, details, con_id) {
  return { issuer, bid_close, con_start, con_end, details, con_id };
}

const rows = [
 parseData
];

function cnx() {
  const db = firebase.database().ref("users");
  db.on("value", gotData, errData);
}

function gotData(data) {
  console.log("connection established!");
  let comp = data.val().company;
  parseData(comp);
}

function parseData(target) {
  let c = target;
  console.log("c= ", c);
  let names = [];
  let contractObjects = [];
  let results = [];

  Object.keys(c).map(item => {
    names.push(c[item].name);
    if (c[item].contracts !== undefined) {
      contractObjects.push(c[item].contracts);
    } else {
      contractObjects.push("");
    }
  });

  console.log("names= ", names, " contracts= ", contractObjects);

  for (let i = 0; i < names.length; i++) {
    console.log(contractObjects)
    results.push(createData(names[i]))
  }
  for (let j=0; j < Object.keys(contractObjects).length; j++) {
    console.log(j)
  }

  console.log("pushtest results: ", results)
  //     {Object.keys(c).map(item => {
  //       return (
  //         <div>
  //           <li key="name">name: {c[item].name}</li>
  //           <li key="uid">test item {c[item].uid}</li>
  //           <li key="contracts">
  //             contracts:{" "}
  //             {c[item].contracts !== undefined
  //               ? Object.keys(c[item].contracts).map(con => {
  //                   return (
  //                     <ul>
  //                       <li>
  //                         contract name: {c[item].contracts[con].title},
  //                         details: {c[item].contracts[con].details}{" "}
  //                       </li>
  //                     </ul>
  //                   );
  //                 })
  //               : null}
  //           </li>
  //           <p>
  //             {c[item].contracts !== undefined
  //               ? console.log("data retrieved successfully!")
  //               : null}
  //           </p>
  //         </div>
  //       );
  //     })}

  // );
}

function errData(err) {
  alert("error fetching data");
  console.log(err);
}

function SimpleTable() {
  cnx();

  const classes = useStyles();

  return (
    <div>
      {/* {this.state.companies !== null ? this.parseData() : <h3>Loading...</h3>} */}
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Contract&nbsp;Issuer</TableCell>
              <TableCell align="right">Bid&nbsp;Close&nbsp;Date</TableCell>
              <TableCell align="right">Contract&nbsp;Start&nbsp;Date</TableCell>
              <TableCell align="right">Contract&nbsp;End&nbsp;Date</TableCell>
              <TableCell align="right">Details</TableCell>
              <TableCell align="right">Contract&nbsp;ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.issuer}
                </TableCell>
                <TableCell align="right">{row.bid_close}</TableCell>
                <TableCell align="right">{row.con_start}</TableCell>
                <TableCell align="right">{row.con_end}</TableCell>
                <TableCell align="right">{row.details}</TableCell>
                <TableCell align="right">{row.con_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default SimpleTable;
