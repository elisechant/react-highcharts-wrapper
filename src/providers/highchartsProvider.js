
import {Component, Children} from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';


class HighchartsProvider extends Component {

  // get the service/data
  getChildContext() {
    const {executeFuncs} = this.props;

    const _Highcharts = Highcharts;

    if (typeof executeFuncs !== 'undefined' && Array.isArray(executeFuncs) && executeFuncs.length) {
      executeFuncs.map(f => {
        return f(_Highcharts);
      });
    }
    return {
      // if someone down the element tree needs our context data
      // this reference will be called
      'Highcharts': _Highcharts
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

HighchartsProvider.defaultProps = {
  executeFuncs: [],
};

HighchartsProvider.propTypes = {
  executeFuncs: PropTypes.arrayOf(PropTypes.func),
};

export default HighchartsProvider;
