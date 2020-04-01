import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div id="homeContainer">
        <p>
          This is a portfolio of projects used in investigations into
          technologies by London based, full stack developer, Paul Potsides.
        </p>
        <p>Currently, this is mainly client side and react based projects.</p>
        <p>
          This site was built using react, react-bootstrap and react-router.
          It&apos;s source can be found{" "}
          <a href="https://www.github.com/strongpauly/website">here</a>
        </p>
      </div>
    );
  }
}
