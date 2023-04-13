"use strict";

const squares = document.querySelectorAll(".square");
const score = document.querySelector(".score");
const time = document.querySelector(".time");
const mole = document.querySelector(".mole");

let scores = 0;
let clock = 60;

// forEach always asking fof all which is inside
const randomSquare = setInterval(function () {
  squares.forEach((square) => {
    square.innerHTML = "";
    square.classList.remove("mole");
  });

  // Making the squares random
  let randomPosition = squares[Math.trunc(Math.random() * 9)];

  //Moving Mole

  randomPosition.classList.add("mole");
  if (randomPosition.classList.contains("mole")) {
    randomPosition.innerHTML = '<img src="mole.jpg" />';
  }
  if (clock <= 55) {
    //How much time in seconds
    // squares.innerHTML = "";
    clearInterval(randomSquare);
    randomPosition.innerHTML = "";
  }
}, 1000);
randomSquare;

//Time left

console.log(clock);
const countTimeDown = setInterval(function () {
  clock = clock - 1;
  // console.log(clock);
  time.innerHTML = `Time Left:${clock}s`;
  if (clock <= 55) {
    time.innerHTML = "Time's Up";
    squares.forEach((square) => {
      square.innerHTML = "";
      square.classList.remove("mole");
      clearInterval(countTimeDown);
      score.innerHTML = `Final Score:${scores}`;
      // alert(`YOUR FINAL SCORE IS ${scores}`);
    });
  }
}, 1000);

//SCORE FUNCTION
squares.forEach((square) => {
  square.addEventListener("click", function () {
    if (square.classList.contains("mole")) {
      scores = Number(scores + 1);
      score.innerHTML = `Score:${scores}`;
      // console.log(scores);
    }
  });
});
