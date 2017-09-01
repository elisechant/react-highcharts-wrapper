
/* global it, describe */
import expect from 'expect';

import {
  HighchartsProvider,
  withHighcharts,
  AbstractChart,
} from './ReactHighchartsWrapper';


describe('index - ReactHighchartsWrapper', () => {
  it('should export modules', () => {
    expect(HighchartsProvider).toExist();
    expect(withHighcharts).toExist();
    expect(AbstractChart).toExist();
  });
});
