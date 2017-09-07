
const isRollup = process.env.ROLLUP_BUILD || false;

module.exports = {
  presets: [['env', isRollup ? {modules: false} : {}], 'react', 'stage-3'],
  plugins: [
    isRollup ? 'external-helpers' : null,
  ].filter(Boolean)
};
