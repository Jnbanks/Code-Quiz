//Variables:
//  question object arrays:


const questions = [
{
  question: "Periodontal disease is:",
  answers: {
    a: "a process by which bacteria cause cavities",
    b: "a process by which the triggered immune system destroys connective tissue",
    c: "inflammation of the gum tissue",
    d: "also called xerostomia"
  },
  correctAnswer: "b"
},
  
{
  question: "Plaque is:", 
  answers: {
    a: "mold that grows on teeth", 
    b: "left over food in the mouth",
    c: "a protein matrix that forms a film over your teeth",
    d: "bacteria and left over food on your teeth"
  },        
  correctAnswer: "d"
},
  
{
    question: "Night guards are used for:",
    answers: { 
    a: "protecting your teeth during sports", 
    b: "preventing snoring",
    c: "protecting your teeth from clenching and grinding while sleeping",
    d: "preventing biofilm progression while sleeping"
  },
  correctAnswer: "c"
},

{
    question: "When is the best time for starting braces?", 
    answers: {
    a: "12 years", 
    b: "14 years",
    c: "when the jaw nears complete development",
    d: "when the adult teeth are all erupted"
  },
  correctAnswer: "d"
},
  
{
    question: "What is the primary function of mouth wash?", 
    answers: {
    a: "remove some remaining bacteria", 
    b: "remove plaque",
    c: "clean between teeth",
    d: "whiten teeth"
  },
  correctAnswer: "a"
},

{
    question: "At what level does fluoride become toxic?", 
    answers: {
    a: "5 mg/kg of body weight", 
    b: "0.4 mg/kg body weight",
    c: "5 g/kg of body weight",
    d: "0.02 mg/kg of body weight"
  },
  correctAnswer: "a"
},

{
    question: "How might a strong fever influence tooth development as a child? ",
    answers: { 
    a: "It could cause permanent staining", 
    b: "It could cause your teeth to not erupt",
    c: "It would not influence tooth development",
    d: "It would only slow down tooth development temporarily"
  },
  correctAnswer: "a"
},

{
    question: "Why is flossing best done before brushing?", 
    answers: {
    a: "It is actually better to floss last", 
    b: "As long as you floss at least 4x/week, the order of brushing and flossing does not matter",
    c: "It opens access for tooth paste and fluoride (from brushing and mouthwash) to reach otherwise covered interproximal sections of your teeth",
    d: "By removing food and plaque from between your teeth first, your toothbrush bristles don't get as gummed up and therefore they are more effective for brushing"
  },
 correctAnswer: "c"
},

{
    question: "What is the most effective way to brush your teeth?", 
    answers: {
    a: "90 degrees toward the teeth", 
    b: "modified bass brushing method",
    c: "brushing only the teeth and not gums",
    d: "only brushing the biting surface of your teeth"
  },
  correctAnswer: "b"
},

{
    question: "How many times should you brush your teeth in a day?", 
    answers: {
    a: "Once", 
    b: "Twice",
    c: "Thrice",
    d: "Four times"
  },
  correctAnswer: "b"
}
];

console.log(questions[3].answers.c);

//other variabls:
secondsLeft = 30;
var timer = document.querySelector("h2");
var startBtn = document.querySelector(".startButton");
var openingH1 = document.querySelector("h1");
const quizCard = document.getElementById("quiz");
const scoreCard = document.getElementById("scoreboard");
const answers = [];
var score = "";

//functions:

////Ask First Question 
function askQuestion () {
  //var currentQuestion = 
  var displayQuestion = document.getElementById("#quiz");
  var currentQuestion = JSON.stringify(questions[0]);
  console.log(currentQuestion);
  displayQuestion.textContent = currentQuestion;
}
//no random question order, just use the order as given in the object array
//make the index format so that the question is first, and the answers are displayed below it as a list. Do Not display the correct answer
//Display the first question
//assign the answers a clickable attribute
//have an event listener on, waiting for an answer to be clicked
//when that answer is clicked, check to see if it is the correct answer 
//  if clicked target/answer == correct answer
//    score ++
//  else secondsLeft - 3
//Next function is producing a New random number between 0 and 9 
//check to see if the new Random number == displayed question
//  for statement for this one, to see if new number == one of the displayedQuestion array items.
//  if == item {Produce new random number}
//  else {grab that question from the questions object and display on the page}
//use the same process as the "Display the first question" function above, but name it displayNext
//Function that checks if all questions have been presented
//  this can be done by checking the length of displayed questions after each time the user clicks a response. 
//    if the displayedQuestion.length = 10 {stop the timer, show the final score, input initials}
//Function that stops the game and displays final score if the timer reaches 0
//  use the display final score function above in the if statment of the setTime function above
//Function that displays the final score and allows the user to input initials so that it can save that final score with their initials to the computer storage
//  Function that determines the high score display order
//    for loop that compares each score and places the highest at the front of the array. select first index, next index. if first index >= next index, compare it to the next index, else if first index < next index, grab next index and compare it to the next index. At the end of the comparisons, if it is greater than all the other indices, add it to a final score array. You could do this with the push array, but change it so that you are pushing the lower numbers first and the higher last.

//Start button event----------
startBtn.addEventListener("click", function() {
  //we want to display the first question
  
  //  remove the start button
  startBtn.setAttribute("style", "display: none");
  //  remove the header
  openingH1.setAttribute("style", "display: none")
  //  start the timer
  setTime();
  askQuestion();
  console.log("yeah");
})

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





  
        
        
        





