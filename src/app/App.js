import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import loadable from '@loadable/component';
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
  return routes.map(route => {
    const RouteComponent = route.component;

    return (
      <Route
        key={route.name}
        path={route.location.path}
        exact={route.location.exact}
        component={() => <RouteComponent />}
      />
    );
  });
}

function RoutesListComponent({ name, location, component }) {
  const RouteComponent = () => component;
  
  return (
    <Route
      key={name}
      path={location.path}
      exact={location.exact}
      component={<RouteComponent />}
    />
  );
}
