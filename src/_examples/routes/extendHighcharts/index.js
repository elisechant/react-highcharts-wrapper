
import React from 'react';
import {HighchartsProvider} from './../../../ReactHighchartsWrapper';

import SimpleLineChart from './../../components/simpleLineChart';


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

const ExtendHighcharts = ({title}) => {
  return (
    <HighchartsProvider  executeFuncs={[
      fixIssueWithLineCharts
    ]}>
      <div>
        <h2>{title}</h2>
        <SimpleLineChart />
      </div>
    </HighchartsProvider>
  )
};

export default ExtendHighcharts;
