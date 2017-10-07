import React from 'react';
import {Fleetway} from './Fleetway';
import {shallow} from 'enzyme';

/* eslint-env jest */

describe('Home', () => {
  it('renders without crashing', () => {
    const app = shallow(<Fleetway/>);
    expect(app).toMatchSnapshot();
  });

  it('creates a #fleetwayContainer', () => {
    const app = shallow(<Fleetway/>);
    expect(app.find('#fleetwayContainer')).toHaveLength(1);
  });
});
