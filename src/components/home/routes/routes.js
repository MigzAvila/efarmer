import React from "react";
import Weather from "../../pages/Weather";
import Home from "../../pages/Home";
// import DataCenter from "../../pages/DataCenter";
import DataCenter from "../../pages/DataCenter";
import Settings from "../../pages/Settings";
import Forum from "../../pages/Forum"

import { Route, Switch } from "react-router-dom";

const routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Weather">
          <Weather />
        </Route>
        <Route path="/DataCenter">
          <DataCenter />
        </Route>
        <Route path="/Forum">
          <Forum />
        </Route>
        <Route path="/Settings">
          <Settings />
        </Route>
      
      </Switch>
    </>
  );
};

export default routes;
