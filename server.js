var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var exphbs = require('express-handlebars');

var routes = require('./controllers/burger_controller');

var app = express();
var PORT = process.env.PORT || 8080;

app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use('/', routes);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});