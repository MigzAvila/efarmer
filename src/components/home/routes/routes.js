import React, { useEffect, useState } from "react";
import Weather from "../../pages/Weather";
import Home from "../../pages/Home";
import Management from "../../pages/Management";
import Search from "../../pages/Search";
import DataCenter from "../../pages/DataCenter";
import Settings from "../../pages/Settings";
import Forum from "../../pages/Forum";
// import Logout from "../../pages/Logout";
import { Route, Switch } from "react-router-dom";
import AddCrop from "../../pages/AddCrop";
import AddLivestock from "../../pages/AddLiveStock";

const Switches = [
  { paths: "/Weather", page: <Weather /> },
  { paths: "/DataCenter", page: <DataCenter /> },
  { paths: "/Management", page: <Management /> },
  { paths: "/Search", page: <Search /> },
  { paths: "/crop", page: <AddCrop /> },
  { paths: "/livestock", page: <AddLivestock /> },
  { paths: "/Forum", page: <Forum /> },
  // { paths: "/Settings", page: <Settings /> },
  // { paths: "/Logout", page: <Logout /> },
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
