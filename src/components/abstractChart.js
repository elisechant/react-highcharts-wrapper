
import React, {PureComponent} from 'react';

import withHighcharts from './../hocs/withHighcharts';


class AbstractChart extends PureComponent {

  constructor(props) {
    super(props);
    this._instance = null;
  }

  componentDidMount() {
    const {Highcharts, config} = this.props;
    config.chart.renderTo = this.chartEl;
    this._instance = new Highcharts.chart(config);
  }

  componentWillUnmount() {
    if (this._instance) {
      this._instance.destroy();
      this._instance = null;
    }
  }

  render() {
    return (
      <div ref={el => this.chartEl = el} />
    )
  }
}

const ConnectedChart = withHighcharts(AbstractChart);

export default ConnectedChart;
