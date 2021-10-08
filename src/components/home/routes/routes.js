import React from "react";
import Weather from "../../pages/Weather";
import Example from "../../pages/Example";
import DataCenter from "../../pages/DataCenter";
import Settings from "../../pages/Settings";

import { Route, Switch } from "react-router-dom";

const routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Example />
        </Route>
        <Route path="/Weather">
          <Weather />
        </Route>
        <Route path="/DataCenter">
          <DataCenter />
        </Route>
        <Route path="/Settings">
          <Settings />
        </Route>
      </Switch>
    </>
  );
};

export default routes;
