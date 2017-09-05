
import React from 'react';
import PropTypes from 'prop-types';

import makeHighchartsApi from "../services/highchartsApi";


const withHighcharts = Composed => {

  const C = (props, context) => {

    if (typeof context.Highcharts !== 'object' || !context.Highcharts) {
      throw new Error(`Check that you've included HighchartsProvider.`);
    }

    const newProps = {
      ...props,
      service: makeHighchartsApi(context.Highcharts),

      Highcharts: context.Highcharts,
    };
    return <Composed {...newProps} />
  };

  C.contextTypes = {
    Highcharts: PropTypes.object,
  };

  return C;
};

export default withHighcharts;

