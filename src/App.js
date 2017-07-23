import React, { Component } from 'react';
import './App.css';
import {Nav, Navbar, Grid, Row, Col, NavItem} from 'react-bootstrap';
import {Router} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import createHistory from 'history/createBrowserHistory';

import Routes from './Routes';

const history = createHistory();

class App extends Component {

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
                  <LinkContainer to="/r/minesweeper">
                    <NavItem>Minesweeper</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/r/wordgame">
                    <NavItem>Word Game</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/r/tetris">
                    <NavItem>Tetris</NavItem>
                  </LinkContainer>
                </Nav>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Routes/>
          </Row>
        </Grid>
      </Router>
    );
  }
}

export default App;
