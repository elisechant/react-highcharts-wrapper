
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import withHighcharts from './../hocs/withHighcharts';


class AbstractChart extends PureComponent {

  constructor(props) {
    super(props);
    this._instance = null;
  }

  componentDidMount() {
    this.props.service.create(this.props.config, this.chartEl);
  }

  componentWillUpdate(nextProps) {
    this.props.service.update(nextProps);
  }

  componentWillUnmount() {
    this.props.service.destroy();
  }

  render() {
    return <div ref={el => this.chartEl = el} />
  }
}

AbstractChart.propTypes = {
  service: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,

  Highcharts: PropTypes.object, // don't use this if possible, but it should exist
};

export {AbstractChart as __AbstractChart}; // for testing


const ConnectedChart = withHighcharts(AbstractChart);

export default ConnectedChart;
