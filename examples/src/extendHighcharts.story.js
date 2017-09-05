
import React from 'react';
import {storiesOf} from '@storybook/react';

import {HighchartsProvider, AbstractChart} from 'react-highcharts-wrapper';

import SimpleLineChart from './components/simpleLineChart';


const fixIssueWithLineCharts = (Highcharts) => {
  // This fixes the "thin lines at top & bottom of chart" bug
  Highcharts.wrap(Highcharts.Chart.prototype, 'setChartSize', function (proceed) {
    proceed.apply(this, [].slice.call(arguments, 1));
    const type = this.options.chart.type;
    if (type === 'line' || type === 'spline') {
      this.clipBox.height += 6;
      this.clipBox.y -= 3;
    }
  });
  return Highcharts;
};

storiesOf('Extend Highcharts', module)
  .addDecorator(story => (
    <HighchartsProvider executeFuncs={[
      fixIssueWithLineCharts
    ]}>{story()}</HighchartsProvider>
  ))
  .add('simple chart', () =>
    <SimpleLineChart />
  )
;
