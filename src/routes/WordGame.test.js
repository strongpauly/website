import React from 'react';
import WordGame from './WordGame';
import {shallow} from 'enzyme';

/* eslint-env jest */

describe('WordGame', () => {
  it('renders without crashing', () => {
    const app = shallow(<WordGame/>);
    expect(app).toMatchSnapshot();
  });

  it('creates a #wordGameContainer', () => {
    const app = shallow(<WordGame/>);
    expect(app.find('#wordGameContainer')).toHaveLength(1);
  });
});
