var express = require('express');
var exphbs  = require('express-handlebars');
const path = require("path");
 
 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "/Public")));

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/GetInfo/', function(req, res){

});

console.log('reee');
 
app.listen(3000);