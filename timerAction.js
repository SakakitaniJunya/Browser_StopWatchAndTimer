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
  // 経過時間を、時、分、秒に分類
  const minutes = Math.floor((timerSeconds % 3600000) / 60000);
  const seconds = Math.floor(((timerSeconds % 3600000) % 60000) / 1000);

  // 表示用の時間に成形
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  document.getElementById("stopWatch-time").textContent = formattedTime;

  document.title = `${formattedTime}`;
}

// Startボタンを押した時の処理
function startTimer() {
  if (intervalID) {
    clearInterval(intervalID);
  }
  document.getElementById("input-minutes").disabled = true;
  document.getElementById("input-minutes").hidden = true;
  if (inputMinutes == 0) {
    inputMinutes = parseInt(document.getElementById("input-minutes").value, 10);
    timerSeconds = inputMinutes * 60;
  }

  updateTitle();
  document.getElementById("stopWatch-time").style.height = "auto";
  intervalID = setInterval(function () {
    updateTimerDisplay();
    decrementSeconds();
  }, 1000);
}

// Stopボタンを推したときの処理
function stopTimer() {
  clearInterval(intervalID);
}

// Resetボタンを推したときの処理
function resetTimer() {
  clearInterval(intervalID);
  document.getElementById("input-minutes").disabled = false;
  document.getElementById("input-minutes").hidden = false;
  document.getElementById("input-minutes").value = "";
  timerSeconds = 0;
  updateTitle();
}

window.onload = function () {
  updateTitle();
  document.getElementById("timer-start").addEventListener("click", startTimer);
};

document.getElementById("timer-stop").addEventListener("click", stopTimer);
document.getElementById("timer-reset").addEventListener("click", resetTimer);
