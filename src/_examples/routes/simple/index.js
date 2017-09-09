
import React from 'react';
import {HighchartsProvider} from './../../../ReactHighchartsWrapper';

import BarChart from './barChart';


const Simple = () => {
  return (
    <HighchartsProvider>
      <BarChart />
    </HighchartsProvider>
  )
};

export default Simple;
