//Empty multidimensional array

let arr = [
    [],
    [],
    []
    [],
    [],
    []
];
document.write(arr + "<br><br><br>");


let multiD = [
    [0 + " " + 1 + " " + 2 + " " + 3 + "<br>" + 1 + " " + 0 + " " + 1 + " " + 2 + "<br>" + 2 + " " + 1 + " " + 0 + " " + 1 + "<br><br><br>"]
];


document.write(multiD);

for (i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

document.write("<br><br><br><br>");

//multiplication table using for loop

var table = prompt("Enter a number to show its multiplication table");
var till = prompt("Enter length multiplication table");
var i = 1;
document.write("Multiplication table of " + " " + table + "<br>");
document.write("Length " + till + "<br><br>");

for (i = 1; i <= till; i++) {

    document.write("<br>" + table + " * " + i + " = " + (table * i));
}


var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");

}
document.write("<br><br>");


document.write("Element at index 0 is " + fruits[0] + "<br>");
document.write("Element at index 1 is " + fruits[1] + "<br>");
document.write("Element at index 2 is " + fruits[2] + "<br>");
document.write("Element at index 3 is " + fruits[3] + "<br>");
document.write("Element at index 4 is " + fruits[4] + "<br>");

document.write("<br><br>");

var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""];
document.write("<b>Counting:</b>" + "<br><br>" + counting);
document.write("<br><br>");

var reverseCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];
reverseCount.reverse();
document.write("<b>Reverse Counting:</b>" + "<br><br>" + reverseCount);
document.write("<br><br>");

for (i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write("<b>Even:</b>" + i + ",");
    }
}
document.write("<br><br>");
var odd_arr = [];
for (var i = 1; i < 20; i += 2) {
    odd_arr.push(i);
}
document.write("<b>Odd:</b>" + odd_arr);
document.write("<br><br>");

document.write("<b>Series:</b>" + "<br><br>");
for (i = 1; i <= 20; i++) {

    i += 1;

    document.write(i + "k ,");

}

var a = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"];
document.write(a);
var ask = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
for (i = 0; i <= a.length; i++) {
    if (ask == a[i]) {
        alert(ask + "is available at index " + i + "in our bakery");

    } else {
        alert("We are sorry. " + ask + " is not available in our bakery.");
    }
}

//find largest number
var arr = [24, 53, 78, 91, 12];
var largest = 0;

for (i = 0; i <= largest; i++) {
    if (arr[i] > largest) {
        var largest = arr[i];
    }
}

document.write("Array Items: " + arr);
document.write("<br>");
document.write("The largest number is " + largest);

//find smallest number
var arr1 = [24, 53, 78, 91, 12, 10];
var smallest = 0;

for (i = arr1.length; i >= smallest; i--) {
    if (arr1[i] > smallest) {
        var smallest = arr1[i];
    }
}
document.write("Array Items: " + arr1);
document.write("<br>");
document.write("The smallest number is " + smallest);

for (i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
        document.write(i + ",");

    }

}