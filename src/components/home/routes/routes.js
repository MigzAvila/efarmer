import React, { useEffect, useState } from "react";
import Weather from "../../pages/Weather";
import Home from "../../pages/Home";
import DataCenter from "../../pages/DataCenter";
import Settings from "../../pages/Settings";
import Forum from "../../pages/Forum";
import LoginForm from "../../pages/LoginForm";
import { Route, Switch } from "react-router-dom";

const Switches = [
  { paths: "/Weather", page: <Weather /> },
  { paths: "/DataCenter", page: <DataCenter /> },
  { paths: "/Forum", page: <Forum /> },
  { paths: "/Settings", page: <Settings /> },
  { paths: "/LoginForm", page: <LoginForm /> },
];
const Routes = () => {
  const [routesSwitch, setRoutes] = useState(() => []);
  useEffect(() => {
    setRoutes(() => {
      return Switches;
    });
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {routesSwitch.map((text, index) => (
          <Route path={text.paths} key={index}>
            {text.page}
          </Route>
        ))}
      </Switch>
    </>
  );
};

export default Routes;
