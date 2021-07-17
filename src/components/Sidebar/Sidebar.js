import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AssessmentIcon from "@material-ui/icons/Assessment";

import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Linkwrapper,
  AppBarWrapper,
  ListItemWrapper,
  ListItemIconWrapper,
  IconButtonWrapper,
  MainWrapper,
  IconWrapper,
} from "./Sidebar.styled";
import Home from "../Home";
import State from "../State";
import Vaccine from "../Vaccine/Vaccine";
import NotFound from "../NotFound/NotFound";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBarWrapper
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" noWrap>
              Corona Battle
              <IconWrapper className="fas fa-head-side-mask"></IconWrapper>
            </Typography>
          </Toolbar>
        </AppBarWrapper>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButtonWrapper onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButtonWrapper>
          </div>
          <Divider />

          <List>
            <Linkwrapper to="/">
              <ListItemWrapper button key="Home">
                <ListItemIconWrapper>
                  <HomeIcon />
                </ListItemIconWrapper>
                <ListItemText primary="Home" />
              </ListItemWrapper>
            </Linkwrapper>
            <Linkwrapper to="/Statewise">
              <ListItemWrapper button key="Statewise">
                <ListItemIconWrapper>
                  <AssessmentIcon />
                </ListItemIconWrapper>
                <ListItemText primary="Statewise" />
              </ListItemWrapper>
            </Linkwrapper>
            <Linkwrapper to="/Vaccine">
              <ListItemWrapper button key="Statewise">
                <ListItemIconWrapper>
                  <LocalHospitalIcon />
                </ListItemIconWrapper>
                <ListItemText primary="Vaccination Status" />
              </ListItemWrapper>
            </Linkwrapper>
          </List>
          <Divider />

          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItemWrapper button key={text}>
                <ListItemIconWrapper>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIconWrapper>
                <ListItemText primary={text} />
              </ListItemWrapper>
            ))}
          </List>
        </Drawer>
        <MainWrapper className={classes.content}>
          <div className={classes.toolbar} />

          <Switch>
            <Route exact path="/Statewise">
              <State />
            </Route>
            <Route exact path="/Vaccine">
              <Vaccine />
            </Route>
            <Route exact path="/">
              <Home name="abhilash" />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </MainWrapper>
      </div>
    </Router>
  );
}
