import React from 'react';
import { renderToString } from 'react-dom/server';
// import App from '../../App';

export default function render() {
  const content = renderToString(
    <div>
      <h2>I am from one server</h2>
      <button onClick={() => console.log('AAAAAAAYYYYYY!')}>
        Botonsito boniiiitoooo aayayayayayay!!
      </button>
    </div>
  );

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <div id="app">${content}</div>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `;
  
  return html;
}
