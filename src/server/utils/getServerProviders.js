import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from '../../app/App';
import routes from '../../app/routes';

export default async ({ location, context, getDataPromiseByDataType }) => {
  let initialData = undefined;
  
  const matchRoute = routes.find(
    route => location === route.location.path
  );
  
  if (
    matchRoute
    && matchRoute.loadData
    && !!matchRoute.loadData.fromServer
  ) {
    const dataPromise = getDataPromiseByDataType(matchRoute.loadData.dataType);
    const data = await dataPromise();
    initialData = data;
  }

  const jsx = (
    <StaticRouter location={location} context={context}>
      <App initialData={initialData} />
    </StaticRouter>
  );

  return {
    initialData,
    jsx,
  };
}
