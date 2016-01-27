
var words = ["hello","goodbye", "marmalade"]
var puzzleArray = [];
var count = 0;
//generates random word from words array and splits the characters up in its own array called wordSplit//

function getRandomWord(min, max) {
var randomWordIndex = Math.floor(Math.random() * (max - min)) + min;
  var word = words[randomWordIndex];
  var wordSplit = word.split('');
  return wordSplit;
}

//creates an array of blanks, with the number of blanks based on the random word's length//

var blankMaker = function(num) {

  for (var i = 0; i < num; i++) {
    puzzleArray.push("_");
}
  return puzzleArray;
}

//finds user input letter in the wordSplit and returns indexes of all matches. Then replaces matching indexes on puzzleArray with the guessed letter//

var letterQuest = function(source, find){
  for (var i = 0; i <= source.length; ++i) {
    if (source.substring(i, i + find.length) == find) {
      puzzleArray[i] = find;
    }
  }
  if (puzzleArray.indexOf(find) === -1) {
    count = count - 1;
  }
  return puzzleArray;
  }




// User Interface Logic
// $(document).ready(function() {
//   $("form#IDselector").submit(function(event) {
//     // variables and shit go here, bitch!
//
//     // link your muthafuckin' variables to yo bad-ass bidness logic function, Yo!
//
//     // Make shit happen here...BITCH!
//
//     // Muthafuckin' variables connect to your output down here hommie.
//
//     // Show me some money, hunny, and reveal that hiddin fine shit you got stashed.
//
//     // It's all good baby.'
//     event.preventDefault();
//   });
// });
