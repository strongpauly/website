import React, { Component } from "react";
import { HiFrame } from "../components/HiFrame";

export class CV extends Component {
  render() {
    return (
      <div id="cvContainer">
        <p>
          CV implemented using react, react-bootstrap and{" "}
          <a href="https://jsonresume.org/schema/">jsonresume</a>. It&apos;s
          source can be found{" "}
          <a href="https://www.github.com/strongpauly/cv">here</a>.
        </p>
        <HiFrame src="/cv/index.html" title="cv"></HiFrame>
      </div>
    );
  }
}
