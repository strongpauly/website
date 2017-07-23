import React from 'react';
import Tetris from './Tetris';
import {shallow} from 'enzyme';

/* eslint-env jest */

describe('Tetris', () => {
  it('renders without crashing', () => {
    const app = shallow(<Tetris/>);
    expect(app).toMatchSnapshot();
  });

  it('creates a #tetrisContainer', () => {
    const app = shallow(<Tetris/>);
    expect(app.find('#tetrisContainer')).toHaveLength(1);
  });
});
