import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
// import loadable from '@loadable/component';
import { useData } from '../shared/DataContext'
import routes from './routes';

export default function App(props) {
  return (
    <Switch>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <RouteList routes={routes} />
      </>
    </Switch>
  );
}

function RouteList({ routes }) {
  return routes.map(route => {
    return (
      <Route
        key={route.name}
        path={route.location.path}
        exact={route.location.exact}
        component={() => <RouteListComponent {...{route}} />}
      />
    );
  });
}

function RouteListComponent({ route }) {
  const [pageData] = useData({ route });
  console.log(pageData);

  if (!pageData) return <p>Loading...</p>;
  return <p>la</p>;
}

RouteListComponent = React.memo(RouteListComponent);
