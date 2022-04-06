//Determine variables
var startBtn = document.querySelector(".startButton");
var openingH1 = document.querySelector("h1");
var timer = document.querySelector("h2");
var secondsLeft = 300;
var viewScore = document.querySelector("h3");
//var affirmAnswer = document.querySelector(".correct")
var questionBank = ["1","2","3","4","5","6","7","8","9","0"]
//var seen = false;
var questionsAsked = "";
var correctChoice = document.querySelector(".correct")
var choice = document.querySelector("li")
var score = 0;


//Determine Functions

//Timer function----------
function setTime() {
  var timerInterval = setInterval(function(){
    secondsLeft--;
    timer.textContent = secondsLeft + " Seconds Remaining";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log("ran out of time")
    }
  }, 1000);
}

// function firstQuestion () {
//   //produce a random number between 0 and 9, call it variable rando
//   //var rando = Math.floor(Math.random() * 10);
//   //questionsAsked = rando;
//   //questionsAsked.push(rando);
//   newNumber();
//   //assign that number to the index of the questionBank
//   var currentQuestion = document.getElementById(rando);
//   //Keep track of what questions have been asked
//   //display the ul represented by that index number
//   currentQuestion.setAttribute("style", "display: block", "margin: auto");
//   console.log(rando);
//   findQuestion();
//   }

//Ask Questions Function-------------\\\\\\\\\\\\\\\\\\\\\
// function findQuestion () {
// //produce a random number between 0 and 9, call it variable rando
// //var rando = Math.floor(Math.random() * 10);
// checkRedundancy();
// //assign that number to the index of the questionBank
// var currentQuestion = document.getElementById(rando);
// //Keep track of what questions have been asked
// questionsAsked.push(rando);
// //display the ul represented by that index number
// currentQuestion.setAttribute("style", "display: block", "margin: auto");
// console.log(rando);
//create an if statement that ensures that a question is not asked more than once

//}

//============================================================
//ask question (no more messing with the random question business)
function askQuestion () {

  for (var i = 0; i < questionBank.length; i++) {
    var currentQuestion = document.getElementById(i);
    currentQuestion.setAttribute("style", "display: block", "margin: auto");
  }
}

//what about a function that produces a random number and ensures it is not a number that has been previously rendered?
// function firstNumber (questionsAsked) {
//   var rando = Math.floor(Math.random() * 10);
//   questionsAsked.push(rando);
// }
  



//Do not repeat a question
// function checkRedundancy (value, questionsAsked) {
//   var status = 'Not Asked';

//   for (var i = 0; i < questionsAsked.length; i++) {
//     var question = questionsAsked[i];
//     if (question = value) {
//       status = 'Asked';
//       findQuestion;
//     } else if (i = questionsAsked.length) {
//       //show the final score!
//       console.log('No more questions!')
//     }
//   }
//   return status;
// }

//check the value of the choice, correct or incorrect
//function checkAnswer ()

//eventlistener for clicking a list item/answer and then determining what to do
choice.addEventListener("click", function() {
//check to see if correct or incorrect
var event = event.target;
if (event.target = correctChoice) {
  //  if correct, add to score
  score++;
  //hide the question and answers
  document.ul.setAttribute("style", "display: none");
  //find a new question
  askQuestion();
} else {
  secondsLeft - 3;
  askQuestion();
}

})

//function that shows final score
function finalScore (event) {
  event.preventDefault();
//stop the timer and store number of seconds remaining
//get the number from score array
//add the seconds remaining to the score value
if (secondsLeft > 0) {
  score + secondsLeft;
  secondsLeft = 0;
  getStats();
} else if (seconds = 0) {
  getStats();
}
//they also have the option to play again
}


function getStats (stats) {
  //display the score and an input field for their initials
  var stats = prompt("Your score is " + score + ". Please enter your initials.")
  //if they don't input anything, alert them saying they have to input something
  if (stats = "") {
    alert("Please enter your initials")
  } else {
    localStorage.setItem(stats, score)
    console.log(stats, score);
  }
}

//Function that shows the scoreboard history


//Start button event----------
startBtn.addEventListener("click", function() {
  //we want to display the first question
  
//  remove the start button
startBtn.setAttribute("style", "display: none");
//  remove the header
openingH1.setAttribute("style", "display: none")
//  start the timer
setTime();
// console.log(questionBank);
// console.log(questionBank.length);
askQuestion();
console.log("yeah");
})


//show final score if user answers all ten questions


//\\\\\\\\\\\\\\\\\\\\\\\\
//create a function for hiding elements??????????
// function hideElement () {

// }

