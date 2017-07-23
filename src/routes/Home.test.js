import React from 'react';
import Home from './Home';
import {shallow} from 'enzyme';

/* eslint-env jest */

describe('Home', () => {
  it('renders without crashing', () => {
    const app = shallow(<Home/>);
    expect(app).toMatchSnapshot();
  });

  it('creates a #homeContainer', () => {
    const app = shallow(<Home/>);
    expect(app.find('#homeContainer')).toHaveLength(1);
  });
});
