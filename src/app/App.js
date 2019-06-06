import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import loadable from '@loadable/component';
import routes from './routes';

export default function App(props) {
  console.log(props)
  const [initialData, setData] = React.useState(props.initialData);
  
  // useEffect(() => {}, []) === browser
  React.useEffect(() => {
    if (initialData === undefined) {
      setTimeout(() => {
        setData('data from client')
      }, 3000)
    }
  }, []);

  return (
    <Switch>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {initialData || 'loading data'}

        {routes.map(route => {
          // route.loadData.getData(props.dataTypes)
          
          return (
            <Route
              key={route.name}
              path={route.location.path}
              exact={route.location.exact}
              component={route.component}
            />
          );
        })}

        {/* <Route path='/' component={() => <h2>Home</h2>} exact />
        <Route path='/about' component={() => <h2>About</h2>} /> */}
      </>
    </Switch>
  );
  // return (
  //   <>
  //     <h2>Banco Bebe</h2>
  //     <p>
  //       De hecho, aquí debería ir el Router... 🙈
  //       El Switch. El Browser o Static Router va en el render de cada "side"... 🤔
  //     </p>
  //   </>
  // );
}
