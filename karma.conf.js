var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/test/**/*.test.jsx'],
    preprocessors: {
      'app/test/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    //if the test never ends
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    // Connect with webpack.config.js
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
}