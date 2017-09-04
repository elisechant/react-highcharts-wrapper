
import React from 'react';
import {storiesOf} from '@storybook/react';

import {HighchartsProvider, AbstractChart} from 'react-highcharts-wrapper';


storiesOf('Basic', module)
  .addDecorator(story => (
    <HighchartsProvider>{story()}</HighchartsProvider>
  ))
  .add('basic chart config', () =>
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
      }]
    }} />
  )
;
