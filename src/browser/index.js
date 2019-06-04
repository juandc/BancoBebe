import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../App';

const Browser = (
  <div>
    <h2>I am from the client!</h2>
    <button onClick={() => console.log('AAAAAAAYYYYYY!')}>
      AAAAAAAYYYYYY botonsito!
    </button>
  </div>
);

ReactDOM.hydrate(Browser, document.getElementById('app'));
