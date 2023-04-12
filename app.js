"use strict";

const squares = document.querySelectorAll(".square");
const score = document.querySelector(".score");
const time = document.querySelector(".time");
const mole = document.querySelector(".mole");

let clock = 60;
const randomSquare = setInterval(function () {
  squares.forEach((square) => {
    square.innerHTML = "";
    square.classList.remove("mole");
  });

  let randomPosition = squares[Math.trunc(Math.random() * 9)];
  console.log(squares[Math.trunc(Math.random() * 9)]);
  // randomPosition.innerHTML = '<img src="mole.jpg" />';
  randomPosition.classList.add("mole");
  if (randomPosition.classList.contains("mole")) {
    randomPosition.innerHTML = '<img src="mole.jpg" />';
  }
  if (clock <= 55) {
    squares.innerHTML = "";
    clearInterval(randomSquare);
    randomPosition.innerHTML = "";
  }
}, 1000);
randomSquare;
//TIME LEFT FUNCTION

console.log(clock);
const countTimeDown = setInterval(function () {
  clock = clock - 1;
  console.log(clock);
  time.innerHTML = `Time Left:${clock}s`;
  if (clock <= 55) {
    time.innerHTML = "Time's Up";
    clearInterval(countTimeDown);
  }
}, 1000);

// console.log(clock);
countTimeDown;
