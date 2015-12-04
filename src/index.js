var PORT = 8080;

var express = require('express');
var app = express();
var htdocs = require('./htdocs.js');

for (var path in htdocs) {
    app.get(path, htdocs[path]);
}

console.log('listening on %d ...', PORT);
app.listen(PORT);
