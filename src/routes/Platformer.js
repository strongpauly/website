import React, { Component } from "react";
import { HiFrame } from "../components/HiFrame";

export class Platformer extends Component {
  render() {
    return (
      <div id="platformerContainer">
        <p>
          A work in progress writing a platform game using react. It&apos;s
          source can be found{" "}
          <a href="https://github.com/strongpauly/platformer">here</a>.
        </p>
        <HiFrame src="/platformer/index.html" title="platformer"></HiFrame>
      </div>
    );
  }
}
