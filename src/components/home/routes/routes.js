import React from "react";
import Weather from "../../pages/Weather";
import Example from "../../pages/Example";

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
          <Example />
        </Route>
        <Route path="/Settings">
          <Example />
        </Route>
      </Switch>
    </>
  );
};

export default routes;
