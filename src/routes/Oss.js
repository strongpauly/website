import React, { Component } from 'react';

export default class Oss extends Component {

  render() {
    return <div id="ossContainer" className="container">
      <p>My personal github account can be found <a href="https://www.github.com/strongpauly">here</a>.</p>
      <p>All of the source for client based projects demoed on this site can
      be seen linked to that account as well as some library or middle tier projects.  These include: </p>
      <ul>
        <li><a href="https://www.github.com/strongpauly/betterset">BetterSet</a>.
          An extension of the ES6 Set object which includes set operation methods.</li>
      </ul>
    </div>;
  }

}
