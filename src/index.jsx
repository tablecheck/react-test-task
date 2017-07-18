import React from 'react';
import { render } from 'react-dom';
import App from './app/app';

try {
  const appContainer = document.getElementById('app');
  render(<App />, appContainer);
} catch (e) {
  /* eslint-disable no-console */
  console.warn('main.js is unable to find application container.');
  console.warn('If you are running production or development app then worry');
  console.warn('If this is components, styleguide or storybook this behavior is expected');
  /* eslint-enable no-console */
  throw e;
}
