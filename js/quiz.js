'use strict';

var score = 0; 
var elScore = document.getElementById('score');


function questionsArray() {
  var questions = ['Do I like Avocados?', 'Do I like Apples?', 'Do I like the color green?', "Is my favorite tv show Grey's Anatomy", 'Is my favorite song Happy Birthday'];
  var answers = ['yes', 'yes', 'yes', 'no', 'no'];
  var input;

  for (var i = 0; i < questions.length; i++) {
    input = prompt(questions[i]);

    if (input.toLowerCase() === answers[i].toLowerCase() || input.toLowerCase() === answers[i].toLowerCase()) {
      alert('Correct!');
      console.log(input + answers[i]);
    }
    else {
      alert('Incorrect!');
      console.log(input + answers[i]);
    }
  }
}









function avacado() {

  var avocados = (prompt("Do I like Avocados?"));

  if (avocados.toLowerCase() === "y" || avocados.toLowerCase() === "yes" ) {
    console.log(avocados,"Correct");
    alert("Correct!");
    score += 1;
  }
  else {
    console.log('please remember to answer yes or no');
    alert("Incorrect!");
  }
}

function apple() {
  var apples = (prompt("Do I like Apples?"));

  if (apples.toLowerCase() === "y" || apples.toLowerCase() === "yes" ) {
    console.log('Correct, I like apples.');
    alert("Correct!");
    score += 1;
  }
  else {
    console.log("Incorrect");
    alert("Incorrect!");
  }
}

function green() {
  var green = (prompt("Do I like the color green?"));

  if (green.toLowerCase() === "y" || green.toLowerCase() === "yes" ) {
    console.log('Correct, my favorite color is green!');
    alert("Correct!");
    score += 1;
  }
  else {
    console.log('Incorrect');
    alert("Incorrect!");
  }
}

function tv() {
  var tv = (prompt("Is my favorite tv show Grey's Anatomy"));

  if (tv.toLowerCase() === "n" || tv.toLowerCase() === "no" ) {
    console.log('Correct');
    alert("Correct!");
    score += 1;
  }
  else {
    console.log('please remember to answer yes or no');
    alert("Incorrect!");
  }
}

function song() {
  var song = (prompt("Is my favorite song Happy Birthday"));

  if (song.toLowerCase() === "n" || song.toLowerCase() === "no" ) {
    console.log(tv, 'Correct');
    alert("Correct!");
    score += 1;
  }
  else {
    console.log('please remember to answer yes or no');
    alert("Incorrect!");
  }
}

function favoriteNumber() {
  var answer = 7; 
  var i = 0; 
  while (guess !== answer && i < 4) {
    var guess = parseInt(prompt("Guess my favorite number between 1 - 100"));
    if (guess < answer) {
      alert("Go higher!");
      i += 1;
    }
    else if (guess > answer){
      alert("Go lower!");
      i += 1;
    }
    else if (guess === answer) {
      alert("Yes!");
      score += 1;
      break;
    }
  }
}

function kidsNames() {
  var correctAnswers = ["lily", "alexus", "jersey", "jadynn"];
  for (var i = 0; i < 6; i++) {
    var guess = prompt("What are my daughter's names?").toLowerCase();
    for (var j = 0; j < correctAnswers.length; j++) {
      if (guess === correctAnswers[j]) {
        alert("Yes!");
        score += 1;
        var correct = true;
        break;
      }
    }
    if(correct) {
      break;
    }
  }
}

// function printAnswers() {
//   for (var i = 0; i < correctAnswers.length; i++) {
//     document.write(correctAnswers[i] + " ");
//   }
// }

// avacado();
// apple();
// green();
// tv();
// song();
// favoriteNumber();
// kidsNames();
questionsArray();

/*
var answer = 7;
var i = 0; 

while (number !== answer && i <= 4) {
    var number = parseInt(prompt("What is my favorite number?"));
    i += 1; 
};

// for loop for quiz question 6

var answer = 7;

for (var i = 0; i < 4; i++){
    var guess = parseInt(prompt("Guess my favorite number between 1 - 100"));
    if (guess < answer) {
        alert("Go higher!");
    }
    else if (guess > answer){
        alert("Go lower!");
    }
    else if (guess === answer) {
        alert("Yes!");
        score += 1;
        break;
    }
}
*/
//while loop for quiz question 6 

//quiz question 7 





elScore.innerHTML = score;




