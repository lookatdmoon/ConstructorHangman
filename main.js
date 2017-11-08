// Hangman command-line game using constructor functions.
// Mhirra Yung NU0814

// Required files and variables
var gameConstructor = require("./game.js");
var wordConstructor = require("./word.js");
var letterConstructor = require("./letter.js");

var randomWord = gameConstructor.randomWord;
var myWord = new wordConstructor.wordConstructor(gameConstructor.randomWord);
var letterGuessed;
var maxGuess = 15;
var inquirer = require("inquirer");

exports.letter;

// Function to  make User guess via prompt.
function makeGuess(){
    console.log(myWord.toString());

    if(myWord.userGuesses.length >= maxGuess){
        console.log("You have NO more guesses left! You lose!");

        return;
    }

    inquirer.prompt([{
        name: "letter",
        type: "text",
        message: "Hangman time - World Traveler edition! Please start by entering enter a letter",
    }]).then(function(letterInput){
        var letter = letterInput.letter;
        myWord.findLetter(letter);

        if (myWord.isComplete()){
            console.log("That is correct! The word is " + myWord.toString() + "!");
            return;
        }

        console.log("------Next guess------");
        console.log("You have " + (maxGuess - myWord.userGuesses.length) + " guesses left!  Make your next move wisely!");
        makeGuess();
        });
}

//Starts the game:
makeGuess();//
 