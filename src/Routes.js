import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import {Route, Redirect} from 'react-router-dom';

//Routes
import Home from './routes/Home';
import CV from './routes/CV';
import Minesweeper from './routes/Minesweeper';
import WordGame from './routes/WordGame';
import Tetris from './routes/Tetris';

class Routes extends Component {

  render() {
    return (
      <Row>
        <Redirect from="/" exact to="/r/home" />
        <Route path="/r/home" component={Home} />
        <Route path="/r/cv" component={CV} />
        <Route path="/r/minesweeper" component={Minesweeper} />
        <Route path="/r/wordgame" component={WordGame} />
        <Route path="/r/tetris" component={Tetris}/>
      </Row>
    );
  }
}

export default Routes;
