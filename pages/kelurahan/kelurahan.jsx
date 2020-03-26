import React, { Component } from "react";
import { rootRef } from "../../firebaseRef/firebaseRef";
import { withRouter } from "react-router-dom";
class PaheKelurahan extends Component {
  state = {
    kelurahan: [],
    kecamatan: null
  };

  componentDidMount() {
    const { match } = this.props;
    rootRef
      .child("kecamatan")
      .child(match.params.id_kecamatan)
      .once("value", data => {
        this.setState({
          kecamatan: data.val().name
        });
      });
    rootRef
      .child("kelurahan")
      .orderByChild("id_kecamatan")
      .equalTo(match.params.id_kecamatan)
      .once("value", data => {
        let arr = [];
        data.forEach(val => {
          arr.push(val.val());
        });
        this.setState({ kelurahan: arr });
      });
  }
  render() {
    const { match } = this.props;
    const { kecamatan, kelurahan } = this.state;
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
        <h1>Kelurahan</h1>
        <table width="100%" border="1px solid black">
          <thead>
            <tr height="50px">
              <th>Kecamatan</th>
              <th>{kecamatan}</th>
            </tr>
            <tr height="50px">
              <th>Total</th>
              <th>{kelurahan.length}</th>
            </tr>
            <tr height="50px">
              <th>id</th>
              <th>Kelurahan</th>
            </tr>
          </thead>
          <tbody>
            {kelurahan.map(data => {
              return (
                <tr key={"kab-kot-" + data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default withRouter(PaheKelurahan);
