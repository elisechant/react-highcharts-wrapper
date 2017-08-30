
import {Component, Children} from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';


class HighchartsProvider extends Component {
  // get the service/data
  getChildContext() {
    // todo - consume this.props.config
    return {
      // if someone down the element tree needs our context data
      // this reference will be called
      'Highcharts': this.props.Highcharts || Highcharts
    };
  }
	render() {
		return Children.only(this.props.children)
	}
}

// tell React _what_ it provides
HighchartsProvider.childContextTypes = {
  Highcharts: PropTypes.object,
};

export default HighchartsProvider;
