import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { Deferred } from 'sancus';
import debug from 'debug';

import devConfig from './development';

const app = express();
const log = debug('log');

function startServer({ host, port }) {
  const d = new Deferred();
  const config = devConfig;
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    options: {
      noInfo: true,
      publicPath: config.output.publicPath,
      hot: true,
      historyApiFallback: true
    }
  }));

  app.use(webpackHotMiddleware(compiler));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/index.html'));
  });

  // Place for dummy API.
  app.get(/^([a-zA-Z0-9/\-+]+)$/, (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/index.html'));
  });

  const server = app.listen(port, host, (err) => {
    if (err) {
      log(err);
      d.reject(err);
      return;
    }

    log(`Listening at http://${host}:${port}`);

    d.resolve(server);
  });

  return d.promise;
}

export default startServer;
