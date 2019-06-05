import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
const path = require('path');
import App from '../../app/App';

export default function render(req, res, err) {
  // const serverStatsFile = path.resolve('./build/loadable-stats.json');
  // const serverExtractor = new ChunkExtractor({
  //   statsFile: serverStatsFile,
  // });

  const browserStatsFile = path.resolve('./public/build/loadable-stats.json');
  const browserExtractor = new ChunkExtractor({
    statsFile: browserStatsFile,
    publicPath: '/public/build/',
  });
  
  const jsx = <App />;

  const jsxWithCollectedChunks = browserExtractor.collectChunks(jsx);
  const content = renderToString(jsxWithCollectedChunks);
  const scriptTags = browserExtractor.getScriptTags();

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div id="app">${content}</div>
      ${scriptTags}
    </body>
    </html>
  `;

  res.set('content-type', 'text/html');
  res.end(html);

  // const collectChunks = extractor.collectChunks(jsx);
  // const stream = renderToNodeStream(collectChunks);
  // const scriptTags = extractor.getScriptTags();

  // res.write('<html><head><title>Test</title></head><body>');
  
  // stream.pipe(
  //   res,
  //   { end: false },
  // );

  // stream.on('end', () =>
  //   res.end(`${scriptTags}</body></html>`),
  // );
}
