import React, { Component } from 'react';
import './App.css';
import {Nav, Navbar, Grid, Row, Col, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Router} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import createHistory from 'history/createBrowserHistory';

import {Routes} from './Routes';

const history = createHistory();

export class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Grid>
          <Row>
            <Col>
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    Portfolio
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                  <LinkContainer to="/r/home">
                    <NavItem>Home</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/r/cv">
                    <NavItem>Curriculum Vitae</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/r/oss">
                    <NavItem>Open Source</NavItem>
                  </LinkContainer>
                  <NavDropdown title="Games" id="games">
                    <LinkContainer to="/r/minesweeper">
                      <MenuItem>Minesweeper</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/r/wordgame">
                      <MenuItem>Word Game</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/r/tetris">
                      <MenuItem>Tetris</MenuItem>
                    </LinkContainer>
                  </NavDropdown>
                  <LinkContainer to="/r/fleetway">
                    <NavItem>Fleetway</NavItem>
                  </LinkContainer>
                </Nav>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Routes/>
            </Col>
          </Row>
        </Grid>
      </Router>
    );
  }
}
