
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import withHighcharts from './../hocs/withHighcharts';


class AbstractChart extends PureComponent {

  componentDidMount() {
    this.props.service.create(this.props.config, this.chartEl);
  }

  componentWillUpdate(nextProps) {
    this.props.service.update(nextProps.config, this.chartEl);
  }

  componentWillUnmount() {
    this.props.service.destroy();
  }

  render() {
    return (
      <div ref={el => this.chartEl = el} />
    )
  }
}

AbstractChart.propTypes = {
  config: PropTypes.object.isRequired,
  service: PropTypes.object.isRequired,

  Highcharts: PropTypes.object.isRequired,  // this is available, but use the service instead
};

export {AbstractChart as __AbstractChart};  // for testing


const ConnectedChart = withHighcharts(AbstractChart);

export default ConnectedChart;
