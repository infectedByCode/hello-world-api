import express from 'express';
const app = express();

app.get('/hello', (req, res, next) => {
  return res.json({ msg: 'hello world' });
});

app.all('*', (req, res, next) => {
  return res.status(404).json({
    msg: 'not found'
  });
});

app.listen(3000, () => {
  process.stdout.write('running docker sample');
});
