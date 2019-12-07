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




///1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111


// var txt;
// var counts = {};
// var keys = [];
//
// function preload() {
//   txt = loadStrings("typeset.html");
//
// }
//
// function setup() {
//   var allwords = txt.join("\n");
//   var tokens = allwords.split(/\W+/);
//   console.log(tokens);
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
//
//     if(counts[key] <= 300 && counts[key] >= 50) {
//
//       for(var jndex = 0; jndex < counts[key]; jndex++) {
//         // createDiv(key + " " + counts[key]);
//         createDiv(key).addClass('adaski');
//         // console.log(key);
//       }
//
//     }
//
//   }
//
//   noCanvas();
// }
//

//////////22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

// var txt;
// var counts = {};
// var keys = [];
//
// function preload() {
//   txt = loadStrings('aaa.html');
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


//////333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333

// var txt = [];
// var counts = {};
// var keys = [];
// var allwords = [];
//
// var files = ['13-story.html','12-story.html','14-story.html','16-story.html','15-story.html'];
//
// function preload() {
//   for (var i = 0; i < files.length; i++) {
//     txt[i] = loadStrings(files[i]);
//   }
// }
//
// function setup() {
//   for (var i = 0; i < txt.length; i++) {
//     allwords[i] = txt[i].join("\n");
//   }
//
//   var tokens = allwords[0].split(/\W+/);
//   for (var i = 0; i < tokens.length; i++) {
//     var word = tokens[i].toLowerCase();
//     if (counts[word] === undefined) {
//       counts[word] = {
//         tf: 1,
//         df: 1
//       };
//       keys.push(word);
//     } else {
//       counts[word].tf = counts[word].tf + 1;
//     }
//   }
//
//   var othercounts = [];
//   for (var j = 1; j < allwords.length; j++) {
//     var tempcounts = {};
//     var tokens = allwords[j].split(/\W+/);
//     for (var k = 0; k < tokens.length; k++) {
//       var w = tokens[k].toLowerCase();
//       if (tempcounts[w] === undefined) {
//         tempcounts[w] = true;
//       }
//     }
//     othercounts.push(tempcounts);
//   }
//
//
//
//   for (var i = 0; i < keys.length; i++) {
//     var word = keys[i];
//     for (var j = 0; j < othercounts.length; j++) {
//       var tempcounts = othercounts[j];
//       if (tempcounts[word]) {
//         counts[word].df++;
//       }
//     }
//   }
//
//   for (var i = 0; i < keys.length; i++) {
//     var word = keys[i];
//     var wordobj = counts[word];
//     wordobj.tfidf = wordobj.tf * log(files.length / wordobj.df);
//   }
//
//
//   keys.sort(compare);
//
//   function compare(a, b) {
//     var countA = counts[a].tfidf;
//     var countB = counts[b].tfidf;
//     return countB - countA;
//   }
//
//   for (var i = 0; i < keys.length; i++) {
//     var key = keys[i];
//     createDiv(key + " " + counts[key].tfidf);
//   }
//
//   noCanvas();
// }

/////////44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
var randomNumber = Math.floor(Math.random() * 99) + 3;
var txt = [];
var counts = {};
var keys = [];
var allwords = [];

var files = ['./'+ randomNumber + '-story.html','7-story.html','8-story.html','9-story.html','10-story.html','11-story.html','12-story.html','13-story.html','14-story.html','15-story.html','16-story.html','17-story.html','18-story.html'];

function preload() {
  for (var i = 0; i < files.length; i++) {
    txt[i] = loadStrings(files[i]);
  }
}

function setup() {
  for (var i = 0; i < txt.length; i++) {
    allwords[i] = txt[i].join("\n");
  }

  var tokens = allwords[0].split(/\W+/);
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i].toLowerCase();
    if (counts[word] === undefined) {
      counts[word] = {
        tf: 1,
        df: 1
      };
      keys.push(word);
    } else {
      counts[word].tf = counts[word].tf + 1;
    }
  }

  var othercounts = [];
  for (var j = 1; j < allwords.length; j++) {
    var tempcounts = {};
    var tokens = allwords[j].split(/\W+/);
    for (var k = 0; k < tokens.length; k++) {
      var w = tokens[k].toLowerCase();
      if (tempcounts[w] === undefined) {
        tempcounts[w] = true;
      }
    }
    othercounts.push(tempcounts);
  }



  for (var i = 0; i < keys.length; i++) {
    var word = keys[i];
    for (var j = 0; j < othercounts.length; j++) {
      var tempcounts = othercounts[j];
      if (tempcounts[word]) {
        counts[word].df++;
      }
    }
  }

  for (var i = 0; i < keys.length; i++) {
    var word = keys[i];
    var wordobj = counts[word];
    wordobj.tfidf = wordobj.tf * log(files.length / wordobj.df);
  }


  keys.sort(compare);

  function compare(a, b) {
    var countA = counts[a].tfidf;
    var countB = counts[b].tfidf;
    return countB - countA;
  }


//   for (var i = 0; i < keys.length; i++) {
//     var key = keys[i];
//
//     // console.log(key);
//
//   // console.log(counts[key].tfidf);
//
//     if(counts[key].tfidf >= 20) {
//
//       for(var jndex = 0; jndex < counts[key].tfidf; jndex++) {
//         // createDiv(key + " " + counts[key]);
//         createDiv(key).addClass('adaski');
//       }
//
//     }
//
//   }
//
//   noCanvas();
// }
//


///===========================================
for (var i = 0; i < keys.length; i++) {
  var key = keys[i];

  // if(counts[key].tfidf >= 20){
  //   createDiv(key).addClass('adaski');
  // }

  if(keys.length= 5){
    var div = createDiv( key ).addClass( 'adaski' );
    $( div.elt ).appendTo( $( '#links' ) );
  }

}

noCanvas();
}

$(document).ready(function(){
  $('#container').load('./'+ randomNumber + '.html');
  $('#inittext').load('./'+ randomNumber + '-story.html');

});



// $(function() {
//     $('#info').click(function(){
//         $('#explanation').css('display', 'inline-block');
//         $('#back').css('display', 'inline-block');
//     });
// });

var timesClicked = 0;

$(function() {
  $("#info").click(function() {
  timesClicked++;


  if ( timesClicked % 2 != 0 ) {
    $('#explanation').css('display', 'inline-block');
    $('#back').css('display', 'inline-block');
  } else {
    $('#explanation').css('display', 'none');
    $('#back').css('display', 'none');
  }

  });

});


window.setInterval('refresh()', 30000); 	// Call a function every 10000 milliseconds (OR 10 seconds).

    // Refresh or reload page.
    function refresh() {
        window .location.reload();
    }

    // window.onload = setupRefresh;
    //    function setupRefresh()
    //    {
    //        setInterval("refreshBlock();",3000);
    //    }
    //
    //    function refreshBlock()
    //    {
    //      $('#container').load('./'+ randomNumber + '.html');
    //      $('#inittext').load('./'+ randomNumber + '-story.html');
    //    }








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
