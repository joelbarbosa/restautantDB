import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import Config from '../config/config.js';
import fs from 'fs';
import { Logger as log } from 'console4color';

const app = express();

log.info("port " + Config.port);

app.set('port_server-api', Config.port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

fs.readdirSync('./lib/controllers').forEach(function(file) {  
  if(file.substr(-3) == '.js') {
  	const route = require('./controllers/' + file);
  	route.controllers(app);
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// app.get('/', (req, res) => {
//   res.status(200).json({ name: 'tobi' });
// });

// app.listen(3000, () => {
  
// });