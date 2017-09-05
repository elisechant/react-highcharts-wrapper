
/* global it, describe */
import React from 'react';
import expect, {spyOn} from 'expect';
import {shallow, mount} from 'enzyme';

import AbstractChart, {__AbstractChart} from './abstractChart';


/**
 * Test wrapped Component (with withHighcharts)
 * This environment has props and context.
 */

describe('(Component) AbstractChart enhanced - abstractChart', () => {

  it('should render a component without crashing', () => {
    const wrapper = shallow(<AbstractChart
      config={{chart:{type:'pie'}}}
      service={{
        create: () => {},
        update: () => {},
        destroy: () => {}
      }}
    />, { // mock the interface from HighchartsProvider
      context: {
        Highcharts: {
          chart: () => {}
        }
      }
    });

    expect(wrapper.instance()).toExist();
  });

});


/**
 * Test raw Component
 * This environment has only props.
 */

describe('(Component) AbstractChart enhanced - abstractChart', () => {

  it('should register an element ref to render the chart', () => {
    const mockService = {  // mock service
      create: () => {},
      update: () => {},
      destroy: () => {}
    };
    const wrapper = mount(<__AbstractChart
      config={{chart:{type:'pie'}}}
      service={mockService}
      Highcharts={{ // mock Highcharts
        chart: function() {}
      }}
    />);
    expect(wrapper.instance().chartEl).toExist();
  });

  it('should create when componentDidMount', () => {
    const mockService = {  // mock service
      create: () => {},
      update: () => {},
      destroy: () => {}
    };

    const spy = spyOn(mockService, 'create');

    const wrapper = mount(<__AbstractChart
      config={{chart:{type:'pie'}}}
      service={mockService}
      Highcharts={{ // mock Highcharts
        chart: function() {}
      }}
    />);

    expect(spy).toHaveBeenCalled();
  });

  it('should update when componentWillUpdate', () => {
    const mockService = {  // mock service
      create: () => {},
      update: () => {},
      destroy: () => {}
    };

    const spy = spyOn(mockService, 'update');

    const wrapper = mount(<__AbstractChart
      config={{chart:{type:'pie'}}}
      service={mockService}
      Highcharts={{ // mock Highcharts
        chart: function() {}
      }}
    />);

    wrapper.instance().forceUpdate();

    expect(spy).toHaveBeenCalled();
  });

  it('should destroy when componentWillUnmount', () => {
    const mockService = {  // mock service
      create: () => {},
      update: () => {},
      destroy: () => {}
    };

    const spy = spyOn(mockService, 'destroy');

    const wrapper = mount(<__AbstractChart
      config={{chart:{type:'pie'}}}
      service={mockService}
      Highcharts={{ // mock Highcharts
        chart: function() {}
      }}
    />);

    wrapper.unmount();

    expect(spy).toHaveBeenCalled();
  });

});
