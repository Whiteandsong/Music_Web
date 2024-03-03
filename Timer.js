var timerRunning = false;
var timerInterval;
var startTime;
var elapsedTime = 0;
var lastTime = 0;

var icon = document.getElementById("playStopButton");
var timerDisplay = document.getElementById("timerDisplay");
var congratsMessage = document.getElementById("congratsMessage");

// Check if timer is already running
if (localStorage.getItem('timerRunning') === 'true') {
    timerRunning = true;
    startTimer();
    icon.style.backgroundImage = 'url("icons/clock.dark.png")';
    timerDisplay.style.display = "block"; // Ensure timer display is visible
    timerDisplay.textContent = localStorage.getItem('formattedTime'); // Show the previously stored time
} else {
    icon.style.backgroundImage = 'url("icons/clock.day.png")';
}

function playStopTimer() {
    if (!timerRunning) {
        startTimer();
        timerDisplay.style.top = "40%";
        timerDisplay.style.left = "50%";
        timerDisplay.style.display = "block";
        congratsMessage.style.display = "none";
        icon.style.backgroundImage = 'url("icons/clock.dark.png")';
        timerRunning = true;
        localStorage.setItem('timerRunning', 'true');
    } else {
        clearInterval(timerInterval);
        timerDisplay.style.top = "50%";
        timerDisplay.style.left = "60%";
        congratsMessage.style.display = "block";
        icon.style.backgroundImage = 'url("icons/clock.day.png")';
        timerRunning = false;
        localStorage.setItem('timerRunning', 'false');
        elapsedTime = 0;
        lastTime = 0;
    }
}

function startTimer() {
    clearInterval(timerInterval);
    var formattedTime = formatElapsedTime(elapsedTime);
    timerDisplay.textContent = formattedTime;
    startTime = new Date().getTime() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    var currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime + lastTime;
    if (timerRunning) {
        var formattedTime = formatElapsedTime(elapsedTime);
        timerDisplay.textContent = formattedTime;
        localStorage.setItem('formattedTime', formattedTime); // Store the formatted time
    }
}

function formatElapsedTime(time) {
    var hours = Math.floor(time / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);
    return hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
