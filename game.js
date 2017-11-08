//A random word (of countries) is selected from the wordsGuess array and exported
var wordsGuess = ["Philippines", "Azerbaijan", "Vietnam", "Kazakhstan", "Macau", "Oman", "Papau New Guinea", "Seychelles", "Finland", "Brazil", "Djibouti", "Turkey"];
var randomIndex = Math.floor(Math.random() * wordsGuess.length);
var randomWord = wordsGuess[randomIndex];

// Export word
exports.randomWord = randomWord;