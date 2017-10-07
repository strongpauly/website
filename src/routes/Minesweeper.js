import React, { Component } from 'react';
import HiFrame from '../components/HiFrame';

export class Minesweeper extends Component {

  render() {
    return <div id="minesweeperContainer">
      <div className="container">
        An implementation of the classic game using react. It&apos;s source can be found <a href="https://www.github.com/strongpauly/minesweeper">here</a>.
      </div>
      <HiFrame src="/minesweeper" title="minesweeper"></HiFrame>
    </div>;
  }

}
