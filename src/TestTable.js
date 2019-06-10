import React, { Component } from "react";
import config from "./firebase";

class TestTable extends Component {
  cnx = () => {
    firebase.initializeApp(config);
    database = firebase.database();

    var ref = database.ref("users");
    ref.on("value", gotData, errData);
  };

  gotData(data) {
    console.log(data);
  }

  errData(err) {
    console.log("error!");
    console.log(err);
  }

  render() {
    return (
      <div>
        <p>test tabfirebase.initializeApp(config);le</p>
      </div>
    );
  }
}

export default TestTable;
