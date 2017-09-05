
/* global it, describe */
import React from 'react';
import expect from 'expect';
import runJsdom from './../../test/helpers/runJsdom';

import makeHighchartsApi from './highchartsApi';


describe('(Services) highchartsApi - highchartsApi', () => {

  let api;
  let actual;

  const mockChart = function() {};
  mockChart.prototype.destroy = function() {};

  const mockHighcharts = {
    chart: mockChart
  };

  beforeEach(() => {
    runJsdom('chart');

    api = makeHighchartsApi(mockHighcharts);

    actual = api.create({}, document.getElementById('chart'));
  });

  describe('create', () => {
    it('should return an instance of Highcharts', () => {
      expect(actual instanceof mockHighcharts.chart).toBe(true);
    });
  });

  describe('update', () => {
    it.skip('should', () => {
      // todo
    });
  });

  describe('destroy', () => {
    it.skip('should destroy a created instance', () => {
      expect(typeof actual !== 'undefined').toBe(true);
      api.destroy();
      // todo
    });
  });

});
