
/* global it, describe */
import React from 'react';
import expect, {spyOn} from 'expect';
import runJsdom from './../../test/helpers/runJsdom';

import makeHighchartsApi from './highchartsApi';


describe('(Services) highchartsApi - highchartsApi', () => {

  let api;
  let actual;

  const MockChart = function() {
    if (!(this instanceof MockChart)) {
      return new MockChart();
    }
  };
  MockChart.prototype.create = function() {};
  MockChart.prototype.destroy = function() {};

  const mockHighcharts = {
    chart: MockChart
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
    it('should update a created instance', () => {
      const spyDestroy = spyOn(mockHighcharts.chart.prototype, 'destroy');
      expect(typeof actual !== 'undefined').toBe(true);
      api.update({}, document.getElementById('chart'));
      expect(spyDestroy).toHaveBeenCalled();
      expect(actual instanceof mockHighcharts.chart).toBe(true);
    });
  });

  describe('destroy', () => {
    it('should destroy a created instance', () => {
      const spy = spyOn(mockHighcharts.chart.prototype, 'destroy');
      expect(typeof actual !== 'undefined').toBe(true);
      api.destroy();
      expect(spy).toHaveBeenCalled();
    });
  });

});
