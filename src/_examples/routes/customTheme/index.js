
import React from 'react';
import {HighchartsProvider} from './../../../ReactHighchartsWrapper';

import SimpleBarChart from './../../components/simpleBarChart';
import SimpleLineChart from './../../components/simpleLineChart';


const setTheme = (Highcharts) => {
  Highcharts.theme = {
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
      '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
      backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
          [0, 'rgb(255, 255, 255)'],
          [1, 'rgb(240, 240, 255)']
        ]
      },
    },
    title: {
      style: {
        color: '#000',
        font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
      }
    },
    subtitle: {
      style: {
        color: '#666666',
        font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
      }
    },

    legend: {
      itemStyle: {
        font: '9pt Trebuchet MS, Verdana, sans-serif',
        color: 'black'
      },
      itemHoverStyle:{
        color: 'gray'
      }
    }
  };

  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);

  // return Highcharts to chain
  return Highcharts;
};

const CustomTheme = ({title}) => {
  return (
    <HighchartsProvider executeFuncs={[
      setTheme
    ]}>
      <div>
        <h2>{title}</h2>
        <SimpleBarChart />
        <SimpleLineChart />
      </div>
    </HighchartsProvider>
  )
};

export default CustomTheme;
