var express = require('express');
var app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/'));

app.listen(app.get('port'), function() {
    console.log('Your files will be served through this web server at http://127.0.0.1:' + app.get('port'));
});

console.log('the server is started.');
