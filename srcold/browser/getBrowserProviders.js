import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from '../shared/DataContext';
import App from '../app/App';
import { HOME_DATA } from '../shared/dataTypes';

// const route = routes.find(route => location === route.location.path);
// if (
//   route
//   && route.loadData !== undefined
//   && !!route.loadData.fromServer
// ) {
//   const data = await clientDataResolvers(route.loadData.dataType)();
//   serverData = route.loadData.normalize(data);
// }

export default ({ initialData }) => (
  <BrowserRouter>
    <DataProvider initialData={initialData}>
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
