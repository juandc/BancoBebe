import React from 'react';
import { loadable } from '@loadable/component'

export default [
  {
    name: 'home',
    location: { path: '...', exact: true || false },
    component: () => <p>Home</p>,
    // component: loadable(() => import('...'), {
    //   loading: () => <p>loading...</p>,
    // }),
    pageData: {
      resolver: 'home_data',
      fromServer: true || false,
      fromClient: 'always' || 'onlyIfNoPageData' || false,
      normalize: data => ({
        message: data.message || data,
      }),
    },
  },
];
