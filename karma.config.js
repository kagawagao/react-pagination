module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      {
        pattern: './tests/test-bundler.js',
        watched: false,
        served: true,
        included: true
      }
    ],
    frameworks: ['mocha', 'chai-sinon', 'chai-as-promised', 'chai'],
    preprocessors: {
      './tests/test-bundler.js': ['webpack', 'sourcemap']
    },
    reporters: ['spec', 'coverage', 'coveralls'],
    coverageReporter: {
      reporters: [
        {
          type: 'text-summary'
        }, {
          type: 'html', dir: 'coverage'
        }, {
          type: 'lcov', dir: 'coverage/'
        }
      ]
    },
    singleRun: true,
    webpack: {
      devtool: 'inline-source-map',
      module: {
        preLoaders: [{
          exclude: /node_modules|tests/,
          loader: 'isparta',
          test: /\.jsx?$/,
          include: /src/
        }],
        loaders: [{
          exclude: /node_modules/,
          loader: 'babel-loader',
          test: /\.jsx?$/
        }]
      },
      resolve: {
        root: './src',
        extensions: ['', '.js', '.jsx', '.json']
      }
    },
    webpackMiddleware: {
      noInfo: false
    }
  })
}
