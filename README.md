# React Highcharts Wrapper

[![Build Status](https://travis-ci.org/beestripes/react-highcharts-wrapper.svg?branch=master&)](https://travis-ci.org/beestripes/react-highcharts-wrapper)

React and Highcharts the right way.


## Problems this library sets out to solve

1. Highcharts does not translate to the ES6+ ecosystem, as the Highcharts constructor is global. Therefore, you can not apply application wide configuration to Highcharts without attaching it to window.

2. Highcharts depends on the DOM existing to render.

3. Rehydrating Highcharts in the React view rerendering paradigm is not native to Highcharts. 


## How does the library solve these 

1. Wraps your application with Highcharts using `HighchartsProvider`.
   And then consumes the Highcharts constructor internally with a higher order component `withHighcharts`

2.3. Render widgets like normal, by passing in any `config` as props to `AbstractChart` component


## Getting started

1. Add the module to your React app:

`npm install react-highcharts-wrapper`


2. Follow the instructions for use (coming soon).

Until then, you can browse implementation details used `src/index.js` powering https://react-highcharts-wrapper.firebaseapp.com
