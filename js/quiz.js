/*
Questions...
What is your name? 
Do I like avocados?
Do I like apples? 
Is my favorite green?
Is my favorite song, "Happy Birthday"?

*/
'use strict';


var avocados = (prompt("Do I like Avocados?"));
var score = 0; 
var elScore = document.getElementById('score');

if (avocados.toLowerCase() === "y" || avocados.toLowerCase() === "yes" ) {
    console.log('Correct');
    alert("Correct!")
    score += 1;
}
else {
    console.log('please remember to answer yes or no');
    alert("Incorrect!");
};

var apples = (prompt("Do I like Apples?"));

if (apples.toLowerCase() === "y" || apples.toLowerCase() === "yes" ) {
    console.log('Correct, I like apples.');
    alert("Correct!");
    score += 1;
}
else {
    console.log("Incorrect");
    alert("Incorrect!");
};

var green = (prompt("Do I like the color green?"))

if (green.toLowerCase() === "y" || green.toLowerCase() === "yes" ) {
    console.log('Correct, my favorite color is green!');
    alert("Correct!")
    score += 1;
}
else {
    console.log('Incorrect');
    alert("Incorrect!");
};
var tv = (prompt("Is my favorite tv show Grey\'s Anatomy"));

if (tv.toLowerCase() === "n" || tv.toLowerCase() === "no" ) {
    console.log('Correct');
    alert("Correct!")
    score += 1;
}
else {
    console.log('please remember to answer yes or no');
    alert("Incorrect!");
};
var song = (prompt("Is my favorite song Happy Birthday"));

if (tv.toLowerCase() === "n" || tv.toLowerCase() === "no" ) {
    console.log('Correct');
    alert("Correct!")
    score += 1;
}
else {
    console.log('please remember to answer yes or no');
    alert("Incorrect!");
};
elScore.innerHTML = score;