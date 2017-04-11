import express from 'express';
const app = express();

app.get('/', function(req, res) {
  res.send('Hello ES6, express');
});

app.listen(3000, function() {
  console.log('Exemple app');
});