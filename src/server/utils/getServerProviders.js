import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from '../../app/App';
import routes from '../../app/routes';
import { DataProvider } from '../../shared/DataContext'

export default async ({ location, context, getDataAsync }) => {
  let serverData = undefined;
  const route = routes.find(route => location === route.location.path);
  
  if (
    route
    && route.data !== undefined
    && !!route.data.fromServer
  ) {
    const data = await getDataAsync(route.loadData.dataType)();
    serverData = route.data.normalize(data);
  }
  // if (
  //   matchRoute
  //   && matchRoute.loadData
  //   && !!matchRoute.loadData.fromServer
  // ) {
  //   const dataPromise = getDataPromiseByDataType(matchRoute.loadData.dataType);
  //   serverData = await dataPromise();
  // }

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
