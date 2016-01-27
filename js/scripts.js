var Game = {
  guessedLetters: [] ,
  score: 0,
}


var words = ["hello","goodbye", "marmalade"]
var wordSplit = [];
var puzzleArray = [];
var score = 0;
//generates random word from words array and splits the characters up in its own array called wordSplit//

function getRandomWord() {
var randomWordIndex = Math.floor(Math.random() * (3 - 0)) + 0;
  var word = words[randomWordIndex];
  wordSplit = word.split('');
    for (var i = 0; i < wordSplit.length; i++) {
      puzzleArray.push("_");
    }
    return puzzleArray;
}


// var test = function(wordSplit) {
//   var word = getRandomWord();
//   var length = word.length;
//   puzzleArray = blankMaker(length);
//   return puzzleArray;
// }


//creates an array of blanks, with the number of blanks based on the random word's length//


// var blankMaker = function(num) {
//   for (var i = 0; i < num; i++) {
//     puzzleArray.push("_");
// }
//   return puzzleArray;
// }

//finds user input letter in the wordSplit and returns indexes of all matches. Then replaces matching indexes on puzzleArray with the guessed letter//

var letterQuest = function(wordSplit, searchLetter){
  for (var i = 0; i <= wordSplit.length; ++i) {
    if (wordSplit.slice (i, i + searchLetter.length) == searchLetter) {
      puzzleArray[i] = searchLetter;
    }
  }
  if (puzzleArray.indexOf(searchLetter) === -1) {
    score = score - 1;
  }
  return puzzleArray;
  }





// checks score for duration of game and breaks when the losing condition is met.//

// var scoreCounter = function(){
//     for (){
//       if( score === -6){
//         return true;
//       //   alert("you lose");
//       //   break;
//       // }else run letterquest
//       }
//
//       if (puzzleArray.indexOf("_") === -1) {
//       alert("you win");
//       break;
//     }else run letterquest
//   }
//
// var scoreCounter = function() {
//   while (count > -6)
//   return letterQuest();
// }



// User Interface Logic
$(document).ready(function() {
  getRandomWord();
  $("form#hangman").submit(function(event) {
    debugger;
    var searchLetter = $("input#letter").val();
    var searchLetter = searchLetter.toLowerCase();
    Game.guessedLetters.push(searchLetter);
    var results = letterQuest(wordSplit, searchLetter);
    console.log(results);
    console.log(wordSplit);
    console.log(Game.guessedLetters);
    event.preventDefault();
  });
});
