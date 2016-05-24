var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var authCheck = jwt({
  secret : new Buffer('roX5d0qNjLdPaIcv8bkbOb-djiaFvyGJ3Dxx0pu91g5DGBCcW72ybSshQ4qA7vaW', 'base64'),
  audience: 'wd8jvzvEuVO5U8yiQTIdgbB9gip7wTz5'
})

app.get('/api/public', function(req, res){
  res.json({ message: 'Hello from a public endpoint ! You dont need to be authenticated to see this !'});
});

app.get('/api/private', authCheck, function(req, res){
  res.json({ message: 'Hello from a public endpoint ! You Do need to be authenticated to see this !'});
});

app.listen(3001);
console.log('Listening on port 3001');


//
//
// var express = require('express');
// var app = express();
// var jwt = require('express-jwt');
// var cors = require('cors');
//
// app.use(cors());
//
// var authCheck = jwt({
//   secret: new Buffer('roX5d0qNjLdPaIcv8bkbOb-djiaFvyGJ3Dxx0pu91g5DGBCcW72ybSshQ4qA7vaW', 'base64'),
//   audience: 'wd8jvzvEuVO5U8yiQTIdgbB9gip7wTz5'
// });
//
// app.get('/api/public', function(req, res) {
//   res.json({ message: "Hello from a public endpoint! You don't need to be authenticated to see this." });
// });
//
// app.get('/api/private', authCheck, function(req, res) {
//   res.json({ message: "Hello from a private endpoint! You DO need to be authenticated to see this." });
// });
//
// app.listen(3001);
// console.log('Listening on http://localhost:3001');
