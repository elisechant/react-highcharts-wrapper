
import React from 'react';
import ReactDOM from 'react-dom';
import HighchartsProvider from "./providers/highchartsProvider";

import BarChart from './components/barChart';
import PieChart  from './components/pieChart';

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
