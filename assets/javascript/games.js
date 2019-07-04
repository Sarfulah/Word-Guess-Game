var userText = document.getElementById("userchoice-text");
console.log(userText);
var lossesText = document.getElementById("losses-text");

var computerChoices = ["matilda", "aladdin", "frozen", "big", "shrek", "annie", "jumanji", "hook", "pinocchio", "cinderella", "bambi"];

var wins = 0;
var losses = 0;
var wrong = [];
var guessesLeft = 0;
var randWord;
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text")
var computerGuess;
var underscoreText = document.getElementById("underscore-text")
var underScore = [];

// The resetGame() function
function resetGame() {
    guessesLeft = 10;
    wrong = [];

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    for (var i = 0; i < computerGuess.length; i++) {
        underScore.push("_");
    }

    underscoreText.textContent = underScore.join(" ");
}

resetGame(); // runs resetGame() function

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);


    // Check to see if userGuess is in the word
    if(computerGuess.indexOf(userGuess) != -1) {
        // The letter is in the word
        // Replace our underscores with a correct letter
        console.log("Found a match!");

        for(var i= 0; i < computerGuess.length; i++) {
            if(userGuess == computerGuess[i]) {
                underScore[i] = userGuess
                console.log(underScore)
            }
        }

// Have we won? If so reset the game, and increase wins by 1
    } else {
        // The letter is not in the word
        console.log("No match found");
        // Userguess gets added to wrong (arrayname.push(userguess))
        // guessesLeft decreases by 1
        // Have we lost? If so reset the game, and incease losses by 1
    }
   

        directionsText.textContent = "";

        userChoiceText.textContent = userGuess;
        computerChoiceText.textContent = computerGuess;
        winsText.textContent = wins;
        lossesText.textContent = losses;
        underscoreText.textContent = underScore.join(" ");
    }