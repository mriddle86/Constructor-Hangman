
var Letter = require('./letter.js');

function Word(selected) {
	this.selected = selected;
	this.letterGroup = [];
	this.found = false;

	this.getLetter = function() {
		for (var i = 0, i < this.selected.length, i++) {
			this.letterGroup.push(new letter(this.selected[i]));
		}
	};

	}

	this.findWord = function() {
		this.found = this.letterGroup.every(function(currentLetter) {
			return currentLetter.show;
		});
		return this.found;
	};

	this.verify = function(guessLetter) {
		var theReturn = 0;

		for (var i = 0; i < this.letterGroup.length; i++) {
			if (this.letterGroup[i].character == guessLetter) {
				this.letterGroup[i].show = true;
				theReturn++;
			}
		}
		return theReturn;
	};

	this.wordRender = function() {
		var string = '';
		for (var i = 0; i < this.letterGroup.length; i++) {
			string += this.letterGroup[i].characterRender();
		}
		return string;
	};

}

module.exports = Word;