# React Highcharts Wrapper

[![Build Status](https://travis-ci.org/beestripes/react-highcharts-wrapper.svg?branch=master&)](https://travis-ci.org/beestripes/react-highcharts-wrapper)

A wrapper for building charts with Highcharts and React.


## Who is this library for? 

Anyone wanting to be productive with Highcharts in React.

Render React components with 1:1 Highcharts config API. 


## Demo (wip)

[https://react-highcharts-wrapper.firebaseapp.com](https://react-highcharts-wrapper.firebaseapp.com)


## Problems this library solves

1. Highcharts does not translate to the ES6+ ecosystem, as the Highcharts constructor is global. Therefore, you can not apply application wide configuration to Highcharts without attaching it to window.

2. Highcharts depends on the DOM existing to render.

3. Rehydrating Highcharts in the React view re-rendering paradigm is not native to Highcharts. 


## How does the library solve these problems

1. Wraps your application with Highcharts using `HighchartsProvider`.
   And then consumes the Highcharts constructor internally with a higher order component `withHighcharts`

2.3. Render widgets like normal, by passing in any `config` as props to `AbstractChart` component


## Getting started

### 1. Add the module to your React app:

`npm install react-highcharts-wrapper`


### 2. Wrap your app with `HighchartsProvider`.


app.js
```
import {HighchartsProvider} from "react-highcharts-wrapper";

const App = () => {
  return (
    <HighchartsProvider>
      <div>
        <p>Welcome to my amazing app</p>
        <MyPage />
      </div>
    </HighchartsProvider>
  )
};
```

This will make Highcharts available to context.


### 3. Build the chart components you need with `AbstractChart` 
passing in a standard Highcharts configuration object. 


components/myPieChart.js
```
import {AbstractChart} from 'react-highcharts-wrapper';

const MyPieChart = () => {
  return (
    <div>
      <h1>My Pie Chart</h1>
      <AbstractChart config={{
        chart: {
          type: 'pie'
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [
            {name: 'Microsoft Internet Explorer', y: 56.33}, 
            {name: 'Chrome', y: 24.03, sliced: true, selected: true}, 
            {name: 'Firefox', y: 10.38}, 
            {name: 'Safari', y: 4.77}, 
            {name: 'Opera', y: 0.91},
            {name: 'Proprietary or Undetectable', y: 0.2}
            ]
        }],
      }} />
    </div>
  )
};
``` 


### 4. Consume the charts like any other component 


components/myPage.js
```
import MyPieChart from './myPieChart';

const MyPage = () => {
  return (
    <div>
      <h1>My page</h1>
      <MyPieChart />
    </div>
  )
};
```
 
 
## Done! 🏁



### Optional: How can I extend the Highcharts primitive?

You can pass an array of executable functions to `HighchartsProvider` like this: 

```
<HighchartsProvider executeFuncs={[
  (Highcharts) => {
    console.log(Highcharts)
    return Highcharts;
  }
]}>
```

This can be useful for setting a default theme for example for Highcharts:

```
const HIGHCHARTS_THEME = {
  chart: {
    style: {
      fontFamily: 'Open Sans,sans-serif',
    },
  },
}

<HighchartsProvider executeFuncs={[
  (Highcharts) => {
    Highcharts.setOptions({
      ...HIGHCHARTS_THEME
    });
    return Highcharts;
  },
  (Highcharts) => {
    Highcharts.loremIpsum = 'boo ya!';
    return Highcharts;
  }
]}>
```
