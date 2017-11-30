// Create list of words
// Computer randomly selects a word
// Display blanks for each letter of the word

// When key is pressed, save that as guessed letter
// Check if guessed letter is in the word
	// If yes, replace each one with letter
	// If no, add letter to wrong guesses 
	// If no, decrease guesses remaining by 1
		// If already guessed, no action

// If guess full word, increase wins by 1
// If guess full word, show pic/play song/etc

// If run out of guesses, game over

// If win or lose, randomly choose new word
// If win or lose, reset guesses remaining

// ~~~~~~~~~~~~~~~~~~~~~~~



// Create list of words
var wordList = ["dog", "bird", "hedgehog"];

// Computer randomly selects a word
var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

// Change the word into an array of letters
var arrayWord = chosenWord.split("");

console.log(arrayWord);

// Display blanks for each letter of the word
var displayWord = []

for (var i = 0; i < arrayWord.length; i++) {
	displayWord.push("_ ");
}

document.getElementById("display").innerHTML = displayWord;


// When key is pressed, save that as guessed letter
document.onkeyup = function(event) {
	var userGuess = event.key;

	for (i=0; i < arrayWord.length; i++) {
		// Check if guessed letter is in the word
		if (userGuess === arrayWord[i]) {
			console.log(userGuess);

			// Replace display letter with userGuess
			displayWord.splice(i, 1, userGuess);
			document.getElementById("display").innerHTML = displayWord;
		}
	}
}






	// If yes, replace each one with letter
	// If no, add letter to wrong guesses 
	// If no, decrease guesses remaining by 1
		// If already guessed, no action

// If guess full word, increase wins by 1
// If guess full word, show pic/play song/etc

// If run out of guesses, game over

// If win or lose, randomly choose new word
// If win or lose, reset guesses remaining