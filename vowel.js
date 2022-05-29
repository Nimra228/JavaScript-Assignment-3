var vowel = prompt("Enter a character: ");

if (vowel.length > 1) {
    alert("You entered more than one character. Please enter only one character. ");

} else if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
    alert("The entered character is a vowel.");

} else {
    alert("Your entered character is not a vowel.");
}