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
  // customRun=()=>{
  //   rootRef.child("kelurahan").child("3302710002").set({
  //     "id":"3302710002",
  //       "id_kecamatan":"3302710",
  //       "name":"TELUK"
  //   })
  // }
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
                    <Link to={"/data/" + data.id}>{data.name}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/*<button width="100%" onClick={this.customRun}>custom run</button>*/}
      </div>
    );
  }
}
export default PageProvinsi;
