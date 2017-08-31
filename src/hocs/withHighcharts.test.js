
/* global it, describe */
import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';

import withHighcharts from './withHighcharts';


describe('(HOC) withHighcharts - withHighcharts', () => {

  describe('expected attributes', () => {
    const Actual = mount(withHighcharts(() => <div>Hello</div>)(null, {Highcharts: {}}));

    it('should render a component without crashing', () => {
      expect(Actual.instance()).toExist();
    });

    it('should render if context.Highcharts is supplied', () => {
      expect(Actual.instance().props.Highcharts).toEqual({});
    });
  });

  describe('unexpected attributes', () => {
    it('should throw if context.Highcharts is not correctly supplied', () => {
      expect(() => {
        return mount(withHighcharts(() => <div>Hello</div>)(null, {}));
      }).toThrow()
    });
  });

});
