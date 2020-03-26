import React, { Component } from "react";
import { rootRef } from "../../firebaseRef/firebaseRef";
import { withRouter, Link } from "react-router-dom";
class PageKabKot extends Component {
  state = {
    kab_kot: [],
    provinsi: null
  };

  componentDidMount() {
    const { match } = this.props;
    rootRef
      .child("provinsi")
      .child(match.params.id_provinsi)
      .once("value", data => {
        this.setState({
          provinsi: data.val().name
        });
      });
    rootRef
      .child("kab-kot")
      .orderByChild("id_provinsi")
      .equalTo(match.params.id_provinsi)
      .once("value", data => {
        let arr = [];
        data.forEach(val => {
          arr.push(val.val());
        });
        this.setState({ kab_kot: arr });
      });
  }
  render() {
    const { match } = this.props;
    const { provinsi, kab_kot } = this.state;
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
        <h1>Kabupaten Kota</h1>
        <table width="100%" border="1px solid black">
          <thead>
            <tr height="50px">
              <th>Provinsi</th>
              <th>{provinsi}</th>
            </tr>
            <tr height="50px">
              <th>Total</th>
              <th>{kab_kot.length}</th>
            </tr>
            <tr height="50px">
              <th>id</th>
              <th>Kabupaten Kota</th>
            </tr>
          </thead>
          <tbody>
            {kab_kot.map(data => {
              return (
                <tr key={"kab-kot-" + data.id}>
                  <td>{data.id}</td>
                  <td>
                    <Link to={"/data/" + match.params.id_provinsi + "/" + data.id}>
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
export default withRouter(PageKabKot);
