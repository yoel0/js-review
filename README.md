# Javascript Review

This is my repository for JS review.

## Examples of Data Types

```javascript
let name = "Yoel Gabriel";
let age = 28;
let isCool = true;

const homies = ["Sameh", "Adam", "Brendan", "Alpha", "Levin"];
```

## Object

```javascript
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
```

## Examples of Functions

```javascript
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
```

## DOM Manipulation

```javascript
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
```
