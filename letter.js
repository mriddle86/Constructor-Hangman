// constructor function showing letter or blank
var Letter = function(character) {
	this.character = character;
	this.show = false;
	this.characterRender = function () {
		return if (this.show == false) {"_"} else {this.character}
	};
};
// export of this file
module.exports = letter;