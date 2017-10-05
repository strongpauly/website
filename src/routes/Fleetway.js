import React, { Component } from 'react';
import Script from 'react-load-script';

export default class Fleetway extends Component {

  render() {
    return <div id="fleetwayContainer" className="container">
      <p>This is a injectable search bar that I developed for a client Fleetway travel.  It downloads an injector js file which then
      requests other css and javascript files to build the angular component.  Executing the search will take you to their site.</p>
      <search-widget></search-widget>
      <Script
        url="http://travelsmart.stage.fleetway.com/ng/injector.js?aid=fw"
        attributes={{id: 'travelsmartInjector'}} />
    </div>;
  }
}
