
import React from 'react';
import ReactDOM from 'react-dom';
import HighchartsProvider from "./providers/highchartsProvider";

import BarChart from './example/components/barChart';
import PieChart  from './example/components/pieChart';

const ExampleApp = () => {
  return (
    <HighchartsProvider config={{}}>
      <div>
        <BarChart />
        <PieChart />
      </div>
    </HighchartsProvider>
  )
};

ReactDOM.render(
  <ExampleApp />,
  document.getElementById('root')
);
