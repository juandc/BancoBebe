import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from '../shared/DataContext';
import App from '../app/App';

export default ({ initialData }) => (
  <BrowserRouter>
    <DataProvider initialData={initialData}>
      <App />
    </DataProvider>
  </BrowserRouter>
);
