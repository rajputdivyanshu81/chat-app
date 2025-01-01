import express from 'express';

const app = express();

app.get('/signin', (req, res) => {
  res.send('Hello World!');
});
app.get('/signup', (req, res) => {
  res.send('Hello World!');
});
app.get('/chat', (req, res) => {
  res.send('Hello World!');
});

app.listen(3001, () => {
  console.log('Server is running on port 3000');
});