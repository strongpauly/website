import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import {Route, Redirect, Switch} from 'react-router-dom';

//Routes
import Home from './routes/Home';
import CV from './routes/CV';
import Oss from './routes/Oss';
import Minesweeper from './routes/Minesweeper';
import WordGame from './routes/WordGame';
import Tetris from './routes/Tetris';
import Fleetway from './routes/Fleetway';

class Routes extends Component {

  render() {
    return (
      <Row>
        <Switch>
          <Redirect from="/" exact to="/r/home" />
          <Route path="/r/home" component={Home} />
        </Switch>
        <Route path="/r/cv" component={CV} />
        <Route path="/r/oss" component={Oss} />
        <Route path="/r/minesweeper" component={Minesweeper} />
        <Route path="/r/wordgame" component={WordGame} />
        <Route path="/r/tetris" component={Tetris}/>
        <Route path="/r/fleetway" component={Fleetway}/>
      </Row>
    );
  }
}
export default Routes;
