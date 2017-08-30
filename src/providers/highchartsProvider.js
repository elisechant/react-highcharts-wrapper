
import {Component, Children} from 'react';
import PropTypes from 'prop-types';

class HighchartsProvider extends Component {
  // get the service/data
  getChildContext() {
    return {
      // if someone down the element tree needs our context data
      // this reference will be called
      Highcharts: this.props.Highcharts  // todo - include from Here ! or optionally from app
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
