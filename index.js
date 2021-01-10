import express from 'express';
const app = express();

app.get('/hello', (req, res, next) => {
  return res.json({ msg: 'hello world' });
});

app.all('*', (req, res, next) => {
  return res.status(400).json({
    msg: 'not found'
  });
});

app.listen(3000, () => {
  console.log('running docker sample');
});
