// run `node index.js` in the terminal

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, (err) => {
  if (err) console.log('unable to statrt server');
  console.log('Server started at 3000');
});
