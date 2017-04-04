var express     = require('express');
var app         = express();
var port        = process.env.PORT || 3030;
var path        = require('path');

app.set('port', (port));

app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, '')));

var server = app.listen(app.get('port'), function() {
var port = server.address().port;

console.log('App Started On Port:' + port);
});