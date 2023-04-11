"use strict";

const squares = document.querySelectorAll(".square");
const score = document.querySelector(".score");
const time = document.querySelector(".time");
const mole = document.querySelector(".mole");

setInterval(randomSquare, 1000);
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomPosition = Math.trunc(Math.random() * 9);
  console.log(randomPosition);
}
