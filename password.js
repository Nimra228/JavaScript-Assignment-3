var password = "Karachi"
var newPass = prompt("enter your password : ");
if (newPass.length == 0) {
    alert("please enter a password");
    newPass = prompt("enter your password : ");
}

if (newPass == password) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}