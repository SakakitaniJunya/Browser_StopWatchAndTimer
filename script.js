let startTime;
let elapsedTime = 0;
let timeInterval;

const timeDisplay = document.getElementById("time");

function updateTimeDisplay() {
  // 経過時間を、時、分、秒に分類
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor(((elapsedTime % 3600000) % 60000) / 1000);

  // 表示用の時間に成形
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  timeDisplay.textContent = formattedTime;
  document.title = `${formattedTime}`;
}

// 1. ストップウォッチ開始
function StopWatchStart() {
  // 開始時間を記録
  startTime = Date.now() - elapsedTime;

  // タイマーをセット
  timeInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    updateTimeDisplay();
  }, 1000);
}

// 2. ストップウォッチ終了
function StopWatchStop() {
  clearInterval(timeInterval);
}

// 3. ストップウォッチリセット
function StopWatchReset() {
  elapsedTime = 0;
  updateTimeDisplay();
  clearInterval(timeInterval);
}

// 4. HTMLのstart、stop、resetボタンにそれぞれイベントリスナーを追加
document.getElementById("start").addEventListener("click", StopWatchStart);
document.getElementById("stop").addEventListener("click", StopWatchStop);
document.getElementById("reset").addEventListener("click", StopWatchReset);
