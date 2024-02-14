var originalTexts = {
    "button2": "White Noise",
    "button3": "Natural Sound",
    "button4": "Cosmic Sound",
    "main": "Main",
    "1": "Sound 1",
    "2": "Sound 2",
    "3": "Sound 3"

};

function toggleSplitInterface() {
    var splitInterface = document.getElementById('split-interface');
    var button1 = document.getElementById('button1');
    var buttons = document.querySelectorAll('.split-button');
    if (splitInterface.style.left === "-20%") {
        splitInterface.style.left = "0";
        button1.style.transition = "left 0.5s ease";
        button1.style.left = "230px"
        buttons.forEach(function(button) {
            button.style.display = "block";
        });
    } else {
        splitInterface.style.left = "-20%";
        button1.style.left = "13px";
        buttons.forEach(function(button) {
            button.style.display = "none";
        });
    }
}

function toggleButtonText(buttonId) {
    var button = document.getElementById(buttonId);
    if (button.innerHTML === originalTexts[buttonId]) { 
        button.innerHTML = "Play";
    } else {
        button.innerHTML = originalTexts[buttonId];
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.split-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetPage = button.getAttribute('data-target');
            if (targetPage) {
                window.location.href = targetPage;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.music-button');
    var audioPlayer = document.getElementById('audioPlayer');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var musicFile = button.getAttribute('data-music');
            if (musicFile) {
                audioPlayer.src = musicFile;
                audioPlayer.play();
            }
        });
    });
});

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