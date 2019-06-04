import express from 'express';
import api from './api';
import front from './front'

const app = express();

app.use(express.static('public'));

app.use('/api', api);
app.use('/*', front);

app.listen(3000, err => {
  if (err) throw new Error('Error:' + err);
  console.log('Running in localhost:3000');
});
