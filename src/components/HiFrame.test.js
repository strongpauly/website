import React from 'react';
import {HiFrame} from './HiFrame';
import {shallow, mount} from 'enzyme';

/* eslint-env jest */

describe('HiFrame', () => {
  it('renders without crashing', () => {
    const app = shallow(<HiFrame src="somewhere" title="something"/>);
    expect(app).toMatchSnapshot();
  });

  it('will fill the remaining viewport height', () => {
    window.innerHeight = 1000;
    const app = mount(<HiFrame src="somewhere" title="something"/>);
    const iframe = app.find('iframe').getDOMNode();
    expect(iframe.style.height).toEqual('1000px');

    iframe.getBoundingClientRect = () => ({top: 200});
    window.dispatchEvent(new Event('resize'));
    expect(iframe.style.height).toEqual('800px');

    window.innerHeight = 400;
    window.dispatchEvent(new Event('resize'));
    expect(iframe.style.height).toEqual('300px');
    app.unmount();
  });

  it('will focus frame onLoad', () => {
    const app = shallow(<HiFrame src="somewhere" title="something"/>);
    const focus = jest.fn();
    app.find('iframe').simulate('load', {target: {contentWindow: {focus}}});
    expect(focus).toHaveBeenCalled();
  });
});
