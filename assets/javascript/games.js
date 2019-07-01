var userText = document.getElementById("userchoice-text");
        console.log(userText);
        var lossesText = document.getElementById("losses-text");

        var computerChoices = ["matilda", "aladdin", "frozen", "big", "shrek", "annie", "jumanji", "hook", "pinocchio", "cinderella", "bambi"];

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
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
        var underscoreText = document.getElementById("underscore-text")

        document.onkeyup = function (event) {
            var userGuess = event.key;

            var underScore = [];
                for (var i = 0; i < computerChoices.length; i++) {
                    underScore.push("_");
                }
                if (computerGuess === userChoiceText) {
                    underscore[i] = userChoiceText;
                    console.log(underscore)
                }

                directionsText.textContent = "";

                userChoiceText.textContent = "You chose : " + userGuess;
                computerChoiceText.textContent = "The computer chose:" + computerGuess;
                winsText.textContent = "Wins : " + wins;
                lossesText.textContent = "Losses : " + losses;
                underscoreText.textContent = "Underscore : " + underScore;
            }
