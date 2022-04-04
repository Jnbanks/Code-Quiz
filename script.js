// variables: 
//  start boolean
//  

//functions:
//  




//==========use object for questions (var question = {name: "Lolo", fequency: "2x/day", method: "manual brush"})
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