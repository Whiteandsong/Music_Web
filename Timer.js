var timerRunning = false;
var timerPaused = false;
var timerInterval;
var startTime;
var elapsedTime = 0;
var lastTime = 0;

function playStopTimer() {
    var button = document.getElementById("playStopButton");
    if (!timerRunning) {
        startTimer();
        timerDisplay.style.top = "40%";
        timerDisplay.style.left = "50%";
        timerDisplay.style.display = "block";
        congratsMessage.style.display = "none";
        button.style.backgroundImage = 'url("icons/clock.dark.png")';
        timerRunning = true;
    } else {
        timerDisplay.style.top = "50%";
        timerDisplay.style.left = "60%";
        congratsMessage.style.display = "block";
        button.style.backgroundImage = 'url("icons/clock.day.png")';
        timerRunning = false;}
}

function startTimer() {
    clearInterval(timerInterval);
    var elapsedTimeInSeconds = elapsedTime / 1000;
    var formattedTime = formatElapsedTime(elapsedTime);
    // alert("当前持续时间：" + formattedTime);
    document.getElementById("timerDisplay").textContent = "00:00:00";
    elapsedTime = 0;
    startTime = new Date().getTime() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
}


function updateTimer() {
    var currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime + lastTime;
    
    if (timerRunning) {
        document.getElementById("timerDisplay").textContent = formatElapsedTime(elapsedTime);
    }
}

function formatElapsedTime(time) {
    var hours = Math.floor(time / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);
    return hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}


