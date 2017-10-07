import React from 'react';
import {Oss} from './Oss';
import {shallow} from 'enzyme';

/* eslint-env jest */

describe('Home', () => {
  it('renders without crashing', () => {
    const app = shallow(<Oss/>);
    expect(app).toMatchSnapshot();
  });

  it('creates a #homeContainer', () => {
    const app = shallow(<Oss/>);
    expect(app.find('#ossContainer')).toHaveLength(1);
  });
});
