
/* global it, describe */
import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';

import HighchartsProvider from './highchartsProvider';


describe('(Provider) HighchartsProvider - HighchartsProvider', () => {

  describe('expected attributes', () => {
    let Actual = mount(
      <HighchartsProvider>
        <div id="child">child here</div>
      </HighchartsProvider>
    );

    it('should render a child', () => {
      expect(Actual.find('#child')).toExist();
    });

    it.skip('should render exactly one child', () => {
    });

    it('should accept props.executeFuncs with type', () => {
      Actual = mount(
        <HighchartsProvider executeFuncs={[
          (Highcharts) => {}
        ]}>
          <span />
        </HighchartsProvider>
      );
      expect(Actual.props().executeFuncs).toBeA('array');
      expect(Actual.props().executeFuncs[0]).toBeA('function');
    });
  });

});
