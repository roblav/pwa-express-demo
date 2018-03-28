var nunjucks = require('nunjucks')
var path = require('path')
var express = require('express')
var app = express()

nunjucks.configure(path.join(__dirname, '/views'), {
  autoescape: true,
  cache: false,
  express: app,
  watch: true
})

app.get('/', function (req, res) {
  res.render('index.html')
});

app.listen(3001)
