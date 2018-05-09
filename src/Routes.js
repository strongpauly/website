import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import {Route, Redirect, Switch} from 'react-router-dom';

//Routes
import {Home} from './routes/Home';
import {CV} from './routes/CV';
import {Oss} from './routes/Oss';
import {Minesweeper} from './routes/Minesweeper';
import {WordGame} from './routes/WordGame';
import {Tetris} from './routes/Tetris';
import {Platformer} from './routes/Platformer';
// import {Fleetway} from './routes/Fleetway';

export class Routes extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Switch>
            <Redirect from="/" exact to="/r/home" />
            <Route path="/r/home" component={Home} />
          </Switch>
          <Route path="/r/cv" component={CV} />
          <Route path="/r/oss" component={Oss} />
          <Route path="/r/minesweeper" component={Minesweeper} />
          <Route path="/r/wordgame" component={WordGame} />
          <Route path="/r/tetris" component={Tetris}/>
          <Route path="/r/platformer" component={Platformer}/>
          {/* <Route path="/r/fleetway" component={Fleetway}/> */}
        </Col>
      </Row>
    );
  }
}
