const word = ["matilda", "aladdin", "frozen", "big", "shrek", "annie", "jumanji", "hook", "pinocchio", "cinderella", "bambi"];
let randNum = Math.floor(Math.random() * words.length);
let choosenWord = word[randNum];
console.log(choosenWord);
let underScore = [];
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}
console.log(generateUnderscore());