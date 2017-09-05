
import React, {PureComponent} from 'react';
import {storiesOf} from '@storybook/react';

import {AbstractChart, HighchartsProvider} from 'react-highcharts-wrapper';


class BarChartWithSeriesToggle extends PureComponent {

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
  };

  render() {
    return (
      <div>
        <h1>Bar Chart with toggleable series</h1>

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

storiesOf('Simple', module)
  .addDecorator(story => (
    <HighchartsProvider>{story()}</HighchartsProvider>
  ))
  .add('switching series data', () => <BarChartWithSeriesToggle />)
;
