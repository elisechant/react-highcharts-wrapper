
import React from 'react';
import PropTypes from 'prop-types';

import makeHigchartsService from './../services/highchartsInterface';


const withHighcharts = Composed => {

  const C = (props, context) => {

    if (typeof context.Highcharts !== 'object' || !context.Highcharts) {
      throw new Error(`Check that you've included HighchartsProvider.`);
    }

    const newProps = {
      ...props,
      service: makeHigchartsService(context.Highcharts),
      Highcharts: context.Highcharts,   // supply this for convenience but don't suggest that it's manipulated at Component
    };

    return <Composed {...newProps} />
  };

  C.contextTypes = {
    Highcharts: PropTypes.object,
  };

  return C;
};

export default withHighcharts;

