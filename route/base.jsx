import React, { Component } from "react";
import { Route, Redirect, Switch, HashRouter } from "react-router-dom";
import PageProvinsi from "../pages/provinsi/provinsi";
import PageKabKot from "../pages/kab-kot/kab-kot";
import PageKecamatan from "../pages/kecamatan/kecamatan";
import PageKelurahan from "../pages/kelurahan/kelurahan";
import { PATH_DIR } from "./path";
class Base extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            path={PATH_DIR.provinsi}
            exact
            component={() => <PageProvinsi />}
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
        </Switch>
      </HashRouter>
    );
  }
}
export default Base;
