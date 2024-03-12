var timerRunning = false;
var timerInterval;
var startTime;
var elapsedTime = 0;
var lastTime = 0;

var icon = document.getElementById("playStopButton");
var timerDisplay = document.getElementById("timerDisplay");
var congratsMessage = document.getElementById("congratsMessage");

// Check if timer is already running
window.onload = function() {
    if (localStorage.getItem('timerRunning') === 'true') {
        timerRunning = true;
        lastTime = parseInt(localStorage.getItem('elapsedTime')) || 0; // Retrieve elapsed time
        startTimer();
        icon.style.backgroundImage = 'url("icons/clock.dark.png")';
        timerDisplay.style.display = "block"; // Ensure timer display is visible
        timerDisplay.textContent = localStorage.getItem('formattedTime') || '0:00:00'; // Show the previously stored time
    } else {
        icon.style.backgroundImage = 'url("icons/clock.day.png")';
    }
};

function playStopTimer() {
    if (!timerRunning) {
        startTimer();
        timerDisplay.style.bottom = "20%";
        timerDisplay.style.left = "52%";
        timerDisplay.style.display = "block";
        congratsMessage.style.display = "none";
        icon.style.backgroundImage = 'url("icons/clock.dark.png")';
        timerRunning = true;
        localStorage.setItem('timerRunning', 'true');
    } else {
        clearInterval(timerInterval);
        timerDisplay.style.buttom = "20%";
        timerDisplay.style.left = "58.5%";
        congratsMessage.style.display = "block";
        icon.style.backgroundImage = 'url("icons/clock.day.png")';
        timerRunning = false;
        localStorage.setItem('timerRunning', 'false');}

        elapsedTime = 0;
        lastTime = 0;
        // timerDisplay.textContent = "0:00:00"; // Reset displayed time
        localStorage.removeItem('formattedTime'); // Remove stored formatted time
        localStorage.removeItem('elapsedTime');
}


function startTimer() 
{
    var formattedTime = formatElapsedTime(elapsedTime);
    timerDisplay.textContent = formattedTime;
    startTime = new Date().getTime() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    var currentTime = new Date().getTime();
    var elapsedTimeWithoutLastTime = currentTime - startTime;
    elapsedTime = elapsedTimeWithoutLastTime + lastTime;
    if (timerRunning) {
        var formattedTime = formatElapsedTime(elapsedTime);
        timerDisplay.textContent = formattedTime;
        localStorage.setItem('formattedTime', formattedTime); // Store the formatted time
        localStorage.setItem('elapsedTime', elapsedTime); // Store elapsed time
    }
}

function formatElapsedTime(time) {
    var hours = Math.floor(time / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);
    return hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
