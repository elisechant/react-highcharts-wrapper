
import React from 'react';
import {storiesOf} from '@storybook/react';

import {HighchartsProvider} from 'react-highcharts-wrapper';

import BarChart from './components/barChart';


storiesOf('Series', module)
  .addDecorator(story => (
    <HighchartsProvider>{story()}</HighchartsProvider>
  ))
  .add('switch series data', () => <BarChart />)
;
