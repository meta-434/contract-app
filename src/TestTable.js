import React, { Component } from "react";
import firebase from "./firebase";
class TestTable extends Component {
  cnx = () => {
    const db = firebase.database().ref("users");
    db.on("value", this.gotData, this.errData);
  };

  gotData(data) {
    console.log("connection established!");
    console.log(data.val());
  }

  errData(err) {
    console.log("error!");
    console.log(err);
  }

  render() {
    this.cnx();
    return (
      <div>
        <p>test </p>
      </div>
    );
  }
}

export default TestTable;
