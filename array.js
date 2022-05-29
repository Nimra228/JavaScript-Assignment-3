// literal notation
var studentList = {};
//object notation
var arr = {};

let arr1 = ["Hello", "Karachi"];
let arr2 = [2, 4, 6, 8];
let arr3 = [true, false];
let arr4 = ["Pakistan", 1947, true];


var education = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PhD"];

for (i = 0; i < education.length; i++) {
    document.write(education[i] + "<br>");
}

var student_name = ["Ali", "Ayesha", "Saba"];
var student_score = [400, 290, 310];
for (i = 0; i < student_name.length; i++) {
    percentage = (student_score[i] / 500) * 100;
    document.write("Score of " + student_name[i] + " is " + student_score[i] + ". Percentage : " + percentage + "%<br>");
}
document.write("<br><br>");

let colors_name = ["Red", "Yellow", "Green"];
document.write(colors_name);

let ask = prompt("Enter the color you want to add in the beginning:");
colors_name.unshift(ask);
document.write(colors_name + "<br>");

let add = prompt("Enter the color you want to add in the last:");
colors_name.push(ask);
document.write(colors_name + "<br>");

var add1 = prompt("which color do you want to add at beginning:");
var add2 = prompt("which color do you want to add at beginning:");
colors.unshift(add1, add2);
document.write(colors + "<br>");
colors.splice(0, 1);
document.write(colors + "<br>");
colors.pop();
document.write(colors + "<br>");
var del1 = prompt("at which index you wanna add : ");
var del2 = prompt("which color  you wanna add : ");
colors.splice(del1, 0, del2);
document.write(colors + "<br>");
var del10 = prompt("at which index you wanna remove : ");
var del20 = prompt("how many colors to remove : ");
colors.splice(del10, del20, );
document.write(colors + "<br>");

//Array sort() method
var studentAscending = [320, 230, 480, 120];
document.write("Score of Students : " + studentAscending);
document.write("<br>");

studentAscending.sort();
document.write("Ordered Score of Students : " + studentAscending);

//Array slice() method
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities list:" + "<br>" + cities + "<br>");
var selected_cities = cities.slice(2, 4);
document.write("Selected Cities:" + "<br>" + selected_cities + "<br>");

// Array join() method
let single_string = ["This", "is", "my", "cat"];
document.write("Array: " + "<br>" + single_string + "<br><br>");

let joined = single_string.join(" ");
document.write("String: " + "<br>" + joined + "<br><br><br>");

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices:" + "<br>" + devices + "<br><br><br>");


var comp = new Array();
comp.push("Keyboard");
comp.push("Mouse");
comp.push("Printer");
comp.push("Monitor");

i = 0;
document.write("Out:" + "<br>" + comp[i] + "<br>");
i++;
document.write("Out:" + "<br>" + comp[i] + "<br>");
i++;
document.write("Out:" + "<br>" + comp[i] + "<br>");
i++;
document.write("Out:" + "<br>" + comp[i] + "<br>");
i++;
document.write("<br><br><br>");
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices:" + "<br>" + devices + "<br><br>");


var comp = new Array();
comp.unshift("Keyboard");
comp.unshift("Mouse");
comp.unshift("Printer");
comp.unshift("Monitor");

i = 0;
document.write("Out:" + "<br>" + comp[i] + "<br>");
i++;
document.write("Out:" + "<br>" + comp[i] + "<br>");
i++;
document.write("Out:" + "<br>" + comp[i] + "<br>");
i++;
document.write("Out:" + "<br>" + comp[i] + "<br>");
i++;