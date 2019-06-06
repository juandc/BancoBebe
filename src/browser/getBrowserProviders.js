import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../app/App';

export default ({ serverData }) => (
  <BrowserRouter>
    <App initialData={serverData} />
  </BrowserRouter>
);
