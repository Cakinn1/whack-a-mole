const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const button = document.querySelector("#button");
const changeSpeedButton = document.querySelector("#change-speed");
const changeTimeLeftDisplay = document.querySelector("#change-time__left");

let timeLeftByPlayer = 15;
let result = 0;
let hitPositions;
let currentTime = timeLeftByPlayer;
let timerId = null;
let changeTime = 500;

function randomSqaure() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomSqaure = squares[Math.floor(Math.random() * squares.length)];
  randomSqaure.classList.add("mole");

  hitPositions = randomSqaure.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPositions) {
      result++;
      score.innerHTML = result;
      hitPositions = null;
    }
  });
});

function moveMole() {
  timerId = null;
  timerId = setInterval(() => {
    randomSqaure();
  }, changeTime);
}

function countDown() {
  currentTime--;
  timeLeft.innerHTML = currentTime;

  if (currentTime === 0) {
    clearInterval(contDownTimerId);
    clearInterval(timerId);
    alert("Game over your final score is " + result);
  }
}

button.addEventListener("click", () => {
  if (currentTime === 0) {
    currentTime = TIME_LEFT;
  }
  moveMole();
  countDown();
  contDownTimerId = setInterval(countDown, 1000);
});

changeSpeedButton.addEventListener("click", () => {
  changeTime = prompt("Change interval time!");
  console.log(changeTime);
});


changeTimeLeftDisplay.addEventListener('click', () => {
    timeLeftByPlayer = prompt('change time left!')
    timeLeft.innerHTML = timeLeftByPlayer
})