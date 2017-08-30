
import React from 'react';

import AbstractChart from './abstractChart';


const BarChart = () => {
  return (
    <div>
      <h1>Bar Chart</h1>
      <AbstractChart config={{
        chart: {
          type: 'bar',
        },
        title: {
          text: 'Historic World Population by Region'
        },
        xAxis: {
          categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Population (millions)',
            align: 'high'
          },
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2]
        }, {
          name: 'Year 1900',
          data: [133, 156, 947, 408, 6]
        }, {
          name: 'Year 2012',
          data: [1052, 954, 4250, 740, 38]
        }]
      }} />
    </div>
  )
};

export default BarChart;
