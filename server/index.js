var express = require('express');
var bodyParser = require('body-parser');
let axios = require('axios');
let algoliasearch = require('algoliasearch');

var items = require('../database-mysql');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

var client = algoliasearch('E8CLMTQDE6', '29a46142a1236fa5e7289934f92a3412');
var index = client.initIndex('algolia');
console.log(index)
app.listen(8080, function() {
  console.log('listening on port 8080!');
});
