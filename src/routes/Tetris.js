import React, { Component } from 'react';
import HiFrame from '../components/HiFrame';

export class Tetris extends Component {

  render() {
    return <div id="tetrisContainer">
      <div className="container">
        The classic Gameboy game implemented with react and redux.
        It&apos;s source can be found <a href="https://github.com/strongpauly/tetris">here</a>.
      </div>
      <HiFrame src="/tetris" title="tetris"></HiFrame>
    </div>;
  }

}
