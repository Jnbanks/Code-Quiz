//start button
var startBtn = document.querySelector(".startButton");
var openingH1 = document.querySelector("h1");
var timer = document.querySelector("h2");
var secondsLeft = 3;
var viewScore = document.querySelector("h3");

var visible = true;

//should I start by defining all the functions, and then calling their order below?
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


startBtn.addEventListener("click", function() {
//we want to display the first question
//  remove the start button
startBtn.setAttribute("style", "display: none");
//  remove the header
openingH1.setAttribute("style", "display: none")
//  start the timer
setTime();
console.log("yeah");
})



