import React, { Component } from 'react';
import HiFrame from '../components/HiFrame';

export default class CV extends Component {

  render() {
    return <div id="cvContainer">
      <div className="container">
      CV implemented using react, react-bootstrap and <a href="https://jsonresume.org/schema/">jsonresume</a>.
      It&apos;s source can be found <a href="https://www.github.com/strongpauly/cv">here</a>.
      </div>
      <HiFrame src="/cv" title="cv"></HiFrame>
    </div>;
  }

}
