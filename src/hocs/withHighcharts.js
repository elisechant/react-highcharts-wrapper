
import React from 'react';
import PropTypes from 'prop-types';


const withHighcharts = Composed => {
  const C = (props, context) => {

    if (typeof context.Highcharts !== 'object' || !context.Highcharts) {
      throw new Error('context.Highcharts must be provided to withHighcharts');
    }

    const newProps = {
      ...props,
      Highcharts: context.Highcharts,
    };
    return <Composed {...newProps} />
  };

  C.contextTypes = {  // todo - think this is unnecessary now because of the error clause
    Highcharts: PropTypes.object,
  };

  return C;
};

export default withHighcharts;

