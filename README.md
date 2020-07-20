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
