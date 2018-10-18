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
    this.isGuessed = true;
  }
};

module.exports = Letter;
