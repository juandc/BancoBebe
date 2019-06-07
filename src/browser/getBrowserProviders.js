import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from '../shared/DataContext';
import App from '../app/App';
import { HOME_DATA } from '../shared/dataTypes';

export default ({ initialData }) => (
  <BrowserRouter>
    <DataProvider initialData={initialData} dataResolvers={clientDataResolvers}>
      <App />
    </DataProvider>
  </BrowserRouter>
);

const clientDataResolvers = {
  [HOME_DATA]: () => new Promise(resolve => {
    setTimeout(() => resolve({
      message: 'home data from client',
    }), 300);
  }),
};
