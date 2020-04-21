import React, { Component } from "react";

import PropTypes from "prop-types";

export class HiFrame extends Component {
  static propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
  };

  constructor() {
    super();
    this.ref = React.createRef();
  }

  //Resizes the iframe to it's content, then sets focus.
  fixFrame = (e) => {
    const iframe = e.target;
    if (iframe.contentDocument) {
      iframe.style.height = iframe.contentDocument.body.scrollHeight + "px";
      iframe.contentWindow.focus();
    } else if (this.ref && this.ref.current) {
      setTimeout(() => {
        this.fixFrame({ target: this.ref.current });
      }, 1000);
    }
  };

  render() {
    return (
      <iframe
        ref={this.ref}
        src={this.props.src}
        title={this.props.title}
        onLoad={(e) => this.fixFrame(e)}
      ></iframe>
    );
  }
}
