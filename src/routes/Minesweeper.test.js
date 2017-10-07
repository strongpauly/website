import React from 'react';
import {Minesweeper} from './Minesweeper';
import {shallow} from 'enzyme';

/* eslint-env jest */

describe('Minesweeper', () => {
  it('renders without crashing', () => {
    const app = shallow(<Minesweeper/>);
    expect(app).toMatchSnapshot();
  });

  it('creates a #minesweeperContainer', () => {
    const app = shallow(<Minesweeper/>);
    expect(app.find('#minesweeperContainer')).toHaveLength(1);
  });
});
