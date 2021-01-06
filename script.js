// variables that target container class and text id
const container = document.querySelector(".container");
const text = document.querySelector("#text");

// variables for time in milliseconds, then divided according to breathing and hold times
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// calls function
breatheAnimation();

// function for breathe animation
function breatheAnimation() {
  text.innerHTML = "Breathe In";
  //   grow animation
  container.className = "container grow";

  //   animation changes after amount of time for breatheTime variable
  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out";
      //   shrink animation
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

// calls function every x amount of seconds the totalTime variable is for
setInterval(breatheAnimation, totalTime);
