const legalChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

function Letter(value) {
  this.value = value;
  this.isGuessed = false;
}

Letter.prototype.toString = function() {
  let output = this.isGuessed ? this.value : `_`;
  return output;
};

Letter.prototype.guessLetter = function(guessedLetter) {
  if (guessedLetter === this.value) {
    console.log("hey hey!");
    this.isGuessed = true;
  }
  console.log(guessedLetter, this.value, this.isGuessed);
};

module.exports = Letter;
