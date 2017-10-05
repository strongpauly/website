import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router';
import Routes from './Routes.js';
import Home from './routes/Home';
import CV from './routes/CV';
import Minesweeper from './routes/Minesweeper';
import WordGame from './routes/WordGame';
import Tetris from './routes/Tetris';
import Fleetway from './routes/Fleetway';
/* eslint-env jest */

describe('Routes', () => {
  it('renders correct routes', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
    // { 'r/home' : Home, ... }
    expect(pathMap['/r/home']).toBe(Home);
    expect(pathMap['/r/cv']).toBe(CV);
    expect(pathMap['/r/minesweeper']).toBe(Minesweeper);
    expect(pathMap['/r/wordgame']).toBe(WordGame);
    expect(pathMap['/r/tetris']).toBe(Tetris);
    expect(pathMap['/r/fleetway']).toBe(Fleetway);
  });
});
