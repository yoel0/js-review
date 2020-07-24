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

### More DOM Manipulation

```javascript
const list = document.createElement("ul");

// iterate through my homies array
for (let i = 0; i < homies.length; i++) {
  let eachHomie = homies[i];
  // create an element
  const listItem = document.createElement("li");
  // added text to that element
  listItem.textContent = eachHomie;

  // append item to list
  list.appendChild(listItem);
}

console.log(list);
// listening for a click
headerThree.addEventListener("click", function () {
  container.appendChild(list);
});
```

### HTML5 Review

```html
<!-- using the . extension we can append classes to any HTML tag div.container would create the class container automatically to your div-->
<div class="container"></div>
<!-- using the # extension we can append ids to any HTML tag div#special would create the id special automatically to your div-->
<div id="special"></div>
<!-- this is important when using CSS to style our page because page structure has
huge impact on how we can begin to style our page-->
```

### CSS3 Review

```css
/* 
Using the * symbol above your css style sheet will apply global rules to your whole page that will override any other rule an ezample of using this can be resetting the pages margin and padding to 0 so that you can style each element specifically without worrying about preset margins or paddings like so:
*/

* {
  margin: 0;
  padding: 0;
}
```

### JS Promise Review

```javascript
// The promise takes one argument, a callback with two parameters, resolve and reject. Do something within the callback. ie: async, then call resolve if everything works, otherwise call reject.

let promise = new Promise(function(resolve, reject) {
  // do something / async, then…

  if (/* everything worked */) {
    resolve("This worked!");
  }
  else {
    reject(Error("We broke baby.."));
  }
});
```
