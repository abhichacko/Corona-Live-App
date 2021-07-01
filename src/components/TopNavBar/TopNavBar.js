import React, { Component } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Linkwrapper } from "./TopNavBar.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import State from "../State";

class TopNavBar extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Linkwrapper to="/">Home</Linkwrapper>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Linkwrapper to="/Statewise">Statewise</Linkwrapper>{" "}
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
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/statewise">
            <State />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default TopNavBar;
