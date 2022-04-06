//Determine variables
var startBtn = document.querySelector(".startButton");
var openingH1 = document.querySelector("h1");
var timer = document.querySelector("h2");
var secondsLeft = 3;
var viewScore = document.querySelector("h3");
var affirmAnswer = document.querySelector(".correct")
var questionBank = ["1","2","3","4","5","6","7","8","9","0"]
var seen = false;
var questionsAsked = [];


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

//Ask Questions Function-------------\\\\\\\\\\\\\\\\\\\\\
function askQuestion () {
//produce a random number between 0 and 9, call it variable rando
var rando = Math.floor(Math.random() * 10);
seen = true;
//assign that number to the index of the questionBank
var currentQuestion = document.getElementById(rando);
//display the ul represented by that index number
currentQuestion.setAttribute("style", "display: block", "margin: auto");
console.log(rando);
//create an if statement that ensures that a question is not asked more than once

}
//\\\\\\\\\\\\\\\\\\\\\\\\
//create a function for hiding elements
// function hideElement () {

// }

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



