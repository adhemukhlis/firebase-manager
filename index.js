import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import { rootRef } from "./firebaseRef/firebaseRef";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      provinsi: []
    };
  }
  componentDidMount() {
    rootRef.child("provinsi").once("value", data => {
      let arr = [];
      data.forEach(val => {
        arr.push(val.val());
      });
      this.setState({ provinsi: arr });
    });
  }
  render() {
    const { provinsi } = this.state;
    return (
      <div>
        <h1>Provinsi</h1>
        <table border="1">
        <tr>
            <td>total</td>
            <td >{provinsi.length}</td>
          </tr>
          <tr>
            <td>id</td>
            <td >Provinsi</td>
          </tr>
          {provinsi.map(data => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
