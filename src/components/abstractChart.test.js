
/* global it, describe, beforeEach */
import React from 'react';
import expect, {createSpy, spyOn, isSpy} from 'expect';
import {mount, shallow} from 'enzyme';
import AbstractChart, {__AbstractChart} from './abstractChart';


/**
 * These tests are for AbstractChart wrapped by withHighcharts HOC.
 * Environment has props and context.
 */
describe('(Component) AbstractChart enhanced - abstractChart', () => {

  it('should render a component without crashing', () => {
    const wrapper = shallow(<AbstractChart
      config={{chart:{type:'pie'}}}
      service={{
        create: () => {},
        update: () => {},
        destroy: () => {},
      }}
    />, {  // provide the interface from HighchartsProvider
      context:  {
        Highcharts: {
          chart: function() {}
        },
      }
    });
    expect(wrapper.instance()).toExist();
  });

});


/**
 * These tests are for AbstractChart without the HOC enhancement.
 * Environment has props only.
 */
describe('(Component) AbstractChart - abstractChart', () => {

  it('should create when lifecycle componentDidMount is run', () => {
    const mockService = {
      create: () => {},
    };

    const spy = spyOn(mockService, 'create');

    mount(<__AbstractChart
      config={{chart:{type:'pie'}}}
      Highcharts={{ // mock Highcharts
        chart: function() {}
      }}
      service={mockService}
    />);

    expect(spy).toHaveBeenCalled();
  });

  it('should update when lifecycle componentWillUpdate is run', () => {
    const mockService = {
      create: () => {},
      update: () => {},
      destroy: () => {},
    };

    const spy = spyOn(mockService, 'update');

    const wrapper = mount(<__AbstractChart
      config={{chart:{type:'pie'}}}
      Highcharts={{ // mock Highcharts
        chart: function() {}
      }}
      service={mockService}
    />);

    wrapper.instance().forceUpdate();

    expect(spy).toHaveBeenCalled();
  });

  it('should destroy when lifecycle componentWillUnmount is run', () => {
    const mockService = {
      create: () => {},
      update: () => {},
      destroy: () => {},
    };

    const spy = spyOn(mockService, 'destroy');

    const wrapper = mount(<__AbstractChart
      config={{chart:{type:'pie'}}}
      Highcharts={{ // mock Highcharts
        chart: function() {}
      }}
      service={mockService}
    />);

    wrapper.unmount();

    expect(spy).toHaveBeenCalled();
  });

});
