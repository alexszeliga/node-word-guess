var Letter = require("./letter.js");

function Word(string) {
  this.secretWord = string;
  this.letterArray = [];
  this.createArrayOfLetters = function() {
    var { secretWord, letterArray } = this;
    secretWord.split("").forEach(function(letter) {
      var x = new Letter(letter);
      letterArray.push(x);
    });
    return;
  };
}

module.exports = Word;
