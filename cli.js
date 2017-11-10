var Word = require('./word.js');
var inquirer = require('inquirer');

console.log("Time to play Hangman\nLetter by letter guess name of the great house of Westeros\n\n***********************************************************");

var Game = function(wordBank, wordsRight, guessesLeft, currentHouse) {
	this.wordBank = ["lannister", "stark", "baratheon", "targaryen", "tully", "tyrell", "arryn", "greyjoy", "martell" ],
	this.wordsRight = 0,
	this.guessesLeft = 10,
	this.currentHouse = null,

	this.startGame = function (house) {
		this.resetGuesses();
		this.currentHouse = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
		this.currentHouse.getLetter();
		this.promptUser();
	},

	resetGuesses = function() {
		this.guessesLeft = 10;
	},

	promptUser = function() {
		var user = this;
		inquirer.prompt([
			{
				name: "guessedLetter",
				message: "enter your guess",
				type: "input"
			}
			]).then(function(answer) {
				var guessedLetter = new guessLetter(answer.guessLetter);
				console.log("You Guessed: " + guessedLetter)
			});
			var manyGuessed = user.currentHouse.verify(guessedLetter);

			if (manyGuessed == 0) {
				console.log("wrong");
				user.guessesLeft--;
			} 
			else {
				console.log("correct");
					if(user.currentHouse.findWord()) {
						console.log("you win");
						return;
					}
			}

			console.log("Guesses remaining: " + user.guessesLeft);

			if (user.guessesLeft > 0 && user.currentHouse.found == false) {
				user.promptUser();
			} 
			else if (user.guessesLeft == 0) {
				console.log("game over, correct word ", user.currentHouse.selected);
			}
			else {
				console.log(user.currentHouse.characterRender());
			}

	}
}