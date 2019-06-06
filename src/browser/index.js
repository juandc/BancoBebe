import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component'
import getBrowserProviders from './getBrowserProviders';

loadableReady(() => {
  const serverData = window.__INITIAL_DATA__;
  const jsx = getBrowserProviders({ serverData });

  const root = document.getElementById('app');

  ReactDOM.hydrate(jsx, root);
});
