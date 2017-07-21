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
    //Resizes the iframe to it's content, then sets focus.
    function fixFrame(e) {
      const iframe = e.target;
      iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px';
      iframe.contentWindow.focus();
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
                  <LinkContainer to="/r/tetris">
                    <NavItem>Tetris</NavItem>
                  </LinkContainer>
                </Nav>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Redirect from="/" exact to="/r/home" />
            <Route path="/r/home" render={() => {
              return <div className="container"><p>This is a portfolio of projects used in investigations into technologies by London based, full stack developer, Paul Potsides.</p>
                <p>Currently, this is mainly client side and react based projects, but I will hopefully be expanding this into some Java or Node based middle tier projects too.</p>
                <p>This site was built using react, react-bootstrap and react-router.  It&apos;s source can be found here <a href="https://www.github.com/strongpauly/website">here</a>
                </p>
              </div>;
            }} />
            <Route path="/r/cv" render={() => {
              return <div>
                <div className="container">
                CV implemented using react, react-bootstrap and <a href="https://jsonresume.org/schema/">jsonresume</a>.
                It&apos;s source can be found <a href="https://www.github.com/strongpauly/cv">here</a>.
                </div>
                <iframe src="/cv" title="cv" onLoad={fixFrame}></iframe>
              </div>;
            }} />
            <Route path="/r/minesweeper" render={() => {
              return <div>
                <div className="container">
                  An implementation of the classic game using react. It&apos;s source can be found <a href="https://www.github.com/strongpauly/minesweeper">here</a>.
                </div>
                <iframe src="/minesweeper" title="minesweeper" onLoad={fixFrame}></iframe>
              </div>;
            }} />
            <Route path="/r/wordgame" render={() => {
              return <div>
                <div className="container">
                  A simple word game implemented using react.  Select words of the length suggested by the box below the grid.
                  <ul>
                    <li>The + will start a new game.</li>
                    <li>The ♺ will reset the game.</li>
                    <li>The ? will provide a hint. </li>
                  </ul>
                  If the game can no longer be completed, the ♺ will rotate.
                  It&apos;s source can be found <a href="https://www.github.com/strongpauly/wordgame">here</a>.
                </div>
                <iframe src="/wordgame" title="wordgame" onLoad={fixFrame}></iframe>
              </div>;
            }} />
            <Route path="/r/tetris" render={() => {
              return <div>
                <div className="container">
                  The classic Gameboy game implemented with react and redux.
                  It&apos;s source can be found <a href="https://github.com/strongpauly/tetris">here</a>.
                </div>
                <iframe src="/tetris" title="tetris" onLoad={fixFrame}></iframe>
              </div>;
            }} />
          </Row>
        </Grid>
      </Router>
    );
  }
}

export default App;
