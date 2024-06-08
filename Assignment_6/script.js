let timer;
let startTime;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function startTimer() {
  startTime = Date.now();
  timer = setInterval(updateDisplay, 1000);
  running = true;
}

function stopTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  display.textContent = "00:00:00";
  running = false;
}

function updateDisplay() {
  const elapsedTime = Date.now() - startTime;
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  const formattedTime =
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  display.textContent = formattedTime;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

startBtn.addEventListener("click", function () {
  if (!running) {
    startTimer();
  }
});

stopBtn.addEventListener("click", function () {
  if (running) {
    stopTimer();
  }
});

resetBtn.addEventListener("click", function () {
  resetTimer();
});
