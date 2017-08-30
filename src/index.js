
import React from 'react';
import ReactDOM from 'react-dom';
import HighchartsProvider from "./providers/highchartsProvider";
import Highcharts from 'highcharts';

import BarChart from './components/barChart';
import DonutChart  from './components/donutChart';

const ExampleApp = () => {
  return (
    <HighchartsProvider Highcharts={Highcharts}>
      <div>
        <BarChart />
        <DonutChart />
      </div>
    </HighchartsProvider>
  )
};

ReactDOM.render(
  <ExampleApp />,
  document.getElementById('root')
);
