var timerRunning = false;
var timerPaused = false;
var timerInterval;
var startTime;
var elapsedTime = 0;
var lastTime = 0;

function playStopTimer() {
    var button = document.getElementById("playStopButton");
    if (!timerRunning) {
        // Start the timer
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTimer, 1000);
        button.textContent = "Stop";
        timerRunning = true;
    } else {
        // Stop the timer
        clearInterval(timerInterval);
        button.textContent = "Continue";
        timerRunning = false;
        lastTime = elapsedTime; // Save the current elapsed time
    }
}

function restartTimer() {
    clearInterval(timerInterval);
    document.getElementById("playStopButton").textContent = "Start";
    timerRunning = false;
    timerPaused = false;
    elapsedTime = 0;
    lastTime = 0;
    document.getElementById("timerDisplay").textContent = "0:00:00";
}

function updateTimer() {
    var currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime + lastTime;
    var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    document.getElementById("timerDisplay").textContent = hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}