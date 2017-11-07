import React, { Component } from 'react';
import Script from 'react-load-script';

export class Fleetway extends Component {

  render() {
    return <div id="fleetwayContainer" className="container">
      <p>This is a injectable search bar that I developed for a client Fleetway travel.  It downloads an injector js file which then
      requests other css and javascript files to build the angular component.  Executing the search will take you to their site.</p>
      <div style={{minHeight: '150px', marginTop: '20px', marginBottom: '20px'}}>
        <search-widget></search-widget>
        <Script
          url="https://bookings.fleetwaytravel.com/ng/injector.js?aid=fw"
          attributes={{id: 'travelsmartInjector'}} />
      </div>
      <p>The injector.js is vanilla javascript that creates additional script and css tags once it has been loaded.  Fleetway partner with other
        providers, each of which are given a particular identifier.  The injector.js also downloads an encrypted version of this for use in
        further api calls.
      </p>
      <p>The search bar itself is a combination of Angular 4 bootstrap and custom components, including a type ahead search, date range picker and
      other drop down controls.  It was designed to be flexible and reusable component.  It is included not only as an injectable widget, but also
      on the fleetway home page, as well as on multiple pages throughout their booking platform.</p>
    </div>;
  }
}
