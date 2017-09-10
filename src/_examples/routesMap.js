
import React from 'react';

import Simple from './routes/simple';
import SimpleWithSeriesDataSwitch from './routes/simpleWithSeriesDataSwitch';
import CustomTheme from './routes/customTheme';
import ExtendHighcharts from './routes/extendHighcharts';


const routes = [
  {
    path: '/simple',
    title: 'A chart can be rendered',
    exact: true,
    main: (props) => <Simple {...props} />
  },
  {
    path: '/simple-switch-data',
    title: 'A chart can be dynamically updated',
    exact: true,
    main: (props) => <SimpleWithSeriesDataSwitch {...props} />
  },
  {
    path: '/custom-theme',
    title: 'A custom theme can be applied',
    exact: true,
    main: (props) => <CustomTheme {...props} />
  },
  {
    path: '/extend-highcharts',
    title: 'A Highcharts instance can be extended',
    exact: true,
    main: (props) => <ExtendHighcharts {...props} />
  },
];

export default routes;
