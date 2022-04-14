//Variables:
//  question object arrays:


const questions = [
{
    question: "Periodontal disease is:",
    a: "a process by which bacteria cause cavities",
    b: "a process by which the triggered immune system destroys connective tissue",
    c: "inflammation of the gum tissue",
    d: "also called xerostomia",
    correctAnswer: "b"
},
  
{
    question: "Plaque is:", 
    a: "mold that grows on teeth", 
    b: "left over food in the mouth",
    c: "a protein matrix that forms a film over your teeth",
    d: "bacteria and left over food on your teeth",        
    correctAnswer: "d",
},
  
{
    question: "Night guards are used for:",
    a: "protecting your teeth during sports", 
    b: "preventing snoring",
    c: "protecting your teeth from clenching and grinding while sleeping",
    d: "preventing biofilm progression while sleeping",
    correctAnswer: "c",
},

{
    question: "When is the best time for starting braces?", 
    a: "12 years", 
    b: "14 years",
    c: "when the jaw nears complete development",
    d: "when the adult teeth are all erupted",
    correctAnswer: "d"
},
  
{
    question: "What is the primary function of mouth wash?", 
    a: "remove some remaining bacteria", 
    b: "remove plaque",
    c: "clean between teeth",
    d: "whiten teeth",
    correctAnswer: "a",
},

{
    question: "At what level does fluoride become toxic?", 
    a: "5 mg/kg of body weight", 
    b: "0.4 mg/kg body weight",
    c: "5 g/kg of body weight",
    d: "0.02 mg/kg of body weight",
    correctAnswer: "a",
},

{
    question: "How might a strong fever influence tooth development as a child? ",
    a: "It could cause permanent staining", 
    b: "It could cause your teeth to not erupt",
    c: "It would not influence tooth development",
    d: "It would only slow down tooth development temporarily",
    correctAnswer: "a",
},

{
    question: "Why is flossing best done before brushing?", 
    a: "It is actually better to floss last", 
    b: "As long as you floss at least 4x/week, the order of brushing and flossing does not matter",
    c: "It opens access for tooth paste and fluoride (from brushing and mouthwash) to reach otherwise covered interproximal sections of your teeth",
    d: "By removing food and plaque from between your teeth first, your toothbrush bristles don't get as gummed up and therefore they are more effective for brushing",
    correctAnswer: "c"
},

{
    question: "What is the most effective way to brush your teeth?", 
    a: "90 degrees toward the teeth", 
    b: "modified bass brushing method",
    c: "brushing only the teeth and not gums",
    d: "only brushing the biting surface of your teeth",
    correctAnswer: "b",
},

{
    question: "How many times should you brush your teeth in a day?", 
    a: "Once", 
    b: "Twice",
    c: "Thrice",
    d: "Four times",
    correctAnswer: "b"
}
];

// console.log(questions[3].c);
// console.log(questions[6].question);

//other variabls:
var secondsLeft = 10;
var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#startBtn");
var openingH1 = document.querySelector("#header");
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var answerA = document.querySelector("#a");
var answerB = document.querySelector("#b");
var answerC = document.querySelector("#c");
var answerD = document.querySelector("#d");
var scoreCard = document.querySelector("#scoreboard");
//var finalScore = localStorage.getItem(score);
var seeScores = document.querySelector("#viewScore");


//var answers = [];
let score = 0;

let currentQuestionIndex = 0;
//functions:
function displayQuestion(){
  let q = questions[currentQuestionIndex];
  quiz.setAttribute("style", "display: block");
  question.innerHTML = q.question;
  answerA.innerHTML = q.a;
  answerB.innerHTML = q.b;
  answerC.innerHTML = q.c;
  answerD.innerHTML = q.d;
  //currentQuestionIndex++;
}


function checkChoice(answer){
  if (questions[currentQuestionIndex].correctAnswer == answer){
    score++;
    console.log(score);
  } else {
    secondsLeft = secondsLeft-3;
    //console.log(secondsLeft);
   // timer.textContent = secondsLeft + " Seconds Remaining";
  }
  if (currentQuestionIndex < 9) {
    currentQuestionIndex++;

    displayQuestion();
  } else if (currentQuestionIndex == 9) {
    clearInterval(timerInterval);  
    localStorage.setItem("userScore", score);
    scorePrompt();
  }
}
function scorePrompt (){
  let userInitials = prompt("Your final score is " + score + ". Type your initials for the scoreboard!")
  if (userInitials != null){
    localStorage.setItem("initials", userInitials);
    localStorage.setItem("userScore", score);
    displayScore();
  } else {
    alert("Please input your initials, thanks!");
    scorePrompt();
  }
}

function displayScore (){
  console.log(localStorage);
  let name = localStorage.getItem("initials");
  let number = localStorage.getItem("userScore");
  scoreCard.innerHTML = name + ": " + number + " points";
}

seeScores.addEventListener("click", displayScore)
//Start button event----------
startBtn.addEventListener("click", startQuiz) 

function startQuiz (){
  //we want to display the first question
  
  //  remove the start button
  startBtn.setAttribute("style", "display: none");
  //  remove the header
  openingH1.setAttribute("style", "display: none")
  //  start the timer
  setTime();
  displayQuestion();
  //askQuestion();
  console.log("let the game begin!");
}

//Timer function----------
function setTime() {
  var timerInterval = setInterval(function(){
    secondsLeft--;
    timer.textContent = secondsLeft + " Seconds Remaining";
    
    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      timer.textContent = "Sorry, out of time";
      quiz.setAttribute("style", "display:none");
      //localStorage.setItem("userScore", score);
      scorePrompt();
    }
  }, 1000);
}





  
        
        
        





