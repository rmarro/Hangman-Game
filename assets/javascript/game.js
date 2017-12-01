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



// Set counter and score
var remaining = 10;
document.getElementById("remaining").innerHTML = remaining;

var score = 0;
document.getElementById("wins").innerHTML = score;

// Create list of words and letters
var wordList = ["dog", "hedgehog", "big bird"];

var allowedLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Empty array for guessed letters
var alreadyGuessed = [];

// Computer randomly selects a word
var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

// Change the word into an array of letters
var arrayWord = chosenWord.split("");
console.log(arrayWord);

// Create blanks that will be filled; fill in any spaces
var progressWord = [];

for (var i = 0; i < arrayWord.length; i++) {
	if (arrayWord[i] === " ") {
    	progressWord.push("&nbsp");
  	}
  	else {
    	progressWord.push("_");
  	}
}

// Create display with spaces instead of commas
var displayWord = progressWord.join(" ")
document.getElementById("display").innerHTML = displayWord;

// When key is pressed, save that as guessed letter
document.onkeyup = function(event) {
	var userGuess = event.key;
  
  // Only if pressed key is an allowed letter
  if (allowedLetters.indexOf(userGuess) != -1) {
    	// Check if guessed letter is in the word
    	// If yes
    	if (arrayWord.indexOf(userGuess) != -1) { 
    	  // Replace each correct letter in progress word
    	  for (i=0; i < arrayWord.length; i++) {
       		if (userGuess === arrayWord[i]) {
          		progressWord.splice(i, 1, userGuess);
          		// Get rid of commas for the display word
          		displayWord = progressWord.join(" ");
          		document.getElementById("display").innerHTML =                 displayWord;
          		// If full word is done, increase score
          		if (progressWord.indexOf("_") === -1) {
            		score++;
            		document.getElementById("wins").innerHTML = score;
          		}
        		}
      	}
    	}

    	// If no
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
        			document.getElementById("remaining").innerHTML = "Out of guesses!"
        		}
      	}
    	}
  	}
}