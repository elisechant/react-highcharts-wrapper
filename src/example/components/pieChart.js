
import React from 'react';

import AbstractChart from '../../components/abstractChart';


const PieChart = () => {
  return (
    <div>
      <h1>Pie Chart</h1>
      <AbstractChart config={{
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Browser market shares January, 2015 to May, 2015'
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'Microsoft Internet Explorer',
            y: 56.33
          }, {
            name: 'Chrome',
            y: 24.03,
            sliced: true,
            selected: true
          }, {
            name: 'Firefox',
            y: 10.38
          }, {
            name: 'Safari',
            y: 4.77
          }, {
            name: 'Opera',
            y: 0.91
          }, {
            name: 'Proprietary or Undetectable',
            y: 0.2
          }]
        }],
      }} />
    </div>
  )
};

export default PieChart;
