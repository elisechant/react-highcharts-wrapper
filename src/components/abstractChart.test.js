
/* global it, describe */
import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import Highcharts from 'highcharts';

import AbstractChart from './abstractChart';


function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

import {JSDOM} from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const {window} = jsdom;
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};
copyProps(window, global);


describe('(Component) AbstractChart - abstractChart', () => {

  describe('expected attributes', () => {

    const Actual = shallow(<AbstractChart config={{chart:{type:'pie'}}} />, {
      context:  {
        Highcharts: Highcharts,
      }
    });

    it('should render a component without crashing', () => {
      expect(Actual.instance()).toExist();
    });

  });

});
