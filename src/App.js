import React, { Component } from 'react';
import './App.css';
import {Nav, Navbar, Grid, Row, Col, NavItem} from 'react-bootstrap';
import {Router, Route, Redirect} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    function fixHeight(e) {
      const iframe = e.target;
      iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px';
    }

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
                </Nav>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Redirect from="/" exact to="/r/home" />
            <Route path="/r/home" render={() => {
              return <div>This is a portfolio of projects used in investigations into technologies by Paul Potsides.</div>;
            }} />
            <Route path="/r/cv" render={() => {
              return <div>
              CV implemented using react and react-bootstrap.
              <iframe src="/cv" title="cv" onLoad={fixHeight}></iframe>
              </div>;
            }} />
            <Route path="/r/minesweeper" render={() => {
              return <div>
              Minesweeper implemented using react.
              <iframe src="/minesweeper" title="minesweeper" onLoad={fixHeight}></iframe>
              </div>;
            }} />
            <Route path="/r/wordgame" render={() => {
              return <div>
              A simple word game implemented using react.  Select words of the length suggested by the box below the grid.  The + will start a new game.
              The ♺ will reset the game. The ? will provide a hint.  If the game can no longer be completed, the ♺ will rotate.
              <iframe src="/wordgame" title="wordgame" onLoad={fixHeight}></iframe>
              </div>;
            }} />
            </Row>
        </Grid>
      </Router>
    );
  }
}

export default App;
