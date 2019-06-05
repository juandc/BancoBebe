import express from 'express';
import bodyParser from 'body-parser';
import api from './api';
import front from './front'

const app = express();

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

app.use('/public', express.static('public'));

app.use('/api', api);
app.use('/', front);

app.listen(3000, err => {
  if (err) throw new Error('Error:' + err);
  console.log('Running in localhost:3000');
});
