import React from 'react';
import {App} from './App';
import {mount} from 'enzyme';
/* eslint-env jest */

describe('Website', () => {
  it('renders home by default', () => {
    const app = mount(<App />);
    expect(app.find('#homeContainer')).toHaveLength(1);
  });
});
