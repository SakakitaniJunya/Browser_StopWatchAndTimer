let timerSeconds = 0;
let intervalID;
let inputMinutes = 0;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function updateTitle() {
  document.title = `timer: ${formatTime(timerSeconds)}`;
}

function decrementSeconds() {
  if (timerSeconds > 0) {
    timerSeconds--;
  }
  updateTitle();
}

function updateTimerDisplay() {
  const formattedTime = formatTime(timerSeconds);
  document.getElementById("stopWatch-time").textContent = formattedTime;
  document.title = formattedTime;
}

function startTimer() {
  if (intervalID) {
    clearInterval(intervalID);
  }

  document.getElementById("input-minutes").disabled = true;
  document.getElementById("input-minutes").hidden = true;

  if (inputMinutes === 0) {
    inputMinutes = parseInt(document.getElementById("input-minutes").value, 10);
    timerSeconds = inputMinutes * 60;
  }

  updateTitle();
  document.getElementById("stopWatch-time").style.height = "auto";

  intervalID = setInterval(() => {
    decrementSeconds();
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalID);
}

function resetTimer() {
  clearInterval(intervalID);
  document.getElementById("input-minutes").disabled = false;
  document.getElementById("input-minutes").hidden = false;
  document.getElementById("input-minutes").value = "";
  document.getElementById("stopWatch-time").style.height = 0;

  timerSeconds = 0;
  updateTitle();
}

window.onload = function () {
  updateTitle();
  document.getElementById("timer-start").addEventListener("click", startTimer);
};

document.getElementById("timer-stop").addEventListener("click", stopTimer);
document.getElementById("timer-reset").addEventListener("click", resetTimer);
