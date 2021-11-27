import React, { useEffect, useState } from "react";
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
import AssignmentIcon from '@mui/icons-material/Assignment';
import ForumIcon from "@mui/icons-material/Forum";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const drawerWidth = 240;

const tabArrays = [
  { Link: "/", Name: "Home", Icon: <HomeIcon style={{ color: "white" }} /> },
  { Link: "/Weather", Name: "Weather", Icon: <CloudIcon style={{ color: "white" }} />},
  // { Link: "/Management", Name: "Data Management", Icon: <AssignmentIcon style={{ color: "white" }} />},
  { Link: "/crop", Name: "Crop", Icon: <AssignmentIcon style={{ color: "white" }} />},
  { Link: "/livestock", Name: "Livestock", Icon: <AssignmentIcon style={{ color: "white" }} />},
  { Link: "/Forum", Name: "Forum", Icon: <ForumIcon style={{ color: "white" }} />},
  { Link: "/Settings", Name: "Settings", Icon: <SettingsIcon style={{ color: "white" }} />},
];

const LinkStyle = {
  textDecoration: "none",
  color: "white",
  cursor: "pointer",
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

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

const Navbar = (props) => {
  const [tab, setTabs] = useState([]);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    props.setOpenLogin(true);
    props.setOpenDash(false);
  };

  useEffect(() => {
    setTabs(() => {
      return tabArrays;
    });

  }, []);
  
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
            {!props.open ? <MenuIcon /> : null}
          </IconButton>
          {!props.open ? (
            <Typography variant="h6" noWrap component="div">
              Menu
            </Typography>
          ) : null}
          <Grid item xs={2} sx={{textAlign: "right", marginLeft: "75%"}}>
          <Button
            id="fade-button"
            color="inherit"
            aria-controls="fade-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {props.userName}
            <KeyboardArrowDownIcon />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={() => {setAnchorEl(null)}}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          </Grid>
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
          {tab.map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{text.Icon}</ListItemIcon>
              <Link style={LinkStyle} to={text.Link} key={index}>
                <ListItemText primary={text.Name} key={index} />
              </Link>
            </ListItem>
          ))}
          {/* <ListItem button>
              <ListItemIcon><SettingsIcon style={{ color: "white" }} /></ListItemIcon>
              <Link style={LinkStyle} to="/LoginForm" >
                <ListItemText primary="Login Form" />
              </Link>
            </ListItem> */}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};
export default Navbar;
