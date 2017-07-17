import React, { Component } from 'react';
import './App.css';
import {Tab, Nav, PageHeader, Grid, Row, Col, NavItem} from 'react-bootstrap';

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
          <Col>
            <PageHeader>HelloWorld!</PageHeader>
            <div>
              Collective works and pet projects of Paul Potsides:
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="clearfix">
                <Col sm={3}>
                  <Nav bsStyle="pills" stacked>
                    <NavItem eventKey="first">
                     Minesweeper
                    </NavItem>
                    <NavItem eventKey="second">
                      WordGame
                    </NavItem>
                    <NavItem eventKey="cv">
                      Curriculum Vitae
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content animation>
                    <Tab.Pane eventKey="first">
                      <iframe src="/minesweeper" title="minesweeper" style={{border:0, width:'100%', height:'100%'}}></iframe>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <iframe src="/wordgame" title="wordgame" style={{border:0, width:'100%', height:'100%'}}></iframe>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cv">
                      <iframe src="/cv" title="cv" style={{border:0, width:'100%', height:'100%'}}></iframe>
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
