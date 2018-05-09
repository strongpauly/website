import React, { Component } from 'react';
import {HiFrame} from '../components/HiFrame';

export class Platformer extends Component {

  render() {
    return <div id="platformerContainer">
      <p>
        A work in progress writing a platform game using react.
      </p>
      <HiFrame src="/platformer" title="platformer"></HiFrame>
    </div>;
  }

}
