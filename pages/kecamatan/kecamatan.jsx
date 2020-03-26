import React, { Component } from "react";
import { rootRef } from "../../firebaseRef/firebaseRef";
import { withRouter, Link } from "react-router-dom";
class PageKecamatan extends Component {
  state = {
    kecamatan: [],
    kab_kot: null
  };

  componentDidMount() {
    const { match } = this.props;
    rootRef
      .child("kab-kot")
      .child(match.params.id_kab_kot)
      .once("value", data => {
        this.setState({
          kab_kot: data.val().name
        });
      });
    rootRef
      .child("kecamatan")
      .orderByChild("id_kab-kot")
      .equalTo(match.params.id_kab_kot)
      .once("value", data => {
        let arr = [];
        data.forEach(val => {
          arr.push(val.val());
        });
        this.setState({ kecamatan: arr });
      });
  }
  render() {
    const { match } = this.props;
    const { kab_kot, kecamatan } = this.state;
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
        <h1>Kecamatan</h1>
        <table width="100%" border="1px solid black">
          <thead>
            <tr height="50px">
              <th>Kab-kot</th>
              <th>{kab_kot}</th>
            </tr>
            <tr height="50px">
              <th>Total</th>
              <th>{kecamatan.length}</th>
            </tr>
            <tr height="50px">
              <th>id</th>
              <th>Kecamatan</th>
            </tr>
          </thead>
          <tbody>
            {kecamatan.map(data => {
              return (
                <tr key={"kab-kot-" + data.id}>
                  <td>{data.id}</td>
                  <td>
                    <Link
                      to={
                        "/data/" +
                        match.params.id_provinsi +
                        "/" +
                        match.params.id_kab_kot +
                        "/" +
                        data.id
                      }
                    >
                      {data.name}
                    </Link>
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
export default withRouter(PageKecamatan);
