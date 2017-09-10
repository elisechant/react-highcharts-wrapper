
import React from 'react';
import {HighchartsProvider} from './../../../ReactHighchartsWrapper';

import BarChart from './barChart';


const Simple = ({title}) => {
  return (
    <HighchartsProvider>
      <div>
        <h2>{title}</h2>
        <BarChart />
      </div>
    </HighchartsProvider>
  )
};

export default Simple;
