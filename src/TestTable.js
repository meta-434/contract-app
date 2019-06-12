import React, { Component } from "react";
//import firebase connection info
import firebase from "./firebase";

class TestTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: null
    };
  }

  cnx = () => {
    const db = firebase.database().ref("users");
    db.on("value", this.gotData, this.errData);
  };

  gotData = data => {
    console.log("connection established!");
    let comp = data.val().company;

    this.setState({ companies: comp });
  };

  parseData = () => {
    let c = this.state.companies;
    //console.log(c);
    return (
      <ul>
        {Object.keys(c).map(item => {
          return (
            <div>
              <li key="name">name: {c[item].name}</li>
              <li key="uid">test item {c[item].uid}</li>
              <li key="contracts">
                contracts:{" "}
                {c[item].contracts !== undefined
                  ? Object.keys(c[item].contracts).map(con => {
                      return (
                        <ul>
                          <li>
                            contract name: {c[item].contracts[con].title},
                            details: {c[item].contracts[con].details}{" "}
                          </li>
                        </ul>
                      );
                    })
                  : null}
              </li>
              <p>
                {c[item].contracts !== undefined
                  ? console.log("data retrieved successfully!")
                  : null}
              </p>
            </div>
          );
        })}
      </ul>
    );
  };

  errData(err) {
    alert("error fetching data");
    console.log(err);
  }

  componentDidMount() {
    this.cnx();
  }

  putInTable = () => {
    return(8);
  }

  render() {
    return (
      <div>
        {this.state.companies !== null ? this.parseData() : <h3>Loading...</h3>}
      </div>
    );
  }
}

export default TestTable;
