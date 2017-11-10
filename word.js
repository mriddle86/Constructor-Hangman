// import of linked constructor file
var Letter = require('./letter.js');


function Word(selected) {
// storing the string and the collection letters
	this.selected = selected;
	this.letterGroup = [];
	this.found = false;

// add new letters to the collection of letters
	this.getLetter = function() {
		for (var i = 0, i < this.selected.length, i++) {
			this.letterGroup.push(new letter(this.selected[i]));
		}
	};

	}
// the current word/house is found
	this.findWord = function() {
		this.found = this.letterGroup.every(function(currentLetter) {
			return currentLetter.show;
		});
		return this.found;
	};

// looks through letters to see if guessed letter matches
	this.verify = function(guessLetter) {
		var theReturn = 0;

		for (var i = 0; i < this.letterGroup.length; i++) {
			if (this.letterGroup[i].character == guessLetter) {
				this.letterGroup[i].show = true;
				theReturn++;
			}
		}
		// if it matches letter is shown
		return theReturn;
	};

// renders letters if they are found
	this.wordRender = function() {
		var string = '';
		for (var i = 0; i < this.letterGroup.length; i++) {
			string += this.letterGroup[i].characterRender();
		}
		return string;
	};

}

module.exports = Word;