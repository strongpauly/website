import React, { Component } from 'react';
import './App.css';
import {Tab, Nav, Grid, Row, Col, NavItem} from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wordgameOpen:false
    };
  }

  toggle = (stateKey) => {
    this.setState({
      [stateKey]: !this.state[stateKey]
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>&nbsp;
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Container id="left-tabs-example" defaultActiveKey="desc">
              <Row className="clearfix">
                <Col sm={3}>
                  <Nav bsStyle="pills" stacked>
                    <NavItem eventKey="desc">
                     Description
                    </NavItem>
                    <NavItem eventKey="minesweeper">
                     Minesweeper
                    </NavItem>
                    <NavItem eventKey="wordgame">
                      WordGame
                    </NavItem>
                    <NavItem eventKey="cv">
                      Curriculum Vitae
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content animation>
                    <Tab.Pane eventKey="desc">
                      This is a portfolio of projects used in investigations into technologies by Paul Potsides.
                    </Tab.Pane>
                    <Tab.Pane eventKey="minesweeper">
                      Minesweeper implemented using react.
                      <iframe src="/minesweeper" title="minesweeper"></iframe>
                    </Tab.Pane>
                    <Tab.Pane eventKey="wordgame">
                      A simple word game implemented using react.  Select words of the length suggested by the box below the grid.  The + will start a new game.
                      The ♺ will reset the game. The ? will provide a hint.  If the game can no longer be completed, the ♺ will rotate.
                      <iframe src="/wordgame" title="wordgame"></iframe>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cv">
                      CV implemented using react and react-bootstrap.
                      <iframe src="/cv" title="cv"></iframe>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
