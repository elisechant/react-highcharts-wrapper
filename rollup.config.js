
import alias from 'rollup-plugin-alias';
import rollupBabel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';

const ENTRY = 'src/ReactHighchartsWrapper.js';

export default [
  // browser friendly UMD build
  // {
  //   input: ENTRY,
  //   sourcemap: true,
  //   output: [
  //     {file: 'dist/react-highcharts-wrapper.umd.min.js', format: 'umd', name: 'ReactHighchartsWrapper'},
  //   ],
  //   exports: 'default',
  //   external: [
  //     'react',
  //     'react-dom',
  //     'prop-types',
  //     'highcharts'
  //   ],
  //   globals: {
  //     'react': 'React',
  //     'react-dom': 'ReactDOM',
  //     'prop-types': 'PropTypes',
  //     'highcharts': 'Highcharts'
  //   },
  //   plugins: [
  //     alias({}),
  //     nodeResolve({jsnext: true, main: true}),
  //     rollupBabel({exclude: 'node_modules/**'}),
  //     uglify({
  //       output: {
  //         comments: function(node, comment) {
  //           const text = comment.value;
  //           const type = comment.type;
  //           if (type == "comment2") {
  //             return /@version/i.test(text);
  //           }
  //         }
  //       }
  //     })
  //   ],
  //   banner: `/* @version react-highcharts-wrapper ${pkg.version} */`,
  // },

  // CommonJS (for Node) and ES Module (for bundlers) build.
  {
    input: ENTRY,
    sourcemap: true,
    output: [
      {file: 'dist/react-highcharts-wrapper.es.js', format: 'es'},
      {file: 'dist/react-highcharts-wrapper.cjs.js', format: 'cjs'},
    ],
    exports: 'named',
    plugins: [
      alias({}),
      nodeResolve({jsnext: true, main: true}),  // so Rollup can find npm modules
      commonjs(),                               // so Rollup can convert
      rollupBabel({exclude: 'node_modules/**'}),
    ],
    external: [
      'react',
      'react-dom',
      'prop-types',
      'highcharts'
    ],
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      'highcharts': 'Highcharts'
    },
    banner: `/* react-highcharts-wrapper ${pkg.version} */`,
  }
]
