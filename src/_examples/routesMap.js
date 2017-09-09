
import React from 'react';

import Simple from './routes/simple';
import SimpleWithSeriesDataSwitch from './routes/simpleWithSeriesDataSwitch';
import CustomTheme from './routes/customTheme';
import ExtendHighcharts from './routes/extendHighcharts';


const routes = [
  {
    path: '/simple',
    title: 'A simple chart can be rendered',
    exact: true,
    main: () => <Simple />
  },
  {
    path: '/simple-switch-data',
    title: 'A series can handle updated series',
    exact: true,
    main: () => <SimpleWithSeriesDataSwitch />
  },
  {
    path: '/custom-theme',
    title: 'A custom theme can be applied',
    exact: true,
    main: () => <CustomTheme />
  },
  {
    path: '/extend-highcharts',
    title: 'A Highcharts instance can be extended',
    exact: true,
    main: () => <ExtendHighcharts />
  },
];

export default routes;
