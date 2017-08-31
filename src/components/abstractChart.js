
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import withHighcharts from './../hocs/withHighcharts';


class AbstractChart extends PureComponent {

  constructor(props) {
    super(props);
    this._instance = null;
  }

  _create(nextProps = null) {
    const {Highcharts, config} = nextProps || this.props;
    if (!config.chart) {
      config.chart = {};
    }
    config.chart.renderTo = this.chartEl;
    this._instance = new Highcharts.chart(config);
    return this._instance;
  }

  // "update" by destroying then recreating the chart instance
  _update(nextProps) { // redraw
    this._destroy();
    this._create(nextProps);
    return this._instance;
  }

  _destroy() {
    if (this._instance) {
      this._instance.destroy();
      this._instance = null;
    }
  }

  componentDidMount() {
    this._create();
  }

  componentWillUpdate(nextProps) {
    this._update(nextProps);
  }

  componentWillUnmount() {
    this._destroy();
  }

  render() {
    return (
      <div ref={el => this.chartEl = el} />
    )
  }
}

AbstractChart.propTypes = {
  Highcharts: PropTypes.object.isRequired,  // supplied from Provider
};

const ConnectedChart = withHighcharts(AbstractChart);

export default ConnectedChart;
