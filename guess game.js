var secretNum = 2;
var guess = prompt("guess the secret number : ");
if (secretNum == guess) {
    alert("Bingo! Correct answer");

} else if (guess == secretNum + 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong Answer! ");
}