// ラジオボタンの状態を取得し、Modeを変更する

// HTML要素を取得
const radioBtnTimer = document.getElementById("radioBtnTimer");
const radioStopWatch = document.getElementById("radioStopWatch");
const timerContainer = document.querySelector(".Timer-container");
const stopWatchContainer = document.querySelector(".Stopwatch-container");

function toggleContainer() {
  console.log("test");
  if (radioBtnTimer.checked) {
    timerContainer.style.display = "block";
    stopWatchContainer.style.display = "none";
  } else if (radioStopWatch.checked) {
    timerContainer.style.display = "none";
    stopWatchContainer.style.display = "block";
  } else {
  }
}

// イベント登録
radioBtnTimer.addEventListener("change", toggleContainer);
radioStopWatch.addEventListener("change", toggleContainer);
