//storing dependencies in variables
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var port = 3000;
var app = express();

app.get('/wikipedia', function(req, res) {

  var url = 'https://en.wikipedia.org/wiki/Dinosaur';

  request(url, function(error, response, html) {
    if (!error) {

      var wiki_data = {
        title: '',
        img: '',
        paragraph: ''
      };

      var $ = cheerio.load(html);

      $('#content').filter(function() {
        wiki_data.title = $(this).find('h3').text();
        wiki_data.img = $(this).find('img').attr('src');
      });

      res.send(wiki_data);

    }
  });

});



app.get('/imdb', function(req, res) {

  var url = 'https://www.imdb.com/chart/top';

  request(url, function(error, response, html) {
    if (!error) {

      var imdb_data = []

      var $ = cheerio.load(html);

      $('.lister').filter(function() {
        $(this).find('tr').each(function(i, element) {

          imdb_data[i] = "'" + $(this).find('img').attr('src') + "'";

      });
      });

      res.send(imdb_data);
      fs.writeFile('imdb_output.js', "var imdb_output = [" + imdb_data + "]", function(error){
        console.log("file is written successfully");
      });

    }
  });

});

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
