//storing dependencies in variables
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var port = 3000;
var app = express();

// app.get('/wikipedia', function(req, res) {
//
//   var url = 'https://en.wikipedia.org/wiki/Dinosaur';
//
//   request(url, function(error, response, html) {
//     if (!error) {
//
//       var wiki_data = {
//         title: '',
//         img: '',
//         paragraph: ''
//       };
//
//       var $ = cheerio.load(html);
//
//       $('#content').filter(function() {
//         wiki_data.title = $(this).find('h3').text();
//         wiki_data.img = $(this).find('img').attr('src');
//       });
//
//       res.send(wiki_data);
//
//     }
//   });
// });
//
// app.get('/imdb', function(req, res) {
//
//   var url = 'https://www.imdb.com/chart/top';
//
//   request(url, function(error, response, html) {
//     if (!error) {
//
//       var imdb_data = []
//
//       var $ = cheerio.load(html);
//
//       $('.lister').filter(function() {
//         $(this).find('tr').each(function(i, element) {
//
//           imdb_data[i] = "'" + $(this).find('img').attr('src') + "'";
//
//         });
//       });
//
//       res.send(imdb_data);
//       fs.writeFile('imdb_output.js', "var imdb_output = [" + imdb_data + "]", function(error){
//         console.log("file is written successfully");
//       });
//     }
//   });
//
// });


///////////////////////////////

var guten_data_urls = [];

app.get('/guten', function(req, res) {

  var url = 'https://www.gutenberg.org/browse/scores/top';

  request(url, function(error, response, html) {
    if (!error) {

      var $ = cheerio.load(html);

      $('h2#books-last1 + ol').filter(function() {
        $(this).find('a').each(function(i, element) {
          // guten_data[i] = $(this).text();
          // guten_data[i] = "http://www.gutenberg.org/files/" + "'" + $(this).attr('href') + "'";
          var bookNumber = $(this).attr('href').substring(8);
          // var bookNumber2 = str.substring(0);
          guten_data_urls[i] = "http://www.gutenberg.org/files/" + bookNumber + "/" + bookNumber + "-h/" + bookNumber + "-h.htm";
        });
      });

      res.send(guten_data_urls);




      // app.get('/guten2', function(req, res) {
      //
      //   var url2 = "http://www.gutenberg.org/files/" + bookNumber + "/" + bookNumber + "-h/" + bookNumber + "-h.htm";
      //
      //   request(url, function(error, response, html) {
      //     if (!error) {
      //
      //       var guten_data_urls2 = []
      //
      //       var $2 = cheerio.load(html);
      //
      //       $('h3').filter(function() {
      //         $(this).find('p').each(function(i, element) {
      //           // guten_data[i] = $(this).text();
      //           // guten_data[i] = "http://www.gutenberg.org/files/" + "'" + $(this).attr('href') + "'";
      //           var bookNumber2 = $(this).attr('href')
      //             fs.writeFile('./guten_address2.txt', guten_data_urls2, function(error){
      //               console.log("file is written successfully");
      //             });
      //           }
      //         })
      //       });


      // var url2 = "'" + $(this).attr('href') + "'";
      //
      // request(url2, function(error, response, html) {
      //   if (!error) {
      //
      //     var guten_data = []
      //
      //     var $ = cheerio.load(html);
      //
      //     $('#download + even').filter(function() {
      //       $(this).find('about').each(function(i, element) {
      //         // guten_data[i] = $(this).text();
      //         guten_data[i] = "'" + $(this).attr('href') + "'";
      //       });
      //     });
      //
      //     res.send(guten_data);
      // fs.writeFile('guten_output.js', "var guten_output = [" + guten_data + "]", function(error){
      //   console.log("file is written successfully");
      // });
      //
      //   }
      //
      // });

    }

  });
});


/////===================================

// app.get('/books', function(req, res){
//   // var url = 'http://www.gutenberg.org/files/84/84-h/84-h.htm';
//
//   // guten_data_urls.forEach(function(url){
//   //   request({
//   //     url: url,
//   //     json: true
//   //   }, function(err, res, body) {
//   //     if(!error) {
//   //       fs.writeFile('./guten_address.html', guten_data_urls, function(error){
//   //         console.log("file is written successfully");
//   //       });
//   //     }
//   //   })
//   // });
//   var index = 0;
//
//   guten_data_urls.forEach(function(url){
//
//     request({
//       url: url
//     }, function(error, response, html) {
//       if (!error) {
//
//         var $ = cheerio.load(html);
//
//         var book_data = [];
//         $('body').filter(function() {
//           $(this).find('p').each(function(i, elem){
//             book_data[i] = $(this).text();
//           });
//
//
//
//
//           // $(this).find('p').each(function(i, element) {
//           //
//           //   var bookText= $(this).attr('a').;
//           //
//           // });
//         });
//
//         console.log(book_data);
//
//         fs.writeFile('./' + index + '-story.html', book_data, function(error){
//           console.log("file is written successfully");
//         });
//         index++;
//       }
//     });
//   });
//
// });

////====================================================

// app.get('/titles', function(req, res){
//
//   var index = 0;
//
//   guten_data_urls.forEach(function(url){
//
//     request({
//       url: url
//     }, function(error, response, html) {
//       if (!error) {
//
//         var $ = cheerio.load(html);
//
//         var book_titles = [];
//         $('head').filter(function() {
//           $(this).find('title').each(function(i, elem){
//             book_titles[i] = $(this).text();
//           });
//
//
//         });
//
//         console.log(book_titles);
//
//         fs.writeFile('./' + index + '.html', book_titles, function(error){
//           console.log("file is written successfully");
//         });
//         index++;
//       }
//     });
//   });
//
// });


//////============


app.get('/books', function(req, res){

  var index = 0;

  guten_data_urls.forEach(function(url){

    request({
      url: url
    }, function(error, response, html) {
      if (!error) {

        var $ = cheerio.load(html);

        // var book_titles = [];
        // $('head').filter(function() {
        //   $(this).find('title').each(function(i, elem){
        //     book_titles[i] = $(this).text();
        //   });
        // });

// var book_titles = [];
// if ($('head').find('title').text() === '') {
//   $('body').filter(function() {
//     book_titles[i] = $(this).find('h1').text;
//   });
// } else {
//   $('body').filter(function() {
//     $(this).find('h1').each(function(i, elem) {
//       book_titles[i] = $(this).text();
//     });
//   });
// } else {
//   $('body#h1#i').filter(function() {
//     $(this).find('b').each(function(i, elem) {
//       book_titles[i] = $(this).text();
//     });
//   });
// }
        var book_data = [];
        $('body').filter(function() {
          $(this).find('p').each(function(i, elem){
            book_data[i] = $(this).text();
          });
        });

        console.log(book_data);

        fs.writeFile('./' + index + '2.html', book_titles, function(error){
          console.log("file is written successfully");
        });

        fs.writeFile('./' + index + '-story2.html', book_data, function(error){
          console.log("file is written successfully");
        });
        index++;
      }
    });
  });

});

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
