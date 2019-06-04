import React from 'react';
import { renderToString } from 'react-dom/server';

export default function render() {
  const content = renderToString(
    <div>
      <h2>I am from the server</h2>
      <button onClick={() => console.log('AAAAAAAYYYYYY!')}>
        Botonsito
      </button>
    </div>
  );

  return content;
}
