
const makeHighchartsApi = Highcharts => {

  let _instance;

  const create = (config, el) => {
    if (!config.chart) {
      config.chart = {};
    }
    config.chart.renderTo = el;
    this._instance = new Highcharts.chart(config);
    return _instance;
  };

  // "update" by destroying then recreating the chart instance
  const update = (nextConfig, el) => { // redraw
    destroy();
    return create(nextConfig, el);
  };

  const destroy = () => {
    if (_instance) {
      _instance.destroy();
      _instance = null;
    }
    return _instance;
  };

  return {
    create,
    update,
    destroy
  }
};

export default makeHighchartsApi;
