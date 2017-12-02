// ~~~~~~~~~~~~~~~~~~Basic Outline~~~~~~~~~~~~~~~~~
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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Set score
var score = 0;
document.getElementById("wins").innerHTML = score;
// Create list of words and letters
var wordList = ["dog", "bird", "hedgehog", "calico cat"];
var allowedLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Create variables
var remaining = 10;
var alreadyGuessed = [];
var chosenWord;
var progressWord;
var arrayWord;

window.onload = reset();

function reset() {

	// Number of guesses left
	remaining = 10;
	document.getElementById("remaining").innerHTML = remaining;

	// Empty array for guessed letters
	alreadyGuessed = [];
	document.getElementById("guessed").innerHTML = alreadyGuessed;

	// Computer randomly selects a word
	chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

	// Change the word into an array of letters
	arrayWord = chosenWord.split("");
	console.log(arrayWord);

	// Create blanks that will be filled with correct gueses; fill in any spaces
	progressWord = [];

	for (var i = 0; i < arrayWord.length; i++) {
		if (arrayWord[i] === " ") {
	    	progressWord.push("&nbsp");
	  	}
	  	else {
	    	progressWord.push("_");
	  	}
	}

	// Create display word with spaces instead of commas
	var displayWord = progressWord.join(" ")
	document.getElementById("display").innerHTML = displayWord;
}


// When key is pressed
document.onkeyup = function(event) {

	// If won or lost, stop allowing guesses
	if (progressWord.indexOf("_") === -1 || remaining === 0) {
		return;
	}

	// If no win/loss yet, save key as user guess
	else {
		var userGuess = event.key;
	  
	  	// Only if pressed key is an allowed letter
	  	if (allowedLetters.indexOf(userGuess) != -1) {

	    	// Check if guessed letter is in the word

	    	// If YES:
	    	if (arrayWord.indexOf(userGuess) != -1) { 

	    	  	// Replace each correct letter in progress word
	    	  	for (j = 0; j < arrayWord.length; j++) {
	       		if (userGuess === arrayWord[j]) {
	          		progressWord.splice(j, 1, userGuess);

	          		// Get rid of commas for the display word and display it
	          		displayWord = progressWord.join(" ");
	          		document.getElementById("display").innerHTML = displayWord;

	          		// If full word is done, increase score and display score and win
	          		if (progressWord.indexOf("_") === -1) {
	            		score++;
	            		document.getElementById("wins").innerHTML = score;
	            		document.getElementById("remaining").innerHTML = "You got it!";
	          		}
	        		}
	      	}
	    	}

	    	// If NO:
	    	else {
	      	// If not already in alreadyGuessed array, add it
	      	if (alreadyGuessed.indexOf(userGuess) === -1) {
	        		alreadyGuessed.push(userGuess);

	        		// Get rid of commas for display guesses and display it
	        		var displayAlreadyGuessed = alreadyGuessed.join(" ");
	        		document.getElementById("guessed").innerHTML = displayAlreadyGuessed;

	        		// Subtract one from counter and display it
	        		remaining--;
	        		document.getElementById("remaining").innerHTML = remaining;

	        		// If run out of guesses
	        		if (remaining === 0) {
	        			document.getElementById("remaining").innerHTML = "Out of guesses!";
	        		}
	      	}
	    	}
	  	}
	}
}





// TO DO:

// If guess full word, show pic/play song/etc
