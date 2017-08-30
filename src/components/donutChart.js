
import React, {PureComponent} from 'react';

import withHighcharts from './../hocs/withHighcharts';

class Chart extends PureComponent {

  constructor(props) {
    super(props);
    this._instance = null;
    this.config = {
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
    };
  }

  componentDidMount() {
    const {Highcharts} = this.props;
    this.config.chart.renderTo = this.chartEl;
    this._instance = new Highcharts.chart(this.config);
  }

  componentWillUnmount() {
    if (this._instance) {
      this._instance.destroy();
      this._instance = null;
    }
  }

  render() {
    return (
      <div>
        <h1>Chart</h1>
        <div ref={el => this.chartEl = el} />
      </div>
    )
  }
}

const ConnectedChart = withHighcharts(Chart);

export default ConnectedChart;
