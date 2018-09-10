import http from 'http';
import app from './app';

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000, () => console.log('SSR started')); // eslint-disable-line

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!'); // eslint-disable-line

  module.hot.accept('./app', () => {
    console.log('🔁  HMR Reloading `./app`...'); // eslint-disable-line
    server.removeListener('request', currentApp);
    const newApp = require('./app').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
