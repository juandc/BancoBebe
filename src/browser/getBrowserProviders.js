import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from '../shared/DataContext';
import App from '../app/App';
import { HOME_DATA } from '../shared/dataTypes';

export default ({ initialData }) => (
  <BrowserRouter>
    <DataProvider initialData={initialData} dataResolvers={dataResolvers}>
      <App />
    </DataProvider>
  </BrowserRouter>
);

const dataResolvers = {
  [HOME_DATA]: () => new Promise(resolve => {
    setTimeout(() => resolve('home data from client'), 300);
  }),
};
