import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class HiFrame extends Component {
  static propTypes = {
    src: PropTypes.string,
    title: PropTypes.string
  }

  render() {
    //Resizes the iframe to it's content, then sets focus.
    function fixFrame(e) {
      const iframe = e.target;
      iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px';
      iframe.contentWindow.focus();
    }
    return <iframe src={this.props.src} title={this.props.title} onLoad={fixFrame}></iframe>;
  }

}
