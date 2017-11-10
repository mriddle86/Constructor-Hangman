// constructor function to control showing a letter or blank
var Letter = function(character) {
	this.character = character;
	this.show = false;
	this.characterRender = function () {
		return if (this.show == false) {"_"} else {this.character}
	};
};
// the export of this constructor file
module.exports = letter;