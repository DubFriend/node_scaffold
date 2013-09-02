var express = require('express'),
    app = express(),
    IP_ADDR = "127.0.0.1",
    PORT = 8080;

app.listen(PORT, IP_ADDR, function() {
    console.log('listening on port ' + PORT);
});

//set the root directory for statically served content (css, js, images, etc)
app.use(express.static(__dirname + '/public'));

//parse body from post requests.
app.use(express.bodyParser());

//setup rendering engine
app.set('views', __dirname + '/view');
//https://github.com/donpark/hbs
app.set('view engine', 'hbs');

exports = module.exports = app;
