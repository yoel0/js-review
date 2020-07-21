// Datatypes
let name = "Yoel Gabriel";
let age = 28;
let isCool = true;

// array

const homies = ["Sameh", "Adam", "Brendan", "Alpha", "Levin"];

// object

const tesla = {
  industry: "Electric Cars",
  ceo: "Elon Musk",
  yearFounded: 2003,
  foundingMembers: ["Elon Musk", "JB Straubei", "Martin Eberard"],
  stockTicker: "TSLA",
  vehicles: {
    vehicleOne: "Model S",
    vehicleTwo: "Model X",
    vehicleThree: "Model 3",
  },
  print: function () {
    console.log("Hello, this works with objects");
    console.log("The CEO of Tesla is " + this.ceo);
  },
};

tesla.stockPrice = 1643.0;

console.log(name);
console.log(age);
console.log(isCool);
console.log(homies);
console.log(tesla);
console.log(tesla.vehicles.vehicleThree);
console.log(tesla["vehicles"]["vehicleThree"]);

tesla.print();

// my own object

const chess = {
  gameType: "Strategy",
  numberOfPlayers: 2,
  yearFounded: "93' til'",
  print: function () {
    console.log("Hello, this works with objects");
    console.log("This game is all about " + this.gameType);
  },
};

chess.print();

// function

function printHomies(array) {
  array.forEach((homie) => {
    console.log(homie);
  });
}

printHomies(homies);

// standard function
function addNumbers(num1, num2) {
  return num1 + num2;
}

// function expression
const multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};

// arrow function
const subtractNumbers = (num1, num2) => {
  return num1 - num2;
};

// DOM

const container = document.querySelector(".container");
console.log(container);

const headerTwo = document.createElement("h2");
headerTwo.textContent = "My First JS Review";

container.appendChild(headerTwo);

//add a class to headerTwo
headerTwo.classList.add("subtitle");
//headerTwo.setAttribute("class", "header-two");

// remove class from headerTwo
headerTwo.classList.remove("header-two");
console.log(headerTwo);

headerTwo.addEventListener("click", function () {
  headerTwo.textContent = "Yoel";
});

// make another element
const headerThree = document.createElement("h2");
headerThree.textContent = "Homies";

container.appendChild(headerThree);
console.log(headerThree);

const list = document.createElement("ul");

// iterate through my homies array
for (let i = 0; i < homies.length; i++) {
  let eachHomie = homies[i];

  const listItem = document.createElement("li");
  listItem.textContent = eachHomie;

  list.appendChild(listItem);
}

console.log(list);
headerThree.addEventListener("click", function () {
  container.appendChild(list);
});
// refrence each homie
// create a li
// add text content to that li
// append that to a ul (unordered list)
// unordered list
// homies
// - homie 1
// - homie 2
// - homie 3

// ordered list
// homies
// 1. homie 1
// 2. homie 2
// 3. homie 3

// Problem Solving

// what do I start with
// what do I I hope to end up with

// understand the problem
// where the issue start and ...

// break it down into more manageable problems

// fizzBuzz
// Write a function that does the following:
// takes in an array
// check each number in the array
// if the number is divisible by (need to = 0) 5 and 3 === FizzBuzz
// if the number is divisble by 3 === Fizz
// if the number is divisble by 5 === 'Buzz'
// return an array

// For example:
// [3, 5, 15, 20, 9, 7]
// ['Fizz', 'Buzz', 'FizzBuzz', 'Buzz', 'Fizz', 7]

// I need to set up an empty array
// iterate through the array thats going to be passed in
// check the remainder of each element
// push the result of each element inside the result array
// return that result array

function fizzBuzz(array) {
  let result = []; // Fizz, Buzz, FizzBuzz, Buzz, Fizz, 7

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    console.log(num); // 3, 5, 15....

    if (num % 3 === 0 && num % 5 === 0) {
      result.push("FizzBuzz");
    } else if (num % 3 === 0) {
      result.push("Fizz");
    } else if (num % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(num);
    }
  }

  return result;
}

console.log(fizzBuzz([3, 5, 15, 20, 9, 7]));

// - [ ] Do I understand what the prompt is asking?
// - [ ] Am I able to break the problem down?
// - [ ] What is my strategy for solving the problem?
// - [ ] Do I understand what my code is doing?
// - [ ] Am I able to foresee any edge cases?
// - [ ] Am I able to track the order of the code that is being executed?
// - [ ] Am I able to track the values of the variables?
// - [ ] Am I able to walk through my code line by line with an example?
// - [ ] Do I have a working solution?

// PairProgramming Problems (Driver, Navigator):
