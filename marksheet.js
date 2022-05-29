let marks1 = prompt("Please enter marks of subject 1:");
let marks2 = prompt("Marks of subject 2:");
let marks3 = prompt("Marks of subject 3:");

let total = parseInt(marks1) +
    parseInt(marks2) +
    parseInt(marks3);

let percentage = (total / 400) * 100;

if (percentage >= 80) {
    grades = "A-one";
    var remarks = "Excellent";

} else if (percentage >= 70) {
    grades = "A";
    var remarks = "Good";


} else if (percentage >= 60) {
    grades = "B";
    var remarks = "You need to improve";


} else {
    grades = "F";
    var remarks = "Sorry";

}

document.write("<b>Marks Sheet</b>");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "<br>");
document.write("Total Marks : " + 400);
document.write("<br>");

document.write("Marks Obtained : " + total);
document.write("<br>");

document.write("Percentage : " + percentage);
document.write("<br>");

document.write("Grade : " + grades);
document.write("<br>");

document.write("Remarks : " + remarks);