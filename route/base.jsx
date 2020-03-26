import React, { Component } from "react";
import { Route, Redirect, Switch, HashRouter } from "react-router-dom";
import PageProvinsi from "../pages/provinsi/provinsi";
import PageKabKot from "../pages/kab-kot/kab-kot";
import PageKecamatan from "../pages/kecamatan/kecamatan";
import PageKelurahan from "../pages/kelurahan/kelurahan";
import Manage from "../pages/manage"
import { PATH_DIR } from "./path";
class Base extends Component {
  state={
    managemode:false
  }
  setManageOn=()=>{
    this.setState({
      managemode:true
    })
  }
  render() {
    const {managemode} =this.state
    return (
      <HashRouter>
        <Switch>
        <Route
            path="/"
            exact
            component={() => <Redirect to={PATH_DIR.provinsi} />}
          />
          <Route
            path={PATH_DIR.provinsi}
            exact
            component={() => <PageProvinsi managemode={managemode} />}
          />
          <Route
            path={PATH_DIR.kab_kot}
            exact
            component={() => <PageKabKot />}
          />
          <Route
            path={PATH_DIR.kecamatan}
            exact
            component={() => <PageKecamatan />}
          />
          <Route
            path={PATH_DIR.kelurahan}
            exact
            component={() => <PageKelurahan />}
          />
          <Route
            path={PATH_DIR.edit}
            exact
            component={() => <Manage setManageOn={this.setManageOn} />}
          />
        </Switch>
      </HashRouter>
    );
  }
}
export default Base;
