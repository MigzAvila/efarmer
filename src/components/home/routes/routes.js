import React from "react";
import Weather from "../../pages/Weather";
import Example from "../../pages/Example";

import { Route, Switch } from "react-router-dom";

const routes = () => {
  return (
    <>
      <Switch>
        <Route path="/Home">
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
        <Route exact path="/">
          <Weather />
        </Route>
      </Switch>
    </>
  );
};

export default routes;
