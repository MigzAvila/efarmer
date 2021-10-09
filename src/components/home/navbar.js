import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MuiAppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CloudIcon from "@mui/icons-material/Cloud";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import ForumIcon from "@mui/icons-material/Forum";
import { Link } from "react-router-dom";

const LinkStyle = {
  textDecoration: "none",
  color: "white",
  cursor: "pointer",
};

// "Home","DataCenter",
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Navbar(props) {
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={props.open}
        style={{ backgroundColor: "#009688", color: "white" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(props.open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          {!props.open ? (
            <Typography variant="h6" noWrap component="div">
              Menu
            </Typography>
          ) : null}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#009688",
            color: "white",
          },
        }}
        variant="persistent"
        anchor="left"
        open={props.open}
      >
        <DrawerHeader>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "white" }} />
            ) : (
              <ChevronRightIcon style={{ color: "white" }} />
            )}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Back
          </Typography>
        </DrawerHeader>

        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon style={{ color: "white" }} />
            </ListItemIcon>
            <Link style={LinkStyle} to="/">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <CloudIcon style={{ color: "white" }} />
            </ListItemIcon>
            <Link style={LinkStyle} to="/Weather">
              <ListItemText primary="Weather" />
            </Link>
          </ListItem>
        </List>

        <ListItem button>
          <ListItemIcon>
            <StorageOutlinedIcon style={{ color: "white" }} />
          </ListItemIcon>
          <Link style={LinkStyle} to="/DataCenter">
            <ListItemText primary="Data Center" />
          </Link>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ForumIcon style={{ color: "white" }} />
          </ListItemIcon>
          <Link style={LinkStyle} to="/Forum">
            <ListItemText primary="Forum" />
          </Link>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <SettingsIcon style={{ color: "white" }} />
          </ListItemIcon>
          <Link style={LinkStyle} to="/Settings">
            <ListItemText primary="Settings" />
          </Link>
        </ListItem>

        <Divider />
      </Drawer>
    </>
  );
}
