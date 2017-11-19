import React from 'react';
import {HiFrame} from './HiFrame';
import {shallow} from 'enzyme';

/* eslint-env jest */

describe('HiFrame', () => {
  it('renders without crashing', () => {
    const app = shallow(<HiFrame src="somewhere" title="something"/>);
    expect(app).toMatchSnapshot();
  });

  it('will resize frame onLoad', () => {
    const app = shallow(<HiFrame src="somewhere" title="something"/>);
    const iframe = app.find('iframe');
    expect(iframe).toHaveLength(1);
    const focus = jest.fn();
    const mock = {style:{}, contentDocument: {body: {scrollHeight: 8}}, contentWindow:{focus:focus}};
    iframe.simulate('load', {target: mock});
    expect(mock.style.height).toEqual('8px');
    expect(focus).toHaveBeenCalled();

  });
});
