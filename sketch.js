// var txt;
// var counts = {};
// var keys = [];
//
// function preload() {
//   txt = loadStrings('files/rainbow.html');
//
// }
//
// function setup() {
//   var allwords = txt.join("\n");
//   var tokens = allwords.split(/\W+/);
//   for (var i = 0; i < tokens.length; i++) {
//     var word = tokens[i].toLowerCase();
//     if (!/\d+/.test(word)) {
//       //console.log(word);
//       if (counts[word] === undefined) {
//         counts[word] = 1;
//         keys.push(word);
//       } else {
//         counts[word] = counts[word] + 1;
//       }
//     }
//   }
//
//   keys.sort(compare);
//
//   function compare(a, b) {
//     var countA = counts[a];
//     var countB = counts[b];
//     return countB - countA;
//   }
//
//   for (var i = 0; i < keys.length; i++) {
//     var key = keys[i];
//     createDiv(key + " " + counts[key]);
//   }
//
//
//
//   noCanvas();
// }

// $(document).ready(function(){
//
//    $('#content').load("8-story.html");
//
// });

////////////
// var overlap = require('word-overlap');
//
// var sentence1 = 'The Hitchhikings Meetup in Betelgeuse by Ford Prefect';
// var sentence2 = 'The hitchhikings meetups by the hitchhikers';
//
// var reply = overlap(sentence1, sentence2, {
//   ignoreCase: true,
//   minWordLength: 2,
//   ignoreCommonWords: true
// });
//
// console.log(reply);







var txt;
var counts = {};
var keys = [];

function preload() {
  txt = loadStrings("5-story.html");

}

function setup() {
  var allwords = txt.join("\n");
  var tokens = allwords.split(/\W+/);
  // console.log(tokens);
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i].toLowerCase();
    if (!/\d+/.test(word)) {
      //console.log(word);
      if (counts[word] === undefined) {
        counts[word] = 1;
        keys.push(word);
      } else {
        counts[word] = counts[word] + 1;
      }
    }
  }

  keys.sort(compare);

  function compare(a, b) {
    var countA = counts[a];
    var countB = counts[b];
    return countB - countA;
  }

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    createDiv(key + " " + counts[key]);
    console.log(countA);
  }



  noCanvas();
}
//////////


// var txt;
//
// function preload() {
//   txt= loadStrings('8-story.html');
//
// }
//
// function setup() {
//   var allwords = txt.join('\n');
//   var tokens = allwords.split(/\W+/);
//   console.log(tokens);
//
//   noCanvas();
// }





//////////



// function myFunction() {
//   $('#content').load("98-story.html");
// }




// var fs = require('fs');
//
// fs.readFile('rainbow.txt', function (err, data) {
//                     if (err) throw err;
//
//     console.log(data);
// });
