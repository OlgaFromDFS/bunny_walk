const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

let counter = 0;

app.get('/', (req, res) => {
  res.send(String(counter));
});

app.post('/', (req, res) => {
  counter++;
  res.send(String(counter));
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
