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
