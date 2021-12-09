import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import NavBar from "./navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const PersistentDrawerLeft = ({
  setOpenDash,
  setOpenLogin,
  userName,
  setUser,
}) => {
  const [drawerWidth, setDrawerWidth] = useState(() => {
    return 240;
  });
  const [open, setOpen] = useState(() => {
    return false;
  });

  const handleDrawerOpen = () => {
    setOpen(!open);
    setDrawerWidth(() => {
      return 240;
    });
  };
  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <NavBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          setOpenDash={setOpenDash}
          setOpenLogin={setOpenLogin}
          setUser={setUser}
          userName={userName}
        />
        <Main open={open}>
          <DrawerHeader />
          <Routes />
        </Main>
      </Box>
    </Router>
  );
};
export default PersistentDrawerLeft;
