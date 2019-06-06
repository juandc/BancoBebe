import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component'
import getBrowserProviders from './getBrowserProviders';

loadableReady(() => {
  const root = document.getElementById('app');
  const jsx = getBrowserProviders();

  ReactDOM.hydrate(jsx, root);
});
