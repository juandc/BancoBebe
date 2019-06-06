import React from 'react';
import loadable from '@loadable/component';

const AsyncPageWithSSR = loadable(() => import('./WithSSR'), {
  fallback: <div>loading with ssr...</div>,
});
const AsyncPageWithoutSSR = loadable(() => import('./WithoutSSR'), {
  fallback: <div>loading without ssr...</div>,
  ssr: false,
});

export default function App(props) {
  const [name, setName] = React.useState('server');
  const [number, setNumber] = React.useState(1);

  React.useEffect(() => {
    setName('client');
    setNumber(number + 1);
  }, []);
  
  return (
    <div>
      <h2>I am from one {name}</h2>
      <p>{number}</p>
      <button onClick={() => setNumber(number+1)}>
        Botonsito boniiiitoooo aayayayayayay!!
      </button>

      <AsyncPageWithSSR />
      <AsyncPageWithoutSSR />
    </div>
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
