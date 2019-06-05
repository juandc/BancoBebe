import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component'
import App from '../app/App';

const Browser = (
  <App />
);

loadableReady(() => {
  const root = document.getElementById('app');
  ReactDOM.hydrate(Browser, root);
});
