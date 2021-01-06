// variables that target container class and text id
const container = document.querySelector(".container");
const text = document.querySelector("#text");

// variables for time in milliseconds, then divided according to breathing and hold times
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
