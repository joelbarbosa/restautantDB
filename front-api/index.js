const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'resources')));
app.use("/resources", express.static("asset"));

app.get('/', (req, res) => {  
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(3001, () => {
  console.log('Front app listening on port 3001');
});