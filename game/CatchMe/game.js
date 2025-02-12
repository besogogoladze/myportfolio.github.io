let boxes = document.querySelector(".buttonHover");
let box = document.querySelector(".box");
let container = document.querySelector(".container");
let button = document.querySelector(".button");
let point = document.querySelector(".point");
let point_result = document.querySelector(".point_result");
let pointer = document.querySelector(".pointer");
let timeCount = document.getElementById("timeLeft");
let start = document.getElementById("start");
let lastPoint = document.getElementById("lastPoint");
let restart = document.getElementById("restart");

let number = 0;

let seconds;

const restartGame = () => {
    window.location.reload();
}

const startButton = () => {
    restart.style.display = 'block';
    box.style.display = 'flex';
    lastPoint.style.display = 'none';
    box.style.pointerEvents = 'unset';
    point.innerHTML = number;
    seconds = 31;
    makeIteration();
};

const makeIteration = () => {
    start.style.display = 'none'
    seconds -= 1;
  if (seconds > 0) {
    setTimeout(makeIteration, 1000);
  }
  else if(seconds == 0) {
    box.style.display = 'none';
    start.style.display = 'block';
    lastPoint.style.display = 'block';
    number = 0;
  }
  timeCount.innerHTML = `Time: ${seconds}`;
};

if (document.location.reload) {
  boxes.style.position = "relative";
} else if (button.clicked == true) {
  daachire();
} else {
  myFunction();
}

function points() {
  number++;
  point.innerHTML = number;
  point_result.innerHTML = number;
}
function daachire() {
  button.innerHTML = "Congrats!";
  boxes.style.position = "unset";
  button.classList.add("pointer");
  points();
}

function myFunction() {
  boxes.style.position = "absolute";
  button.innerHTML = "catch me!";
  button.classList.remove("pointer");
  boxes.style.top = Math.floor(Math.random() * 60 + 10) + "%";
  boxes.style.bottom = Math.floor(Math.random() * 60 + 0) + "%";
  boxes.style.left = Math.floor(Math.random() * 80 + 0) + "%";
}
