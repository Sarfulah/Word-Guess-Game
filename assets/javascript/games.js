var userText = document.getElementById("userchoice-text");
console.log(userText);
var lossesText = document.getElementById("losses-text");

var words = ["matilda", "aladdin", "frozen", "big", "shrek", "annie", "jumanji", "hook", "pinocchio", "cinderella", "bambi"];

var wins = 0;
var losses = 0;
var wrong = [];
var guessesLeft = [];
var randWord;
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text")
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
var underscoreText = document.getElementById("underscore-text")

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));

    var guess = prompt("Guess a letter, or click cancel");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a letter");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess)
                answerArray[j] = guess;
            remainingLetters--;
        }
    }
}