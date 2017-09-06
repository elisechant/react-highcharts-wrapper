
// ---
// this file exists purely for development convenience
// ---


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HighchartsProvider from "./providers/highchartsProvider";
import AbstractChart from './components/abstractChart';


class Sample1 extends Component {
  constructor(props) {
    super(props);
    this.data = {
      series1: [{
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
      }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
      }, {
        name: 'Year 2012',
        data: [1052, 954, 4250, 740, 38]
      }],
      series2: [{
        name: 'Year 2800',
        data: [2, 12, 78, 121, 50]
      }, {
        name: 'Year 2900',
        data: [777, 156, 222, 23, 889]
      }, {
        name: 'Year 3012',
        data: [2342, 121, 675, 1212, 899]
      }]
    };
    this.state = {
      currentSeries: 'series1',
    };
  }
  toggleSeries() {
    this.setState({
      currentSeries: this.state.currentSeries === 'series1' ? 'series2' : 'series1'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleSeries.bind(this)}>Toggle series</button>
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
          series: this.data[this.state.currentSeries],
        }} />
      </div>
    )
  }
}

class Sample2 extends Component {
  render() {
    return (
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
        }],
      }} />
    )
  }
}


const App = () => {
  return (
    <HighchartsProvider executeFuncs={[
      (Highcharts) => {
        console.log(Highcharts)
      }
    ]}>
      <div>
        <Sample1 />
        <Sample2 />
      </div>
    </HighchartsProvider>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
