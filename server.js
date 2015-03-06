'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);

require('./server/socket')(http);
require('./server/api')(app);

var config = require('./server/config');
http.listen(config.express.port, function () {
  console.log('✔ App listening on port', config.express.port);
});
