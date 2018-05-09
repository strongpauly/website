import React from 'react';
import {Platformer} from './Platformer';
import {shallow} from 'enzyme';

/* eslint-env jest */

describe('Platformer', () => {
  it('renders without crashing', () => {
    const app = shallow(<Platformer/>);
    expect(app).toMatchSnapshot();
  });

  it('creates a #minesweeperContainer', () => {
    const app = shallow(<Platformer/>);
    expect(app.find('#platformerContainer')).toHaveLength(1);
  });
});
