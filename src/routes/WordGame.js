import React, { Component } from 'react';
import HiFrame from '../components/HiFrame';

export default class Home extends Component {

  render() {
    return <div id="wordGameContainer">
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
      <HiFrame src="/wordgame" title="wordgame"></HiFrame>
    </div>;
  }

}
