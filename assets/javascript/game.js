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
// If guess full word, show pic

// If run out of guesses, game over

// If win or lose, cannot keep guessing

// Play again randomly chooses new word and resets (not score)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Create variables 
var chosenWord;
var arrayWord;
var progressWord;
var remaining = 10;
var alreadyGuessed = [];

// Save all getElementById as variables
var getRemaining = document.getElementById("remaining")
var getGuessed = document.getElementById("guessed")
var getDisplay = document.getElementById("display")
var getWins = document.getElementById("wins")
var getPic = document.getElementById("pic")

// Create arrays of words, pictures, and letters
var wordList = ["imperator furiosa", "immortan joe", "vuvalini", "war boys", "war rig", "bloodbag", "larry and barry", "the green place", "the citadel", "valhalla", "fury road"];
var picList = ["<img src=\"assets/images/imperatorfuriosa.png\" height=\"100%\" width=\"100%\">", "<img src=\"assets/images/immortanjoe.png\" height=\"100%\" width=\"100%\">", "<img src=\"assets/images/vuvalini.png\" height=\"100%\" width=\"100%\">", "<img src=\"assets/images/warboys.png\" height=\"100%\" width=\"100%\">", "<img src=\"assets/images/warrig.png\" height=\"100%\" width=\"100%\">", "<img src=\"assets/images/bloodbag.png\" height=\"100%\" width=\"100%\">", "<img src=\"assets/images/larryandbarry.png\" height=\"100%\" width=\"100%\">", "<img src=\"assets/images/thegreenplace.png\" height=\"100%\" width=\"100%\">", "<img src=\"assets/images/thecitadel.png\" height=\"100%\" width=\"100%\">", "<img src=\"assets/images/valhalla.png\" height=\"100%\" width=\"100%\">", "<img src=\"assets/images/furyroad.png\" height=\"100%\" width=\"100%\">"]
var allowedLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Function to show matching picture on win
function rightPic(word) {
	var picIndex = wordList.indexOf(word);
	getPic.innerHTML = picList[picIndex];
	}

// Set score to zero and display
var score = 0;
document.getElementById("wins").innerHTML = `Wins: ${score}`;

window.onload = reset();

function reset() {

	// Set number of guesses left to 10 and display
	remaining = 10;
	getRemaining.innerHTML = remaining;

	// Empty array for guessed letters
	alreadyGuessed = [];
	getGuessed.innerHTML = alreadyGuessed;

	// Clear picture
	getPic.innerHTML = "?"

	// Clear play again color
	document.getElementById("reset-full").style.backgroundColor = "rgba("+0+","+0+","+0+","+.8+ ")";

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
	getDisplay.innerHTML = displayWord;
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
	          		getDisplay.innerHTML = displayWord;

	          		// If full word is done, increase score and display score, win message, and matching picture, highlight play again
	          		if (progressWord.indexOf("_") === -1) {
	            		score++;
	            		getWins.innerHTML = `Wins: ${score}`;
	            		getRemaining.innerHTML = "<h3>What a lovely day!</h3><h4>(You won)</h4>";
	            		rightPic(chosenWord);
	            		document.getElementById("reset-full").style.backgroundColor = "rgba("+250+","+135+","+4+","+.7+ ")";
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
	        		getGuessed.innerHTML = displayAlreadyGuessed;

	        		// Subtract one from counter and display it
	        		remaining--;
	        		getRemaining.innerHTML = remaining;

	        		// If run out of guesses, display and highlight play again
	        		if (remaining === 0) {
	        			getRemaining.innerHTML = "Out of guesses!";
	        			document.getElementById("reset-full").style.backgroundColor = "rgba("+250+","+135+","+4+","+.7+ ")";
	        		}
	      	}
	    	}
	  	}
	}
}

