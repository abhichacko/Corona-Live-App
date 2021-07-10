import React, { Component } from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import { Linkwrapper, NavBarWrapper } from "./TopNavBar.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import State from "../State";
import Vaccine from "../Vaccine/Vaccine";

class TopNavBar extends Component {
  state = {};
  render() {
    return (
      <Router>
        <NavBarWrapper collapseOnSelect expand="lg">
          <NavBarWrapper.Brand>
            <Linkwrapper to="/">Home</Linkwrapper>
          </NavBarWrapper.Brand>
          <NavBarWrapper.Toggle aria-controls="basic-navbar-nav" />
          <NavBarWrapper.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Linkwrapper to="/Statewise">Statewise</Linkwrapper>{" "}
              </Nav.Link>
              <Nav.Link>
                <Linkwrapper to="/Vaccine">Vaccine</Linkwrapper>
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavBarWrapper.Collapse>
        </NavBarWrapper>

        <Switch>
          <Route exact path="/statewise">
            <State />
          </Route>
          <Route exact path="/Vaccine">
            <Vaccine />
          </Route>
          <Route exact path="/">
            <Home name="abhilash" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default TopNavBar;
