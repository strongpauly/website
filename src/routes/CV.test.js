import React from 'react';
import {CV} from './CV';
import {shallow} from 'enzyme';

/* eslint-env jest */

describe('CV', () => {
  it('renders without crashing', () => {
    const app = shallow(<CV/>);
    expect(app).toMatchSnapshot();
  });

  it('creates a #cvContainer', () => {
    const app = shallow(<CV/>);
    expect(app.find('#cvContainer')).toHaveLength(1);
  });
});
