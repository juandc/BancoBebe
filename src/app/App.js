import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
// import loadable from '@loadable/component';
import { DataContext } from '../shared/DataContext'
import routes from './routes';

export default function App(props) {
  return (
    <Switch>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <RoutesList routes={routes} />
      </>
    </Switch>
  );
}

function RoutesList({ routes }) {
  const [data, setData] = React.useContext(DataContext);

  return routes.map(route => {
    // const RouteComponent = route.component;

    return (
      <Route
        key={route.name}
        path={route.location.path}
        exact={route.location.exact}
        component={() => <RoutesListComponent {...{data, setData, route}} />}
      />
    );
  });
}

function RoutesListComponent({ route, data, setData }) {
  console.log(route, data)

  React.useEffect(() => {
    if (
      (!!route.data.fromBrowser.loadIfNoInitialData && data === undefined)
      || (!!route.data.fromBrowser.iDontCareJustLoad)
    ) {
      setData(route.data);
    }
  }, [route]);

  return <p>route</p>
}

RoutesListComponent = React.memo(RoutesListComponent);
