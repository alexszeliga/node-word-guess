var Letter = require("./letter.js");

function Word(string) {
  this.secretWord = string;
  this.arrayOfLetters = function() {
    var { secretWord } = this;
    var arrayOfLetters = [];
    secretWord.split("").forEach(function(letter) {
      var x = new Letter(letter);
      arrayOfLetters.push(x);
    });

    return arrayOfLetters;
  };
}

module.exports = new Word();
