const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'resources')));
app.use("/resources", express.static("assets"));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use("/app", express.static(__dirname + '/app/'));

app.get('/', (req, res) => {  
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(3001, () => {
  console.log('Front app listening on port 3001');
});