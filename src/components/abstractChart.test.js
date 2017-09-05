
/* global it, describe, beforeEach */
import React from 'react';
import expect, {createSpy, spyOn, isSpy} from 'expect';
import {mount, shallow} from 'enzyme';
import AbstractChart, {AbstractChart as _AbstractChart} from './abstractChart';


/**
 * These tests are for AbstractChart wrapped by withHighcharts
 */
describe('(Component) AbstractChart enhanced - abstractChart', () => {

  it('should render a component without crashing', () => {
    const wrapper = shallow(<AbstractChart config={{chart:{type:'pie'}}} />, {
      context:  {
        Highcharts: {},
      }
    });
    expect(wrapper.instance()).toExist();
  });

  it.skip('should render with correct props', () => {

  });

});


/**
 * These tests are for AbstractChart in isolation
 */
describe('(Component) AbstractChart - abstractChart', () => {

  it('should call self._create when lifecycle componentDidMount is run', () => {
    const spy = spyOn(_AbstractChart.prototype, '_create');

    const wrapper = mount(<_AbstractChart config={{chart:{type:'pie'}}} Highcharts={{ // mock Highcharts
      chart: function() {}
    }} />);

    expect(spy).toHaveBeenCalled();
  });

  it('should call self._update when lifecycle componentWillUpdate is run', () => {
    const spy = spyOn(_AbstractChart.prototype, '_update');

    const wrapper = mount(<_AbstractChart config={{chart:{type:'pie'}}} Highcharts={{ // mock Highcharts
      chart: function() {}
    }} />);

    wrapper.instance().forceUpdate();

    expect(spy).toHaveBeenCalled();
  });

  it('should call self._destroy when lifecycle componentWillUnmount is run', () => {
    const spy = spyOn(_AbstractChart.prototype, '_update');

    const wrapper = mount(<_AbstractChart config={{chart:{type:'pie'}}} Highcharts={{ // mock Highcharts
      chart: function() {}
    }} />);

    wrapper.unmount();

    expect(spy).toHaveBeenCalled();
  });

});
