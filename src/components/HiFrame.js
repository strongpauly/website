import React, { Component } from 'react';

import PropTypes from 'prop-types';

const MIN_HEIGHT = 300;

export class HiFrame extends Component {
  static propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
  };

  constructor() {
    super();
    this.ref = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.fitFrame);
    this.fitFrame();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitFrame);
  }

  //Stretches the iframe from its position on the page to the bottom of the viewport.
  //The framed apps are cross-origin, so their content can't be measured directly.
  fitFrame = () => {
    const iframe = this.ref.current;
    if (!iframe) {
      return;
    }
    const top = iframe.getBoundingClientRect().top + window.pageYOffset;
    iframe.style.height = Math.max(window.innerHeight - top, MIN_HEIGHT) + 'px';
  };

  onLoad = (e) => {
    this.fitFrame();
    e.target.contentWindow.focus();
  };

  render() {
    return (
      <iframe
        ref={this.ref}
        src={this.props.src}
        title={this.props.title}
        onLoad={this.onLoad}
      ></iframe>
    );
  }
}
