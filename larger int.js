var first = parseInt(prompt("enter first number : "));
var second = parseInt(prompt("enter second number : "));
if (first > second) {
    alert(first);
} else if (second > first) {
    alert(second);
} else if (first == second) {
    alert(first + " " + second);
}