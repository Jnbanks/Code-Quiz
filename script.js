// variables: 
//  start boolean
//  timer boolean

// question objects
//  how many times should you brush your teeth in a day?
//      {once, twice, thrice, four times}
//  the most effective way to brush your teeth is:
//      {90 degrees toward the gumline, mod bass method, brushing only the teeth and not gums, only brushing the biting surface of your teeth}
//  flossing is best done before or after brushing?
//      {after, before}
//  T/F If you have a strong fever as a child, could that affect your teeth color?
//      {true, false}
//   At what level does fluoride become toxic?
//      {0.02 mg/kg of body weight, 0.4 mg/kg body weight, 5 mg/kg, 5 g/kg}
//  What is the primary function of mouth wash?
//      {remove plaque, clean between teeth, whiten teeth, remove some remaining bacteria}
//  When is the best time for starting braces?
//      {12 years, 14 years, when the jaw nears complete development, when the adult teeth are all erupted}
//  Night guards are used for...
//      {protecting your teeth during sports, preventing snoring, protecting your teeth from clenching and grinding while sleeping, preventing biofilm progression while sleeping}
//  Plaque is
//      {mold that grows on teeth, left over food in the mouth, a protein matrix that forms a film over your teeth, bacteria and left over food on your teeth}
//  Periodontal disease is...
//      {a process by which bacteria cause cavities, inflammation of the gum tissue, a process by which the triggered immune system destroys connective tissue, is also called xerostomia}

// var answers = {"twice", "mod bass method", "before", "true", "5 mg/kg", "remove some remaining bacteria", "when the adult teeth are all erupted", "protecting your teeth from clenching and grinding while sleeping", "bacteria and left over food on your teeth", "a process by which the triggered immune system destroys connective tissue"}

//functions:
//  show the question and answers in the middle screen
//  if the wrong anser is clicked on, report false, reduce time by 6 seconds, save this data
//  if the correct answer is clicked on, report true, save this data
//  move to next question
// if the timer reaches zero
//  move to the end screen. show score and have an input box for initials
//    submit
//    show high scores
//    would you like to play again button
// have a high scores button in the UL
// show the time remaining in the UR
// calculate the score
//    number of questions answered correctly plus time remaining = score




//==========use object for answers (var answer = {name: "Lolo", fequency: "2x/day", method: "manual brush"})
// Objects can also store methods
tellFunFact: function () {
    console.log("The earth is the only planet in our solar system not named after a Roman god or goddess.");
  },
  showWarning: function () {
    console.log("Space junk falls into Earth's atmosphere at a rate of about one a day.");
  }
};

//============This can be used for retrieving answers to the questions
// To access a value in an array, use the name of the object, the key and the index.
// Logs "Mars" using dot notation
console.log(planet.neighboringPlanets[0]);

// Logs "Mars" using bracket notation
console.log(planet["neighboringPlanets"][0]);

// To call a method, use the name of the object and the key. Don't forget the ()!
planet.tellFunFact();
planet.showWarning();



// The default keyword "this" refers to the global object
// In a browser, the global object is the Window 

// Logs Window
console.log(this);

// When the keyword "this" is used inside of an object like planet, "this" belongs to that object
var planet = {
  name: "Earth",
  age: "4.543 billion quadrillion septkrillian years",
  isPopulated: true,
  population: "7.594 billion",
  logFacts: function () {
     //Logs "This planet's name is Earth"
     console.log("This planet's name is " + this.name);
     //Logs "This planet's age is 4.543 billion years"
	 console.log("This planet's age is " + this.age);
  },
  logPopulation: function () {
    if (this.isPopulated) {
      // Logs "This planet's population is 7.594 billion"
	  console.log("This planet's population is " + this.population);
	} else {
	  console.log("The planet is unpopulated");
	}   
  }
};

// Calls object methods
planet.logFacts();
planet.logPopulation();



//=============Not sure if this will be usefull
// Logs window object using this
console.log("this: ");
console.log(this);

// Logs the document object
console.log("window.document: ");
console.log(window.document);

// Logs body of document
console.log("document.body: ");
console.log( document.body);


//============Unit 4 activity 3 DOM is how you can change the page to different screens, from questions to final score and inputing your initials. what html elements show and when.
console.log("Document Body: ")
console.log(document.body);

console.log("Children of Document Body: ")
console.log(document.body.children);

console.log("Second child of body: ")
console.log(document.body.children[1]);

console.log("First child of the ul: ")
console.log(document.body.children[1].children[0]);

// Accessing element by id
var firstChildUl = document.getElementById("first-child-ul");

// Setting style of element
firstChildUl.style.color = "#e97451";


// Access multiple elements using .querySelectorAll()
var divTags = document.querySelectorAll("div");
var pTags = document.querySelectorAll("p");
var imgEl = document.querySelectorAll("img");

// Access element by ID using .querySelector()
var changeP = document.querySelector("#change2");

// Sets first pTags to have a font-size of 40px
pTags[0].setAttribute("style", "font-size: 40px;");

// Sets changeP to have multiple style attributes
changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");

// Sets image source of the first image
imgEl[0].setAttribute("src", "./assets/images/image_1.png");

// Adds size and width styling to image
imgEl[0].setAttribute("style", "width:50%");

// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i = 0; i < divTags.length; i++) {
 divTags[i].setAttribute("style", "color:blue; font-size: 30px");
}



// Stores user response in variable 
//=================can be used for storing user answer, then used to compare to answer pool.
var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  // Creates element based on tag entered by user
  var tag = document.createElement(tagName);

  // Adds text content to created tag
  tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
  // Appends tag as child of document body
  document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another tag?");

if (nextTag === true) {
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
    document.body.appendChild(secondTag);
  }
}



//====================This is necessary for the timer
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();a
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}
//===============remember that you can style things in the html, not just on a css stylesheet
<body>  
    <h1 class="time" style="text-align:center;"></h1>
    <div id="main"></div>

    <script src="./script.js"></script>
</body>



//====================This is important for clicking on buttons and responses
// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});




//================This is for the initials input section
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// Add listener to submit element
submitEl.addEventListener("click", showResponse);





//==============This could be useful for retrieving the initials the user types for their score
var typefaceEl = document.querySelector('#typeface');
var clearEl = document.querySelector('#clear');
var h1El = document.querySelector('#h1');
var h2El = document.querySelector('#h2');
var h3El = document.querySelector('#h3');
var pEl = document.querySelector('#p');
var textAreaEl = document.querySelector('#textarea');

var elements = [h1El, h2El, h3El, pEl];

var typeface;

// Change event
typefaceEl.addEventListener('change', function (event) {
  event.preventDefault();
  typeface = typefaceEl.value;
  document.querySelector('.container').style.fontFamily = typeface;
});

// Keydown event
textAreaEl.addEventListener('keydown', function (event) {
  // Access value of pressed key with key property
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
    ''
  );
  if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});

clearEl.addEventListener('click', function (event) {
  event.preventDefault();
  textAreaEl.value = '';

  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
});





