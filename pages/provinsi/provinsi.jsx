import React, { Component } from "react";
import { rootRef } from "../../firebaseRef/firebaseRef";
import { Link } from "react-router-dom";
class PageProvinsi extends Component {
  state = {
    provinsi: []
  };

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: "10vw",
          paddingLeft: "10vw"
        }}
      >
        <h1>Provinsi</h1>
        <table width="100%" border="1px solid black">
          <thead>
            <tr height="50px">
              <th>Total</th>
              <th>{provinsi.length}</th>
            </tr>
            <tr height="50px">
              <th>id</th>
              <th>Provinsi</th>
            </tr>
          </thead>
          <tbody>
            {provinsi.map(data => {
              return (
                <tr key={"provinsi-" + data.id}>
                  <td>{data.id}</td>
                  <td>
                    <Link to={"/" + data.id}>{data.name}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default PageProvinsi;
