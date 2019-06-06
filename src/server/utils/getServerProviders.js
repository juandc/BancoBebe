import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from '../../app/App';
import routes from '../../app/routes';
import { DataProvider } from '../../shared/DataContext'

export default async ({ location, context, getDataPromiseByDataType }) => {
  let serverData = undefined;
  const matchRoute = routes.find(route => location === route.location.path);
  
  if (
    matchRoute
    && matchRoute.loadData
    && !!matchRoute.loadData.fromServer
  ) {
    const dataPromise = getDataPromiseByDataType(matchRoute.loadData.dataType);
    serverData = await dataPromise();
  }

  const jsx = (
    <StaticRouter location={location} context={context}>
      <DataProvider initialData={serverData}>
        <App />
      </DataProvider>
    </StaticRouter>
  );

  return {
    serverData,
    jsx,
  };
}
