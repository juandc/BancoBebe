import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const result = renderToString(<div className="holis!" children={<p>Kiuvo</p>} />);
  res.send(result);
});

app.listen(3000, err => {
  if (err) throw new Error('Error:' + err);
  console.log('Running in localhost:3000');
})
