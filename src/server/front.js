import { Router } from 'express';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import path from 'path';
import setHtml from './utils/setHtml';
import getServerProviders from './utils/getServerProviders';

const router = Router();

router.get('*', (req, res) => {
  // Just in case u need the server stats:
  // const serverStatsFile = path.resolve('./build/loadable-stats.json');
  // const serverExtractor = new ChunkExtractor({
  //   statsFile: serverStatsFile,
  // });

  const browserStatsFile = path.resolve('./public/build/loadable-stats.json');
  const browserExtractor = new ChunkExtractor({
    statsFile: browserStatsFile,
    publicPath: '/public/build/',
  });
  
  // ROUTER
  const location = req.url;
  const context = {};
  const jsx = getServerProviders({ location, context });

  // Redirects
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  }
  
  // Loadable Components
  const jsxWithCollectedChunks = browserExtractor.collectChunks(jsx);
  const content = renderToString(jsxWithCollectedChunks);
  const scriptTags = browserExtractor.getScriptTags();

  const html = setHtml({ content, scriptTags });

  res.set('content-type', 'text/html');
  res.end(html);

  // Streams does not support preloading...
  // const collectChunks = extractor.collectChunks(jsx);
  // const stream = renderToNodeStream(collectChunks);
  // const scriptTags = extractor.getScriptTags();
  // res.write('<html><head><title>Test</title></head><body>');
  // stream.pipe(res, { end: false });
  // stream.on('end', () => res.end(`${scriptTags}</body></html>`));
});

export default router;
